angular.module('app-tns').controller('tnsController', ['$scope', '$filter', 'tnsHelper', function($scope, $filter, tnsHelper) {


    /**
     * Load our antlr4 object  
     */
    var antlr4 = require('js/lib/antlr4/index');


    /**
     * Load the antlr Lexer object
     */
    var tnsnamesLexer = require('js/lib/tnsnamesLexer');


    /**
     * Load the antlr Parser object
     */
    var tnsnamesParser = require('js/lib/tnsnamesParser');


    /**
     * Load the antlr Listener object
     */
    var tnsnamesListener = require('js/lib/tnsnamesListener');


    /**
     * Create our file object to work with
     */
    var reader = new FileReader(); 



    /**
     * Use Antlr to parse the file String into memory
     * todo(bwills): need to get tns.entry into an array not convert
     *
     * @param e {reader event} - the single reader event file object
     */
    reader.onload = function(e){

         // Collect the raw string from the file
        var fileString = e.target.result;

        // Create Antlr4 items
        var chars = new antlr4.InputStream(fileString);
        var lexer = new tnsnamesLexer.tnsnamesLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new tnsnamesParser.tnsnamesParser(tokens);
        var listener = new tnsnamesListener.tnsnamesListener();

        // Create global TNS items
        tns.errors = [];
        tns.entries = {};
        tns.parser = parser;

        // Parse the tree 
        var tree = parser.tnsnames();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

        // If we have errors associate the correct alias 
        if(tns.errors.length){
            tnsHelper.associateAliasToErrors(tns.entries, tns.errors);
        }

        // Adjust formatting for users
        tnsHelper.formatEntriesForDisplay(tns.entries);

        // Assign the scope values
        $scope.showRawText = true;
        $scope.parseErrors = tns.errors;
        $scope.file.fileString = fileString;
        $scope.entryKeys = tnsHelper.getAllKeysFromEntries(tns.entries);
        $scope.entries = tnsHelper.setTextFromFileString(tns.entries, fileString);
        $scope.ExportEntries();
        $scope.$apply();
    }


    /**
     * Clears the TNS Entry search input
     */
    $scope.ClearSearch = function (){
        $scope.search = "";
        $scope.ExportEntries()
    }


    /**
     * Reset the control objects and messages to an empty state
     */
    $scope.ResetControl = function() {
        $scope.sort = "";
        $scope.file = "";
        $scope.search = "";
        $scope.errors = "";
        $scope.entries = "";
        $scope.parseErrors = "";
        $scope.ExportEntries()
    }


    /**
     * Move list items up or down or swap
     */
    $scope.MoveItem = function (origin, destination) {

        // Ignore if we are moving the first item 
        // Ignore if we are moving the last item
        if(destination < 0 || origin > $scope.entries.length){
            return;
        }

        var temp = $scope.entries[destination];
        $scope.entries[destination] = $scope.entries[origin];
        $scope.entries[origin] = temp;
        $scope.ExportEntries();
    };


    /**
     * Move list items up
     */
    $scope.MoveUp = function (entry) {
        $scope.MoveItem(entry.index, entry.index - 1);
    };


    /**
     * Move list items down
     */
    $scope.MoveDown = function (entry) {
        $scope.MoveItem(entry.index, entry.index + 1);
    };


    /**
     * Toggles the entries visibility
     * todo(bwills): there are several class toggles - may need helper 
     *
     * @param entry {object} - the single entry to manipulate
     */
    $scope.ToggleEntryVisibility = function(entry){
        entry.isVisible = !entry.isVisible;
        $scope.ExportEntries();
    }


    /**
     * Based on the filtering export the entries 
     * And if the entry is marked as visible
     * Calculate the text height based on rawText
     * todo(bwills): rename this as it is being used all over the place now
     */
    $scope.ExportEntries = function(){
        try{

            $scope.export = "";
            $scope.textHeight = 0;
            $scope.entries = $filter('orderBy')($scope.entries, $scope.sort);
            var filterEntries = $filter('filter')($scope.entries, $scope.search);

            // We do not want to destroy the index sort for moving items around
            angular.forEach($scope.entries, function(entry, index){
                entry.index = index;
            });

            // This is the loop for the actual items in the text area
            angular.forEach(filterEntries, function(entry, index){

                entry.index = index;
                $scope.textHeight += entry.rawText.split(/\r\n|\r|\n/).length;

                if(entry.isVisible){
                    $scope.export += entry.rawText;
                    $scope.export += '\n';
                }
            });

        } catch (e) {
            $scope.errors = "Unable to export entries: " + e.message;
        }
    }


    /**
     * The start of our parsing process
     * If there are no ora files detected we throw and error
     * 
     * @param files {array} - an array of dropped files
     */
    $scope.ParseFile = function(files) {
        try {

            $scope.ResetControl();
            var oraFile = tnsHelper.isolateSingleORAFile(files);

            // If we do not have an .ora file let them know
            if (!oraFile) {
                throw new Error(
                    "TNSnames.ora file not found, " +
                    "make sure the file ends with .ora"
                );
            }

            $scope.file = oraFile;
            reader.readAsText(oraFile);

        } catch (e) {
            $scope.errors = "Unable to parse file: " + e.message;
            $scope.$apply();
        }
    }

}]);