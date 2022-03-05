export const navigate = {
    methods: {
        navigate(id) {
            this.$router.push({
                name: this.pageName,
                params: {
                    id: id
                }
            });
        }
    },
}