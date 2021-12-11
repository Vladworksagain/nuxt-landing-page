<template>
    <div class="app">
        <app-header/>
<!--        <Nuxt/>-->
<!--        <app-footer/>-->
    </div>
</template>

<script>

    import appHeader from '@/components/app-header'
    import appFooter from '@/components/app-footer'

export default {
    name: "default",
    components: {
        appHeader,
        appFooter
    },


}
</script>

<style scoped>

</style>
