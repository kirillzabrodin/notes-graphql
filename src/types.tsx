import { NOTES_QUERY_ASC, NOTES_QUERY_DESC, NOTES_QUERY_LAST_CHANGED } from "./App";

export interface NoteInterface {
    text: string
    id: string
}

export interface NoteItem {
    note: NoteInterface
}

export interface NoteDialogItem {
    note: NoteInterface,
    open: boolean,
    setOpen: (bool: boolean) => void
}

export interface NotesListManager {
    getNoteFromDB: NoteInterface[]
}

export interface NoteInputProps {
    saveNoteToDB: (note:string) => void;
}

export interface NoteItemInterface {
    note: NoteInterface,
    updateSelection: (noteID: string) => void
}

export type CustomQueryType = typeof NOTES_QUERY_DESC | typeof NOTES_QUERY_ASC | typeof NOTES_QUERY_LAST_CHANGED

export type CustomOrderType = "Descending" | "Ascending" | "Most Recent"
