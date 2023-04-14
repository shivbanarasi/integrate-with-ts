"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const route = (0, express_1.Router)();
route.get('/', (req, res, next) => {
    res.status(200).json({
        todos: todos,
    });
    route.post('/todo', (req, res) => {
        const body = req.body;
        const newTodo = {
            id: new Date().toISOString(),
            text: body.text
        };
        todos.push(newTodo);
        res.status(201).json({ massage: 'data inserted', todos: todos });
    });
});
route.put('/todo/:todoId', (req, res) => {
    const params = req.body;
    const tid = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ massage: 'updated', todos: todos });
    }
    return res.status(404).json({ massage: 'could not find' });
});
route.delete('/todo/:todoId', (req, res) => {
    const params = req.body;
    if (!params.todoId) {
        res.status(404).json({ massage: 'id not found' });
    }
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ massage: 'deleted todo', todos: todos });
});
route.put('/todo/:todoId', (req, res) => {
    const params = req.body;
    if (!params.todoId) {
        res.status(404).json({ massage: 'id not found' });
    }
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ massage: 'deleted todo', todos: todos });
});
exports.default = route;
