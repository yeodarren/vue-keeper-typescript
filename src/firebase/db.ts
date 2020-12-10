import { NewNote, Note } from '@/store/model'
import { db } from './firebase'

const noteCollection = db.collection('notes')

export const createNote = async (note: NewNote): Promise<Note> => {
    const newDoc = await noteCollection.add(note)
    return {
        id: newDoc.id,
        ...note
    }
}

export const getNotes = async (): Promise<Note[]> => {
    const snapShot = await noteCollection.get()
    return snapShot.docs.map((doc: any) => {
        const { title, content, color } = doc.data()
        return {
            id: doc.id,
            title,
            content,
            color
        }
    })
}

export const updateNote = async (note: Note): Promise<Note> => {
    await noteCollection.doc(note.id).update({
        title: note.title,
        content: note.content,
        color: note.color
    })
    return note
}

export const deleteNote = async (id: string): Promise<string> => {
    await noteCollection.doc(id).delete()
    return id
}
