<template>
    <div>
        <div
            v-for="item in test"
            :key="item.id"
        >
            <h1>
                {{item.name}}
            </h1>
            <h2>
                {{item.username}}
            </h2>
            <span>
                {{item.email}}
            </span>
            <p>
                {{item.phone}}
            </p>
        </div>
    </div>
</template>
    <!--    <div class="container">-->
    <!--        <div-->
    <!--            v-for="itemCart in cardItems"-->
    <!--            :key="itemCart.src"-->
    <!--        >-->
    <!--            {{itemCart.src}}-->
    <!--        </div>-->
    <!--    </div>-->
<script>

export default {
    layout: 'index',
    name: "index",

    data() {
        return {
            peoples: [],
            test: []
        }
    },

    methods: {
        async testAxios() {
            const test = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=3')
            this.test = test
        }
        // async getPeoplesData() {
        //     const data = await fetch(
        //         'https://jsonplaceholder.typicode.com/users?_limit=3'
        //     )
        //     const res = await data.json()
        //     this.peoples = res
        // }
    },

    mounted() {
        return this.testAxios()
        // return this.getPeoplesData()
    }

    //Вернуть корзину//
    // computed: {
    //     cardItems() {
    //         return this.$store.getters['cart/getCart']
    //     }
    // }
    //Вернуть корзину//
}
</script>

<style scoped>

</style>
