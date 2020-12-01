import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { CardColorTypes, SnackbarColorTypes } from '@/store/enums'

export default {
    namespaced: true,
    state(){
        return {
            colorMenuOpen: false,
            showNoteDialog: false,
            selectedNote: {
                id: '',
                title: '',
                content: '',
                color: CardColorTypes.Default
            },
            snackbar: {
                open: false,
                text: '',
                color: SnackbarColorTypes.Success
            }
        }
    },
    actions,
    mutations,
    getters
}