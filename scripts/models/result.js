'use strict';

app.factory('ResultModel', function () {

    return {
        /** @type {number|null} Время старта раунда */
        t_start: null,
        /** @type {number|null} Время получения ответа */
        t_finish: null,
        /** @type {Array} Времена ответов пользователя */
        times: [],
        /**
         * Сохранение времени ответа
         * @param t_diff
         */
        save: function(t_diff) {
            this.times.push(t_diff);
        },
        /**
         * Получаем среднее время ответа пользователя
         * @returns {number}
         */
        getAvg: function() {
            var sum = 0;
            var count = this.times.length;
            for (var i = 0; i < count; i++) {
                sum += this.times[i];
            }
            return this.prepareTime(sum / count);
        },
        /**
         * Получаем время ответа пользвоателя
         * @returns {number}
         */
        getDiff: function() {
            this.t_finish = new Date().getTime();
            return this.t_finish - this.t_start;
        },
        /**
         * Переводим время в удобный для чтения формат
         * @param {number} time
         * @returns {string}
         */
        prepareTime: function(time) {
            return (parseFloat(time) / 1000).toFixed(3);
        }
    }

});