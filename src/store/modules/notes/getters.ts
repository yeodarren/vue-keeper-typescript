import { NoteState } from '@/store/model'

export default{
    notes(state: NoteState){
        return state.notes
    }
}