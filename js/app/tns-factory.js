angular.module('app-tns').factory('tnsHelper', [function() {

    /**
     * The Entry Object Keys we want to hide from users
     */
    var ignoredEntryKeys = 'startLine|endLine|tnsnames';


	return {


	    /**
	     * Associates the individual TNS entries raw text into the entry itself 
	     * todo(bwills): need to remove entryArray create stuff 
	     * todo(bwills): would be nice to capture all the comments too
	     *
	     * @param entries {Object} - the array of tns entries to examine
	     * @param fileString {string} - the full file string output from the ora file
	     */
	    setTextFromFileString: function(entries, fileString) {
	        try {
	            var entryArray = [];
	            var fileArray = fileString.split(/\r\n|\r|\n/);
	            angular.forEach(entries, function(entry, index){
	                if(entry.startLine){
	                    var rawText = "";
	                    for (var line = entry.startLine; line <= entry.endLine; line++) {
	                        rawText += fileArray[line - 1] + '\r\n';
	                    }
	                    entry.rawText = rawText;
	                    entryArray.push(entry);
	                }
	            });
	            return entryArray;
	        } catch (e) {
	            throw "Unable to set raw text:" + e.message;
	        }
	    },


	    /**
	     * Collect all the Keys from the entries object
	     * We need this for setting any filtering drop down lists 
	     * Sorts the array
	     * todo(bwills): this should be limited to only what we want to show not all antlr4 stuff
	     *
	     * @param entries {Object} - the array of tns entries to examine
	     */
	    getAllKeysFromEntries: function(entries){
	        try
	        {
	            var keys = [];
	            angular.forEach(entries, function(entry, index){
	                for (var key in entry) {
	                  if (entry.hasOwnProperty(key) && keys.indexOf(key) == -1){
	                    if(!key.match(ignoredEntryKeys)){
	                        keys.push(key);
	                    }
	                  }
	                }
	            });
	            return keys.sort();
	        } catch (e) {
	            throw "Unable to get keys from entries:" + e.message;
	        }
	    },


	    /** 
	     * Return a single ORA file to work with 
	     * This only considers .ora files in our file array
	     * The single file we use is the last .ora file in our files array  
	     *
	     * @param files {file array} - the files of interest
	     */
	     isolateSingleORAFile: function(files) {
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
	            throw "Unable to isolate ora file: " + e.message;
	        }
	    },


	    /**
	     * We would like to associate the alias to whatever error we show the user 
	     * We leverage the line numbers to know which alias the error falls under
	     *    
	     * @param entries {Object} - the array of tns entries to examine
	     * @param errors {Object} - the array of errors to examine
	     */
	     associateAliasToErrors: function(entries, errors){
	        try{
	            angular.forEach(errors, function(error, indexError){
	                var alias;
	                angular.forEach(entries, function(entry, indexEntry){
	                    if((error.line >= entry.startLine && error.line <= entry.endLine)){
	                        alias = entry.alias;
	                        return;
	                    }
	                });
	                error.alias = alias || 'Unknown';
	            });
	        } catch (e) {
	            throw "Unable to associate errors to alias: " + e.message;
	        }
	    },


	    /**
	     * Convert array values into joined strings 
	     * Set the isVisible value to true
	     * Set the entry index value for moving position 
	     *
	     * @param entries {Object} - the array of tns entries to examine
	     */
	    formatEntriesForDisplay: function(entries){
	        try{
	            angular.forEach(entries, function(entry, index){
	            	
                    entry.index = index;
                    entry.isVisible = true;

	                for (var key in entry) {
	                    if (entry.hasOwnProperty(key) && angular.isArray(entry[key])){ 
	                        entry[key] = entry[key].join(', ');
	                    }

	                }
	            });
	        } catch (e) {
	            throw "Unable to format entries for display: " + e.message;
	        }
	    }

	}

}]);