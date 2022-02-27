const coffee = {
    state: {
        products: [
            {
                id: 0,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '10.73$'
            },
            {
                id: 1,
                img: 'coffee-2.jpg',
                text: 'Presto Coffee Beans 1kg',
                price: '33.34$'
            },
            {
                id: 2,
                img: 'coffee-3.jpg',
                text: 'AROMISTICO Coffee 1kg',
                price: '6.99$'
            },
            {
                id: 3,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '10.73$'
            },
            {
                id: 4,
                img: 'coffee-2.jpg',
                text: 'Presto Coffee Beans 1kg',
                price: '33.34$'
            },
            {
                id: 5,
                img: 'coffee-3.jpg',
                text: 'AROMISTICO Coffee 1kg',
                price: '6.99$'
            },
        ]
    },
    getters: {
        getCoffee(state){
            return state.products;
        }
    }

}
export default coffee;