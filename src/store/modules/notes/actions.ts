import { Note, NoteState, RootState } from '@/store/model'

import { ActionContext } from 'vuex'

export default{
    addNote(context: ActionContext<NoteState, RootState>, payload: Note){
        const noteData = {
            id: new Date().toISOString(),
            title: payload.title,
            content: payload.content,
            color: payload.color
        }

        context.commit('addNote', noteData)
    },
    deleteNote(context: ActionContext<NoteState, RootState>, payload: Note){
        context.commit('deleteNote', payload)
    },
    updateNote(context: ActionContext<NoteState, RootState>, payload: Note){
        context.commit('updateNote', payload)
    }
}