import { EditNoteField, GlobalState, Note, RootState, Snackbar } from '@/store/model'
import { ActionContext } from 'vuex'

export default {
    setColorMenuOpen(context: ActionContext<GlobalState, RootState>, payload: boolean){
        context.commit('setColorMenuOpen', payload)
    },
    setSelectedNote(context: ActionContext<GlobalState, RootState>, payload: Note){
        context.commit('setSelectedNote', payload)
    },
    setNoteField(context: ActionContext<GlobalState, RootState>, payload: EditNoteField){
        context.commit('setNoteField', payload)
    },
    setShowNoteDialog(context: ActionContext<GlobalState, RootState>, payload: boolean){
        context.commit('setShowNoteDialog', payload)
    },
    showSnackbar(context: ActionContext<GlobalState, RootState>, payload: Snackbar){
        context.commit('showSnackbar', payload)
    }
}