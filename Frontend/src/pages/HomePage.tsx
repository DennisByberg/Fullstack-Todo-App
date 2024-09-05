import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import deleteTodo from '../api/deleteTodo';
import getAllTodos from '../api/getAllTodos';
import AddTodoDialog from '../components/Buttons/AddTodoDialog';
import DefaultIconButton from '../components/Buttons/DefaultIconButton';
import DialogPopup from '../components/DialogPopup';
import PageHeading from '../components/PageHeading';
import { listItemSX, listItemTextSX } from '../styles/homePageSX';
import { ITodo } from '../types/globalInterfaces';

function HomePage() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await getAllTodos();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };

    getTodos();
  }, []);

  function handleDeleteClick(todo: ITodo) {
    setSelectedTodo(todo);
    setIsDialogOpen(true);
  }

  function handleDeleteSelectedTodo() {
    if (selectedTodo) {
      deleteTodo(selectedTodo);
      setTodos(todos.filter((todo) => todo.id !== selectedTodo.id));
    }
  }

  function handleUpdateTodo() {
    // UPDATE CLICKED TODO
  }

  return (
    <React.Fragment>
      <PageHeading>Home</PageHeading>
      <DefaultIconButton
        color="default"
        icon={<PlaylistAddIcon />}
        onClick={() => setIsAddDialogOpen(true)}
        ariaLabel="Add Todo"
      />
      <List sx={{ mb: 4 }}>
        {todos.map((todo) => (
          <ListItem
            secondaryAction={
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  onClick={() => handleUpdateTodo()}
                  edge={'end'}
                  aria-label={'update'}
                >
                  <EditNoteIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDeleteClick(todo)}
                  edge={'end'}
                  aria-label={'delete'}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
            key={todo.id}
            sx={listItemSX}
          >
            <ListItemText sx={listItemTextSX} primary={todo.text} />
          </ListItem>
        ))}
      </List>
      <DialogPopup
        dialogTitle={'Delete Todo'}
        dialogText={`Are You sure you want to delete ${selectedTodo?.text}`}
        confirmText={'Yes, Delete'}
        cancelText={'Cancel'}
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        onConfirm={handleDeleteSelectedTodo}
      />
      <AddTodoDialog
        isAddDialogOpen={isAddDialogOpen}
        setIsAddDialogOpen={setIsAddDialogOpen}
        todos={todos}
        setTodos={setTodos}
      />
    </React.Fragment>
  );
}

export default HomePage;
