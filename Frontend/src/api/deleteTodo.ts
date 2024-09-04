import axios from 'axios';
import { ITodo } from '../types/globalInterfaces';

async function deleteTodo(todo: ITodo): Promise<ITodo[]> {
  try {
    const response = await axios.delete(`http://localhost:5256/api/Todos/${todo.id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo');
    throw error;
  }
}

export default deleteTodo;
