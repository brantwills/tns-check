angular.module('app-tns').controller('tnsController', ['$scope', function($scope) {


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
     * Reset the control objects and messages to an empty state
     */
    function resetControl() {
        $scope.file = "";
        $scope.errors = "";
        $scope.entries = "";
        $scope.$apply();
    }


    /**
     * Display errors to the user
     *
     * @param message {string} - the error message to display
     */
    function showError(message) {
        $scope.errors = message;
        $scope.$apply();
    }


    /**
     * Sets the ora file meta data items into the controller scope 
     *
     * @param file {file Object} - the ora file of interest
     * @param fileString {string} - the full file string output from the ora file
     */
    function setScopeFileMetaData(file, fileString) {
        try {
            $scope.file = file;
            $scope.file.fileString = fileString;
            console.log(file);
        } catch (e) {
            showError("Unable to set file metadata: " + e.message);
        }
    }


    /**
     * Sets the end line number in the entry 
     * todo(bwills): need to correct, this is not working correctly in all cases
     *
     * @param fileString {string} - the full file string output from the ora file
     */
    function setEndLine(fileString) {
        try {
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

        } catch (e) {
            showError("Unable to set end line:" + e.message);
        }
    }


    /**
     * Associates the individual TNS entries raw text into the entry itself 
     * todo(bwills): rename this function
     * todo(bwills): need to correct, this is not working correctly in all cases
     * todo(bwills): would be nice to capture all the comments too
     *
     * @param fileString {string} - the full file string output from the ora file
     */
    function setRawText(fileString) {
        try {
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
        } catch (e) {
            showError("Unable to set raw text:" + e.message);
        }
    }


    /**
     * Use Antlr to parse the file String into memory
     * 
     * @param fileString {string} - the full file string output from the ora file
     */
    function parseFileStringIntoMemory(fileString) {
        try {
            var chars = new antlr4.InputStream(fileString);
            var lexer = new tnsnamesLexer.tnsnamesLexer(chars);
            var tokens = new antlr4.CommonTokenStream(lexer);
            var parser = new tnsnamesParser.tnsnamesParser(tokens);
            var listener = new tnsnamesListener.tnsnamesListener();

            tns.errors = [];
            tns.entries = {};
            tns.parser = parser;

            var tree = parser.tnsnames();
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

            setEndLine(fileString);
            setRawText(fileString);

            $scope.entries = tns.entries;
            $scope.parseErrors = tns.errors;

            console.log(tns.entries);
            
        } catch (e) {
            showError("Unable to parse file string into memory: " + e.message);
        }
    }


    /** 
     * Return a single ORA file to work with 
     * This only considers .ora files in our file array
     * The single file we use is the last .ora file in our files array  
     *
     * @param files {file array} - the files of interest
     */
    function isolateSingleORAFile(files) {
        try {
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
        } catch (e) {
            showError("Unable to isolate ora file: " + e.message);
        }
    }


    /**
     * The start of our parsing process
     * If there are no ora files detected we throw and error
     *
     * @param oraFile {file} - the single ora file of interest
     */
    $scope.ParseFile = function(files) {
        try {
            resetControl();
            var oraFile = isolateSingleORAFile(files);

            // If we do not have an .ora file let them know
            if (!oraFile) {
                throw new Error(
                    "TNSnames.ora file not found, " +
                    "make sure the file ends with .ora"
                );
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
            reader.readAsText(oraFile);
        } catch (e) {
            showError("Unable to parse file: " + e.message);
        }
    }


}]);