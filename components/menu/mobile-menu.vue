<template>
    <div class="header-mobile__menu">
        <ul class="mobile-menu__list">
            <li
                class="mobile-menu__item"
                v-for="item in mobileMenuData"
                :key="item.name"
            >
                <nuxt-link
                    :to="{path: `${item.link}`}"
                    class="mobile-menu__link"
                >
                    {{item.name}}
                </nuxt-link>
            </li>
        </ul>
        <div class="header-feedback">
            <button class="reset-btn header-feedback__btn">
                <img src="/icon/search-icon-black.svg" alt="#">
            </button>
            <button class="reset-btn header-feedback__btn">
                <img src="/icon/heart-icon-black.svg" alt="#">
            </button>
            <button class="reset-btn header-feedback__btn">
                <img src="/icon/cart-icon-black.svg" alt="#">
            </button>
        </div>
        <button
            class="mobile-menu__close--btn"
            @click="isCloseMenu"
        >
            <img src="/icon/icon-close-black.svg" alt="#">
        </button>
    </div>
</template>

<script>
export default {
    name: "mobile-menu",

    props: {
        mobileMenuData: {
            type: Array,
            default: (()=>[])
        }
    },

    methods: {
        isCloseMenu() {
            this.$emit('is-close-menu')
        }
    }
}
</script>

<style lang="sass">

.header-mobile__menu
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100vw
    height: 100vh
    background: #E7F5F8
    overflow-x: hidden
    overflow-y: auto
    flex-direction: column
    justify-content: center
    align-self: center
    display: none
    padding: 1rem

    &.show-mobile__menu
        display: flex

    .mobile-menu__list
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        margin-bottom: 2rem

    .mobile-menu__link
        font-weight: 400
        font-size: 1.6rem
        color: $black

    .mobile-menu__item
        margin-bottom: 1rem

    .header-feedback
        display: flex
        align-items: center
        justify-content: center

        &__btn
            width: 2rem
            height: 2rem
            margin-right: 3rem

            &:last-child
                margin-right: 0

            img
                object-fit: contain
                width: 100%
                height: 100%

    .mobile-menu__close--btn
        border: none
        background: transparent
        padding: 0
        outline: none
        width: 2rem
        height: 2rem
        position: absolute
        top: 1rem
        right: 1rem

        img
            object-fit: contain
            width: 100%
            height: 100%

        &:focus
            outline: none

</style>
