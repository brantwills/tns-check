angular.module('app-tns').controller('tnsController', ['$scope', function($scope){

  // Collect our RequireJS items
  var antlr4 = require('js/lib/antlr4/index');
  var tnsnamesLexer = require('js/lib/tnsnamesLexer');
  var tnsnamesParser = require('js/lib/tnsnamesParser');
  var tnsnamesListener = require('js/lib/tnsnamesListener');


  	function clearError(){
  		$scope.errors = "";
  	}


  	function showError(message){
  		$scope.errors = message;
  	}


	  /**
	  *
	  */
	  function parseFileStringIntoMemory(fileString){

        var chars = new antlr4.InputStream(fileString);
        var lexer = new tnsnamesLexer.tnsnamesLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new tnsnamesParser.tnsnamesParser(tokens);
        var listener = new tnsnamesListener.tnsnamesListener();

/*

        tns.entries = {};
        tns.parser = parser;
        var tree = parser.tnsnames(); 
        tns.antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        setEndLine(fileString);
*/

	  }


	/**
	*
	*/
	function setScopeFileMetaData(file, fileString){
		$scope.file = file;
		$scope.file.fileString = fileString;
	}



	/** 
	* Return a single ORA file to work with 
	* This only considers .ora files in our file array
	* We could have multiple files and we would like to just work with a single file
	* The single file we use is the last .ora file in our files array  
	*
	* @param files {file array} - the files of interest
	*/
	function isolateSingleORAFile(files){

		var oraFiles = [];
		angular.forEach(files, function(file, index){
		    var fileTypeFromName = file.name.split('.').pop();
		    if(fileTypeFromName == 'ora'){
		      oraFiles.push(file);
		    }
		});

		var lastFileIndex = oraFiles.length -1;
		return oraFiles[lastFileIndex];
	}



	/**
	* The start of our parsing process
	*
	* @param oraFile {file} - the single ora file of interest
	*/
	$scope.ParseFile = function (files){

		clearError();
		var oraFile = isolateSingleORAFile(files);
		console.log(oraFile);

		if(oraFile){
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
		else{

			showError("No ORA File detected");
		}


		

	}




    
}]);