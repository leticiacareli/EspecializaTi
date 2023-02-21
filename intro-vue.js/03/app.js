const app = {
    data() {
        return {
            name: 'Leticia',
            lastName: 'Careli',
            product: {
                title: 'Naruto',
                description: 'Anime do Naruto',
                image: './assets/img/naruto.jpg',
                stars: 0,
            },
            product2: {
                title: 'All-Animes',
                description: 'Todos os animes',
                image: './assets/img/all-anime.jpg',
                stars: 5,
            },
        }
    },
}

Vue.createApp(app).mount('#app')