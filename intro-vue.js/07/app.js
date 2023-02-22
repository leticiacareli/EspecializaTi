const app = {
    data() {
        return {
            name: 'Letícia',
            lastName: 'Careli',
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

    computed:{
        fullName(){
            return this.name + ' ' + this.lastName;
        }
    },

    methods:{
        addCart(product){
            this.cart.push(product);
        },

        // se o indexOf retornar diferente de -1, quer dizer o produto está no carrinho
        inCart(product){
            return this.cart.indexOf(product) != -1;
        },

        removeCart(product){
            this.cart = this.cart.filter((prod) => {
                return product != prod;
            })
        },
    }
}

Vue.createApp(app).mount('#app')