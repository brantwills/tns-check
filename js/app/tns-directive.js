angular.module('app-tns').directive('dropArea', function() {
   return {
       restrict: 'A',
       link: function(scope, elem, attr, ctrl) {
            
            elem.bind('dragover', function(e){
                e.stopPropagation();
                e.preventDefault();
                e.originalEvent.dataTransfer.dropEffect = 'copy';
            });

            elem.bind('drop', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                var files = e.originalEvent.dataTransfer.files;
                console.log(files); 
            });
            

       }
   };
});