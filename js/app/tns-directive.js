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
            elem.bind('dragover', function(e) {
                e.stopPropagation();
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
            });


            /**
             * Bind the Drop event
             * 
             * @param e {object} - the event we are binding against
             */
            elem.bind('drop', function(e) {

                e.stopPropagation();
                e.preventDefault();

                scope.onParse({
                    files: e.dataTransfer.files
                });
            });

        }
    };
});