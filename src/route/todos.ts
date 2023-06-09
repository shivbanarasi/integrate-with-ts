import {Router} from 'express';
import {Todo} from '../models/todos'
let todos:Todo[]=[]
const route=Router();

type RequestBody={text:string };
type RequestParam={todoId:string};



route.get('/',(req,res,next)=>{
  res.status(200).json({
    todos:todos,
  })  

  route.post('/todo',(req,res)=>{
    const body=req.body as RequestBody
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:body.text
    }
    todos.push(newTodo);
    res.status(201).json({massage:'data inserted',todos:todos})
  });

})

route.put('/todo/:todoId',(req,res)=>{
  const params=req.body as RequestParam
    const tid=params.todoId;
    const body=req.body as RequestBody
    const todoIndex=todos.findIndex(todoItem=>todoItem.id===tid);
    if(todoIndex>=0){
       todos[todoIndex]={id:todos[todoIndex].id,text:req.body.text};
       return res.status(200).json({massage:'updated',todos:todos})
    }
   return res.status(404).json({massage:'could not find'})
})

route.delete('/todo/:todoId',(req,res)=>{
  const params=req.body as RequestParam
  if(!params.todoId){
    res.status(404).json({massage:'id not found'})
  }
    todos=todos.filter(todoItem=>todoItem.id!==req.params.todoId);
    res.status(200).json({massage:'deleted todo',todos:todos})

})
route.put('/todo/:todoId',(req,res)=>{
  const params=req.body as RequestParam
  if(!params.todoId){
    res.status(404).json({massage:'id not found'})
  }
    todos=todos.filter(todoItem=>todoItem.id!==req.params.todoId);
    res.status(200).json({massage:'deleted todo',todos:todos})

})
export default route ;