"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos = [];
var route = (0, express_1.Router)();
route.get('/', function (req, res, next) {
    res.status(200).json({
        todos: todos,
    });
    route.post('/todo', function (req, res) {
        var newTodo = {
            id: new Date().toISOString(),
            text: req.body.test
        };
        todos.push(newTodo);
        res.status(201).json({ massage: 'data inserted' });
    });
});
route.put('/todo/:todoId', function (req, res) {
    var tid = req.params.todoId;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === tid; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ massage: 'updated', todos: todos });
    }
    res.status(404).json({ massage: 'could not find' });
});
route.delete('/todo/:todoId', function (req, res) {
    todos = todos.filter(function (todoItem) { return todoItem.id !== req.params.todoId; });
    res.status(200).json({ massage: 'deleted todo', todos: todos });
});
exports.default = route;
