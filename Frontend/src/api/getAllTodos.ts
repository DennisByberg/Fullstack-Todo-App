import axios from 'axios';
import { ITodo } from '../types/globalInterfaces';

async function getAllTodos(): Promise<ITodo[]> {
  try {
    const response = await axios.get('http://localhost:5256/api/Todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
}

export default getAllTodos;
