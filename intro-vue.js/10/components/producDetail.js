const productDetail = {
    template: `
        <p> {{product.title}} </p>

        <img 
            v-bind:src="product.image" 
            v-bind:alt="product.title" 
            style="max-width: 500px;"
        >

        <strong v-if="product.stars > 0"> {{product.stars}} </strong>

        <button 
            @click.prevent="addCart(product)"
            v-bind:disabled="productInCart"
            v-bind:class="['color', {'button-disabled' : productInCart}]">

                Add cart

        </button>
    `,

    emits:['addProd-cart'],

    props:{
        product:{
            type: Object,
            required:true,
        },
        productInCart:{
            type: Boolean,
            required:true,
        }
    },

    data(){
        return{

        }
    },

    methods:{
        addCard(product){
            console.log('Add Cart in component');
            this.$emit('addProd-cart', product);
        }
    }
}

app.component('product-detail', productDetail);