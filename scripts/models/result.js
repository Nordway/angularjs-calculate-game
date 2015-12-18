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
            this.times.unshift(t_diff);
        },
        /**
         * Получаем среднее время ответа пользователя
         * @param {number} limit количество последних ответов
         * @returns {number}
         */
        getAvg: function(limit) {
            var sum = 0;
            var count = limit;

            if (limit == 0) {
                count = this.time.length;
            }

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
            this.t_finish = performance.now();
            return this.t_finish - this.t_start;
        },
        /**
         * Переводим время в удобный для чтения формат
         * @param {number} time
         * @returns {string}
         */
        prepareTime: function(time) {
            return (parseFloat(time) / 1000).toFixed(4);
        }
    }

});