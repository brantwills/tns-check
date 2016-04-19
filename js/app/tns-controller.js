angular.module('app-tns').controller('tnsController', ['$scope', function($scope) {

    // Collect our RequireJS items
    var antlr4 = require('js/lib/antlr4/index');
    var tnsnamesLexer = require('js/lib/tnsnamesLexer');
    var tnsnamesParser = require('js/lib/tnsnamesParser');
    var tnsnamesListener = require('js/lib/tnsnamesListener');


    function resetControl() {
        $scope.file = "";
        $scope.errors = "";
        $scope.entries = "";
        $scope.$apply();
    }


    function showError(message) {
        $scope.errors = message;
        $scope.$apply();
    }


    /**
     *
     */
    function setScopeFileMetaData(file, fileString) {
        $scope.file = file;
        $scope.file.fileString = fileString;
        console.log(file);
    }

    /**
     *
     */
    function setEndLine(fileString) {

        var entries = [];
        $.each(tns.entries, function(index, entry) {
            entries.push(entry);
        });

        for (var i = 0; i < entries.length; i++) {
            if (i + 1 < entries.length) {
                entries[i].endLine = entries[i + 1].startLine;
            } else {
                entries[i].endLine = fileString.split(/\r\n|\r|\n/).length;
            }
        }

        var j = 0;
        $.each(tns.entries, function(index, entry) {
            tns.entries[index] = entries[j];
            j++
        });

    }




    function setRawText(fileString) {

        var fileArray = fileString.split(/\r\n|\r|\n/);
        $.each(tns.entries, function(index, entry) {
            var rawText = "";
            for (var line = entry.startLine; line < entry.endLine; line++) {
                if (fileArray[line - 1][0] != '#') {
                    rawText += fileArray[line - 1] + '\r\n';
                }
            }
            entry.rawText = rawText;
        });

    }



    /**
     *
     */
    function parseFileStringIntoMemory(fileString) {

        var chars = new antlr4.InputStream(fileString);
        var lexer = new tnsnamesLexer.tnsnamesLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new tnsnamesParser.tnsnamesParser(tokens);
        var listener = new tnsnamesListener.tnsnamesListener();

        tns.entries = {};
        tns.parser = parser;

        var tree = parser.tnsnames();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

        setEndLine(fileString);
        setRawText(fileString);

        $scope.entries = tns.entries;
        console.log(tns.entries);

    }




    /** 
     * Return a single ORA file to work with 
     * This only considers .ora files in our file array
     * We could have multiple files and we would like to just work with a single file
     * The single file we use is the last .ora file in our files array  
     *
     * @param files {file array} - the files of interest
     */
    function isolateSingleORAFile(files) {

        var oraFiles = [];
        angular.forEach(files, function(file, index) {
            var fileTypeFromName = file.name.split('.').pop();
            if (fileTypeFromName.toLowerCase() == 'ora') {
                oraFiles.push(file);
            }
        });

        if (oraFiles.length) {
            var lastFileIndex = oraFiles.length - 1;
            return oraFiles[lastFileIndex];
        }

        return false;
    }



    /**
     * The start of our parsing process
     *
     * @param oraFile {file} - the single ora file of interest
     */
    $scope.ParseFile = function(files) {

        resetControl();
        var oraFile = isolateSingleORAFile(files);

        // If we do not have an .ora file let them know
        if (!oraFile) {
            showError(
                "Unable to detect an TNSnames.ORA file, " +
                "make sure the file ends with .ora"
            );
            return;
        }


        // read the file string and parse
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(e) {
                var fileString = e.target.result;
                setScopeFileMetaData(file, fileString);
                parseFileStringIntoMemory(fileString);
                $scope.$apply();
            };
        })(oraFile);

        // Trigger the read as Text onlode above
        reader.readAsText(oraFile);

    }


}]);