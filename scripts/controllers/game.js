'use strict';

app.controller('GameCtrl', function ($scope, LevelModel, AnswerModel, ResultModel) {

    /** @type {Array|*|*[]} Модель с уровнями сложности */
    $scope.levels = LevelModel.levels;
    /** @type {*} Текущий уровень сложности */
    $scope.current_level = $scope.levels[0];

    /** @type {float} Среднее время вычисления */
    $scope.avg = 0.0;
    /** @type {boolean} Состояние игры */
    $scope.game_in_process = false;
    /** @type {string} Выражение для вычисления */
    $scope.expression = 'Вы готовы?';

    /**
     * Запускаем игру
     * @param level
     */
    $scope.startGame = function(level) {
        $scope.current_level = level;
        $scope.game_in_process = true;
        LevelModel.setLevel(level);
        //$window.document.getElementById('inp_answer').focus();
        $scope.startNewRound();
    };

    /**
     * Останавливаем игру
     */
    $scope.stopGame = function() {
        $scope.game_in_process = false;
    };

    /**
     * Обрабатываем ответ пользователя
     * и запускаем новый раунд
     * @param result
     */
    $scope.addResult = function(result) {
        var t_diff = ResultModel.getDiff();
        ResultModel.save(t_diff);
        AnswerModel.save($scope.expression, $scope.compResult, result, ResultModel.prepareTime(t_diff));
        $scope.avg = ResultModel.getAvg();
        $scope.answers = AnswerModel.answers;
        $scope.startNewRound();
    };

    /**
     * Новый раунд. Генерируем выражение для вычисления
     */
    $scope.startNewRound = function() {
        var value_a = LevelModel.getRandom();
        var value_b = LevelModel.getRandom();
        $scope.expression = value_a + ' + ' + value_b + ' = ';
        $scope.compResult = value_a + value_b;
        $scope.result = '';
        ResultModel.t_start = new Date().getTime();
    };

});