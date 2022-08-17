import React from 'react';
import './App.css';
import Header from './Components/Header';
import NoteInput from './Components/NoteInput';
import NoteList from './Components/NoteList';
import { useQuery, gql, useMutation } from '@apollo/client';


export const NOTES_QUERY = gql`
query GetNotes {
  note {
    text
  }
}`;

export const ADD_NOTE = gql`
mutation AddNote($type: String!) {
  addTodo(type: $type) {
    text
  }
}`;


function App() {

  const saveNoteToDB = (value: string) => {
    console.log("Saving...")
  }

  return (
    <div className="App">
      <Header/>
      <NoteInput saveNoteToDB={saveNoteToDB}/>
      <NoteList getNoteFromDB={[]}/>
    </div>
  );
}

export default App;
