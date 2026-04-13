import { Todo } from "../models/todo.js";

export const createTodo = async (req,res)=>{
    try{
      let {title,description} = req.body;
      if(!title || !description){
        return res.status(401).json({
            succuss:false,
            message:"All field are Required!"
        });
      };
    //   let toDO = await Todo.create({
    //     title,
    //     description
    //   });
      let newtodo = new Todo({
        title,
        description
      });
      newtodo.save()
      res.json({
        succuss:true,
        message:"Task Created!",
        data:newtodo
      });
    }catch(error){
        console.log(error.message);
    }
};

export const getAllTodos = async (req,res)=>{
   try {
     const todos = await Todo.find();
     return res.json({
        succuss:true,
        message:todos.length === 0 ? "Todos Not Found!" : "Data Fetched!",
        data: todos.length === 0 ? [] : todos
    });

   } catch (error) {
    console.log(error.message);
   }
};

// Get Dynamic todo
export const getTodoById = async (req,res)=>{
   try {
    let todo = await Todo.findById(req.params.todoId);
    if(!todo){
      return res.status(400).json({
        succuss:false,
        message:"user Not Found!",
      });
    };
    return res.json({
      succuss:true,
      message:"Todo Fetched!",
      data:todo
    })
   } catch (error) {
    console.log(`error.message ${error.message}`);
   }
}
// Update Todo coming soon 
export const updateTodo = async (req,res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.todoId,
            req.body,
            {new:true}
        );
        return res.json({
          succuss:true,
          message:"Todo Updated!",
          todo
        });
    } catch (error) {
        console.log(`error.message ${error.message}`);
    }
};

//delete
export const deleteTodo = async (req,res)=>{
  try {
    let user = await Todo.findByIdAndDelete(req.params.todoId);
    if(!user){
      return res.status(400).json({
        succuss:false,
        message:"User Not Found"
      })
    };
    return res.json({
      succuss:true,
      message:`${user.title} Deleted!`
    });
  } catch (error) {
    console.log(`error.message ${error.message}`);
  }
}
