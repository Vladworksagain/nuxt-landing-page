<template>
    <div class="product-card">
        <div class="card-placeholder__img">
            <img
                :src="productCardData.src"
                :alt="productCardData.alt"
            >
        </div>
        <div class="card-content">
            <span class="card-subtitle">
                {{productCardData.subtitle}}
            </span>
            <p class="card-descr">
                {{productCardData.descr}}
            </p>
            <div class="card-info__price">
                <span class="card-old__price">
                    {{productCardData.oldPrice}}
                </span>
                <span class="card-new__price card-new__price--red">
                    {{productCardData.newPrice}}
                </span>
                <button
                    class="cart-btn"
                    @click="addToCart(productCardData)"
                >
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "default-card",

    props: {
        productCardData: {
            type: Object,
            default: (()=>{})
        }
    },

    methods: {
        addToCart(productCardData) {
            console.log(productCardData)
            this.$store.commit('cart/setProductToCart', productCardData)
        }
    }

}
</script>

<style lang="sass">

.product-card
    margin: 1rem .5rem

    .card-placeholder__img
        max-width: 26.8rem
        width: 100%
        margin-bottom: 3.8rem

        img
            object-fit: cover
            width: 100%
            height: 100%

    .card-content

        .card-subtitle
            font-family: $popins
            font-weight: 300
            font-size: 1.5rem
            color: $black
            margin-bottom: .3rem

        .card-descr
            font-family: $popins
            font-weight: 600
            font-size: 1.5rem
            color: $black
            margin-bottom: .3rem

        .card-info__price
            display: flex
            align-items: center
            justify-content: flex-start

            .card-old__price, .card-new__price
                font-family: $popins
                font-weight: 400
                font-size: 1.5rem
                color: $black

            .card-old__price
                text-decoration: line-through

            .card-new__price--red
                color: $tomato
                margin-left: 2.2rem

        .cart-btn
            max-width: 100px
            width: 100%
            border: none
            background: $black
            color: white
            border-radius: 10px
            margin-left: 2rem
            cursor: pointer

</style>
