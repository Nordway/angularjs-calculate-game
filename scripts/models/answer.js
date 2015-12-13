'use strict';

app.factory('AnswerModel', function () {

    return {
        /** @type {Array} Данные ответов пользователя */
        answers: [],
        /**
         * Сохраняем ответ пользователя
         * @param expression Выражение
         * @param compResult Верный ответ
         * @param userResult Ответ пользователя
         * @param t_diff Затраченное время
         */
        save: function(expression, compResult, userResult, t_diff) {
            userResult = parseInt(userResult);
            var not_correct = '';
            if (userResult != compResult) {
                not_correct = 'not ';
            }
            this.answers.unshift([expression, userResult, not_correct, t_diff]);
        }
    }

});