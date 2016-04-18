

    
(function(tns){

    /**
     *
     */
     function setEndLine(fileString){

        var entries = [];
        $.each(tns.entries, function(index, entry){
            entries.push(entry);
        });


        for(var i = 0; i<entries.length; i++){
            if(i + 1 < entries.length){
                 entries[i].endLine = entries[i+1].startLine;
            }
            else{
                entries[i].endLine = fileString.split(/\r\n|\r|\n/).length;
            }
        }

        var j= 0;
        $.each(tns.entries, function(index, entry){
            tns.entries[index] = entries[j];
            j++
        });

        setRawText(fileString);
    }





     function setRawText(fileString){

         var fileArray = fileString.split(/\r\n|\r|\n/);


        $.each(tns.entries, function(index, entry){
            var rawText = "";
            for(var line = entry.startLine; line < entry.endLine; line++){
                if(fileArray[line-1][0] != '#'){
                    rawText += fileArray[line-1];
                }
            }
            entry.rawText = rawText;
        });

        console.log(tns.entries);
     } 


    /**
     * Parse the file string into memory
     *
     * @param fileString {string} - the raw file string from the file of interest
     */
    tns.parse = function(fileString){

        var chars = new tns.antlr4.InputStream(fileString);
        var lexer = new tns.tnsnamesLexer.tnsnamesLexer(chars);
        var tokens  = new tns.antlr4.CommonTokenStream(lexer);
        var parser = new tns.tnsnamesParser.tnsnamesParser(tokens);
        var listener = new tns.tnsnamesListener.tnsnamesListener();

        tns.entries = {};
        tns.parser = parser;
        var tree = parser.tnsnames(); 
        tns.antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        setEndLine(fileString);

    };










})(window.tns = window.tns || {});

