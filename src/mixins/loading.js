export const loading = {
    methods: {
        setIsLoading(data = true){
            this.$store.dispatch('setIsLoading', data)
        }
    },
    computed: {
        isLoading(){
            return  this.$store.getters["getIsLoading"];
        }
    },
}