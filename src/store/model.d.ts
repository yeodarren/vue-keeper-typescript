import { SnackbarColorTypes, CardColorTypes } from './enums'

export interface Note {
    id: string
    title: string
    content: string
    color: string
}

export interface Snackbar {
    open: boolean
    text: string
    color: SnackbarColorTypes
}

export interface EditNoteField {
    name: string
    value: string
}

export type CardColors = keyof typeof CardColorTypes

export interface NoteState {
    notes: Note[]
}

export interface GlobalState {
    colorMenuOpen: boolean,
    showNoteDialog: boolean,
    selectedNote: Note,
    snackbar: Snackbar
}

export interface RootState {
    
}

