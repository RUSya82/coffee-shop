const goods = {
    state: {
        goods: [
            {
                id: 0,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '10.73',
                country: 'Georgia'
            },
            {
                id: 1,
                img: 'coffee-2.jpg',
                text: 'Presto Coffee Beans 1kg',
                price: '33.34',
                country: 'Brazil'
            },
            {
                id: 2,
                img: 'coffee-3.jpg',
                text: 'AROMISTICO Coffee 1kg',
                price: '6.99',
                country: 'Brazil'
            },
            {
                id: 3,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '10.73',
                country: 'Brazil'
            },
            {
                id: 4,
                img: 'coffee-2.jpg',
                text: 'Presto Coffee Beans 1kg',
                price: '33.34',
                country: 'Marocco'
            },
            {
                id: 5,
                img: 'coffee-3.jpg',
                text: 'AROMISTICO Coffee 1kg',
                price: '6.99',
                country: 'Brazil'
            },
        ],
    },
    getters: {
        getGoods(state){
            return state.goods;
        }
    },
    mutations: {
        setGoods(state, data){
            state.goods = data;
        },
    },
    actions: {
        setGoods({commit}, data) {
            commit("setGoods", data);
        },
    }

}
export default goods;