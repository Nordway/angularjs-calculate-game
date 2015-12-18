'use strict';

app.factory('AnswerModel', function () {

    return {
        /** @type {Array} Данные ответов пользователя */
        answers: [],
        /**
         * Сохраняем ответ пользователя
         * @param expression Выражение
         * @param userResult Ответ пользователя
         * @param t_diff Затраченное время
         */
        save: function(expression, userResult, t_diff) {
            userResult = parseInt(userResult);
            this.answers.unshift([expression, userResult, t_diff]);
        }
    }

});