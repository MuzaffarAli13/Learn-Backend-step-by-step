import express from "express";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../controller/todo.js";

const router = express.Router()

router.post("/",createTodo);
router.get("/",getAllTodos);
router.get("/:todoId",getTodoById);
router.put("/:todoId",updateTodo);
router.delete("/:todoId",deleteTodo);


export default router;