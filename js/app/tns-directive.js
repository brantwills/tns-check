angular.module('app-tns').directive('dropArea', function() {
   

   return {
       restrict: 'A',
       scope: {
          onParse: '&'
       },
       link: function(scope, elem) {
            
            /**
            * Bind the Drag Over event 
            * 
            * @param e {object} - the event we are binding against
            */
            elem.bind('dragover', function(e){

                e.stopPropagation();
                e.preventDefault();

                // todo(bwills): remove the originalEvent when jQuery goes out
                e.originalEvent.dataTransfer.dropEffect = 'copy';
            });


            /**
            * Bind the Drop event
            * 
            * @param e {object} - the event we are binding against
            */
            elem.bind('drop', function(e) {

                e.stopPropagation();
                e.preventDefault();
                
                // todo(bwills): remove the originalEvent when jQuery goes out
                scope.onParse({files: e.originalEvent.dataTransfer.files});
            });

       }
   };
});