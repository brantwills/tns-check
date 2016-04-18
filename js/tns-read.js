(function(tns){


    /**
     * 
     */
    function setMetaData(){
        $('.file-name').html(tns.file.name);
        $('.file-size').html(tns.file.size);
        $('.file-type').html(tns.file.type);
        $('.file-date').html(tns.file.lastModifiedDate);
    }


    /**
     * Create the drag over handler 
     * Explicitly show this is a copy.
     *
     * @param evt - the event of interest
     */
    tns.handleDragOver = function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; 
    };
  

    /**
     * Create the file select handler
     *
     * @param evt - the event of interest
     */
    tns.handleFileSelect = function(evt) {

        evt.stopPropagation();
        evt.preventDefault();

        // todo(bwills): make this only read .ora files
        var files = evt.dataTransfer.files; 
        var lastFileIndex = files.length -1;

        // store the last file in memory
        tns.file = files[lastFileIndex];

        // read the file string and parse
        var reader = new FileReader();
        reader.onload = (function(file) { 
            return function(e) {
                var fileString = e.target.result;
                tns.parse(fileString);
                setMetaData();
            };
        })(tns.file);
        reader.readAsText(tns.file);        

    };

    



})(window.tns = window.tns || {});
