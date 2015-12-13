/**
 * Директива для фокуса поля ввода после старта игры
 */
app.directive('inputFocus', function($timeout) {
    return {
        link: function(scope, element) {
            element.bind('click', function() {
                $timeout(function() {
                    element.parent().find('input')[0].focus();
                });
            });
        }
    };
});