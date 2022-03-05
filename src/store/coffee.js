const coffee = {
    state: {
        products: null

    },
    getters: {
        getCoffee(state){
            return state.products;
        },
        getProductById(state){
            return (id) => {
                return state.products.find(item => item.id === +id);
            }
        }
    },
    mutations: {
        setCoffee(state, data){
            state.products = data;
        },
    },
    actions: {
        setCoffee({commit}, data) {
            commit("setCoffee", data);
        },
    }

}
export default coffee;