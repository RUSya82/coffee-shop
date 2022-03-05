const allData = {
    state: {
        isLoading: false

    },
    getters: {
        getIsLoading(state){
            return state.isLoading;
        },
    },
    mutations: {
        setIsLoading(state, data = true){
            state.isLoading = data;
        },
    },
    actions: {
        setIsLoading({commit}, data) {
            commit("setIsLoading", data);
        },
    }

}
export default allData;