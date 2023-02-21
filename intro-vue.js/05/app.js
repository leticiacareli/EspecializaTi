const app = {
    data() {
        return {
            title: 'Curso de Vue.js 3',
            products: [
                {
                    title: 'Naruto',
                    description: 'Anime do Naruto',
                    image: './assets/img/naruto.jpg',
                    stars: 0,
                },
                {
                    title: 'All-Animes',
                    description: 'Todos os animes',
                    image: './assets/img/all-anime.jpg',
                    stars: 5,
                },
            ],
            cart: [],
        }
    },

    methods:{
        addCart(product){
            this.cart.push(product);
        }
    }
}

Vue.createApp(app).mount('#app')