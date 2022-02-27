const bestsellers = {
    state: {
        bestsellers: [
            {
                id: 0,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '10.66$',
                country: 'Georgia'
            },
            {
                id: 1,
                img: 'coffee-2.jpg',
                text: 'Presto Coffee Beans 1kg',
                price: '33.34$',
                country: 'Brazil'
            },
            {
                id: 2,
                img: 'coffee-3.jpg',
                text: 'AROMISTICO Coffee 1kg',
                price: '6.99$',
                country: 'Brazil'
            },

        ]
    },
    getters: {
        getBestsellers(state){
            return state.bestsellers;
        }
    }

}
export default bestsellers;