var app = angular.module('myApp',[]);
      app.directive('stickyHeader',function(){
            restrict: 'A'
            return function(scope, element, attrs) {
                var tableOffset = element.offset().top; //table offset value
                var width = element.width();
                $(window).bind('resize', function(){
                    width = element.width();
                    element.find('thead').css({"width":width});
                })
                $(window).bind("scroll", function() {
                        var offset = $(window).scrollTop();
                        if(offset>tableOffset){
                            //margin-top value depends on requirement
                            element.find('thead').css({"position":"fixed", "z-index":"0", "margin-top":"-10px","width":width});
                        } else{
                          element.find('thead').removeAttr("style");
                        }
                })                
            }
        })        

