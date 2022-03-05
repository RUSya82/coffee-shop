const bestsellers = {
    state: {
        bestsellers: [


        ]
    },
    getters: {
        getBestsellers(state){
            return state.bestsellers;
        }
    },
    mutations: {
        setBestsellers(state, data){
            state.bestsellers = data;
        },
    },
    actions: {
        setBestsellers({commit}, data) {
            commit("setBestsellers", data);
        },
    }

}
export default bestsellers;