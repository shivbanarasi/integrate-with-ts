import {Router} from 'express';
import {Todo} from '../models/todos'
let todos:Todo[]=[]
const route=Router();

route.get('/',(req,res,next)=>{
  res.status(200).json({
    todos:todos,
  })  

  route.post('/todo',(req,res)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.test
    }
    todos.push(newTodo);
    res.status(201).json({massage:'data inserted'})
  });

})

route.put('/todo/:todoId',(req,res)=>{
    const tid=req.params.todoId;
    const todoIndex=todos.findIndex(todoItem=>todoItem.id===tid);
    if(todoIndex>=0){
       todos[todoIndex]={id:todos[todoIndex].id,text:req.body.text};
       return res.status(200).json({massage:'updated',todos:todos})
    }
    res.status(404).json({massage:'could not find'})
})

route.delete('/todo/:todoId',(req,res)=>{
    todos=todos.filter(todoItem=>todoItem.id!==req.params.todoId);
    res.status(200).json({massage:'deleted todo',todos:todos})
})
export default route ;