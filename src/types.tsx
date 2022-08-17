export interface NoteInterface {
    text: string
    id: string
}

export interface NotesListManager {
    getNoteFromDB: NoteInterface[]
}

export interface NoteInputProps {
    saveNoteToDB: (note:string) => void;
}