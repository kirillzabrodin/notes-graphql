import React from 'react';
import './App.css';
import Header from './Components/Header';
import NoteInput from './Components/NoteInput';
import NoteList from './Components/NoteList';
import { gql } from '@apollo/client';


export const NOTES_QUERY = gql`
query GetNotes {
  notes {
    id
    text
  }
}`;

export const ADD_NOTE = gql`
mutation AddNote($text: String!) {
  insert_notes_one(object: {text: $text}) {
    id
    text
  }
}`;

export const UPDATE_NOTE = gql`
mutation UpdateNote($id: Int!, $text: String!) {
  update_notes(where: {id: {_eq: $id}} _set: {text: $text}) {
    returning {
      id 
      text
    }
  }
}`;


function App() {

  return (
    <div className="App">
      <Header/>
      <NoteInput/>
      <NoteList/>
    </div>
  );
}

export default App;
