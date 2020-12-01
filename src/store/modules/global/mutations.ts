import { EditNoteField, GlobalState, Note, Snackbar } from '@/store/model'

export default {
    setColorMenuOpen(state: GlobalState, payload: boolean){
        return state.colorMenuOpen = payload
    },
    setSelectedNote(state: GlobalState, payload: Note){
        return state.selectedNote = payload
    },
    setNoteField(state: GlobalState, payload: EditNoteField){
        return state.selectedNote = {
            ...state.selectedNote,
            [payload.name]: payload.value
        }
    },
    setShowNoteDialog(state: GlobalState, payload: boolean){
        return state.showNoteDialog = payload
    },
    showSnackbar(state: GlobalState, payload: Snackbar){
        state.snackbar = payload
    }
}