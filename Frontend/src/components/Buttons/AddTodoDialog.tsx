import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import addTodo from '../../api/addTodo';
import getAllTodos from '../../api/getAllTodos';
import { ITodo } from '../../types/globalInterfaces';

interface IAddTodoDialogProps {
  isAddDialogOpen: boolean;
  setIsAddDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function AddTodoDialog({
  isAddDialogOpen,
  setIsAddDialogOpen,
  setTodos,
}: IAddTodoDialogProps) {
  const [inputText, setInputText] = useState('');
  const handleClose = () => {
    setIsAddDialogOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addTodo(inputText);
      setTodos(await getAllTodos());
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={isAddDialogOpen}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            required
            margin="dense"
            id="name"
            name="text"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
