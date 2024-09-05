import axios from 'axios';
import { ITodo } from '../types/globalInterfaces';

async function addTodo(text: string): Promise<ITodo[]> {
  try {
    const response = await axios.post(`http://localhost:5256/api/Todos/`, {
      Text: text,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default addTodo;
