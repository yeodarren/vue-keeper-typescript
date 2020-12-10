import { db } from '@/firebase'
import { NewNote, Note, NoteState, RootState } from '@/store/model'

import { ActionContext } from 'vuex'

export default {
    async addNote(context: ActionContext<NoteState, RootState>, payload: NewNote){
        // const noteData = {
        //     id: new Date().toISOString(),
        //     title: payload.title,
        //     content: payload.content,
        //     color: payload.color
        // }

        const data = await db.createNote(payload)
        context.commit('addNote', data)
    },
    async deleteNote(context: ActionContext<NoteState, RootState>, payload: Note){
        await db.deleteNote(payload.id)
        context.commit('deleteNote', payload)
    },
    async updateNote(context: ActionContext<NoteState, RootState>, payload: Note){
        const data = await db.updateNote(payload)
        context.commit('updateNote', data)
    },
    async getNotes(context: ActionContext<NoteState, RootState>) {
        const notes = await db.getNotes()
        
        context.commit('setNotes', notes)
    }
}
