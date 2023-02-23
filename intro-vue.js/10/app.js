const myApp = {
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

            styles:{
                backgroundColor: '#000',
                color: '#fff',
            },
            
            themeBlack: true,
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

        toogleTheme(){
            this.themeBlack = !this.themeBlack;

            if(this.themeBlack){
                this.styles.backgroundColor = '#000';
                this.styles.color = '#fff';
            }
            else{
                this.styles.backgroundColor = '#fff';
                this.styles.color = '#000';
            }
        }
    }
}

const app = Vue.createApp(myApp);
