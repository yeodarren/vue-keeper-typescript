import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default{
    namespaced: true,
    state(){
        return {
            notes: [{
                id: '1',
                title: 'Learn vue',
                content: 'Create vue apps',
                color: ''
            }]
        }
    },
    actions,
    mutations,
    getters
}
