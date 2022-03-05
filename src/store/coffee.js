const coffee = {
    state: {
        products: [],
        searchValue: '',
        sortValue: ''
    },
    getters: {
        getCoffee(state) {
            return state.products.filter(item => item.name
                .toLowerCase()
                .includes(state.searchValue.toLowerCase()))
                .filter(item => item.country
                    .toLowerCase()
                    .includes((state.sortValue.toLowerCase())
                    )
                );
        },
        getProductById(state) {
            return (id) => {
                return state.products.find(item => item.id === +id);
            }
        },
        getSearchValue(state) {
            return state.searchValue;
        },
    },
    mutations: {
        setCoffee(state, data) {
            state.products = data;
        },
        setSearchValue(state, value) {
            state.searchValue = value;
        },
        setSortValue(state, value) {
            console.log(value)
            state.sortValue = value;
        },
    },
    actions: {
        setCoffee({commit}, data) {
            commit("setCoffee", data);
        },
        setSearchValue({commit}, data) {
            commit("setSearchValue", data);
        },
        setSortValue({commit}, data) {
            commit("setSortValue", data);
        },
    }

}
export default coffee;