import { Note, NoteState } from '@/store/model'

export default{
    addNote(state: NoteState, payload: Note){
        return state.notes.push(payload)
    },
    deleteNote(state: NoteState, payload: Note){
        const index = state.notes.findIndex((note: Note) => note.id === payload.id)
        if(index !== -1){
            state.notes.splice(index, 1)
        }
    },
    updateNote(state: NoteState, payload: Note){
        const note = state.notes.find((note: Note) => note.id === payload.id)
        note!.title = payload.title
        note!.content = payload.content
        note!.color = payload.color
    },
    setNotes(state: NoteState, payload: Note[]){
        return state.notes = payload
    }
}