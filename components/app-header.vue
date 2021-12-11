<template>
    <header class="header">
        <div class="container">
            <div class="header-wrap">
                <nuxt-link class="header-logo__link" to="/">
                    <img src="/icon/main-logo.svg" alt="logo">
                </nuxt-link>
                <div
                    class="header-body__wrap"
                    v-if="headerMenuNav"
                >
<!--                :class="{'__hide-body': addMobileClass}"-->
                    <nav class="header-nav">
                        <ul class="header-nav__list">
                            <li
                                class="header-nav__item"
                                v-for="item in getHeaderNavData"
                                :key="item.name"
                            >
                                <nuxt-link
                                    :to="{path: `${item.link}`}"
                                    class="header-nav__link"
                                >
                                    {{item.name}}
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
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
                </div>
                <div
                    class="header-burger__btn"
                    @click="openMobileMenu"
                >
                    <span></span>
                </div>
                <mobile-menu
                    v-if="!headerMenuNav"
                    :mobileMenuData="getHeaderNavData"
                    :class="{'show-mobile__menu': isOpenMenu}"
                    @is-close-menu="CloseMobileMenu"
                />
            </div>
        </div>
        <div class="container">
        </div>
    </header>
</template>

<script>

    import mobileMenu from '@/components/menu/mobile-menu'

export default {
    name: "app-header",

    components: {
        mobileMenu
    },

    data() {
        return {
            windowWith: 0,
            headerMenuNav: true,
            isOpenMenu: false
        }
    },

    computed: {
        getHeaderNavData() {
            return this.$store.getters.getHeaderNavData
        }
    },

    methods: {
        getWindowWith() {
            this.windowWith = document.documentElement.clientWidth

            this.windowWith <= 768 ? this.headerMenuNav = false : this.headerMenuNav = true
        },
        openMobileMenu() {
            this.isOpenMenu = !this.isOpenMenu
        },
        CloseMobileMenu() {
            this.isOpenMenu = !this.isOpenMenu
        }
    },

    mounted() {
        window.addEventListener('resize', this.getWindowWith)

        this.getWindowWith()
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWith)
    }
}
</script>

<style scoped lang="sass">

.header
    padding: 2rem 0

    &-wrap
        display: flex
        align-items: center
        justify-content: flex-start

        @media screen and (max-width: 768px)
            justify-content: space-between

    .header-body__wrap
        display: flex
        justify-content: space-between
        width: 100%

    &-logo__link
        max-width: 16.4rem
        width: 100%
        display: inline-block

        @media screen and (max-width: 1024px)
            max-width: 12.4rem
            height: 1.6rem

        img
            object-fit: cover
            width: 100%
            height: 100%

    &-nav
        width: 100%
        padding: 0 1rem

        &__list
            display: flex
            flex-wrap: wrap
            justify-content: center

        &__item
            margin-right: 2.5rem

            @media screen and (max-width: 1024px)
                margin-right: 1.8rem

            &:last-child
                margin-right: 0

        &__link
            font-size: 1.8rem
            line-height: 2.7rem
            color: $black
            text-transform: uppercase
            font-weight: 400

    &-feedback
        display: flex
        align-items: center
        justify-content: center

        &__btn
            width: 2rem
            height: 2rem
            margin-right: 3rem

            @media screen and (max-width: 1024px)
                margin-right: 1.8rem

            &:last-child
                margin-right: 0

            img
                object-fit: contain
                width: 100%
                height: 100%

    &-burger__btn
        width: 25px
        height: 20px
        position: relative
        transform: rotate(0deg)
        cursor: pointer

        @media screen and (min-width: 769px)
            display: none

        span
            display: block
            position: absolute
            height: 4px
            width: 100%
            background: $black
            opacity: 1
            left: 0
            transform: rotate(0deg)
            transition: .3s ease-in-out
            top: 0px
            transform-origin: left center

        &:before
            content: ""
            display: block
            position: absolute
            height: 4px
            width: 100%
            background: $black
            opacity: 1
            left: 0
            transform: rotate(0deg)
            transition: .3s ease-in-out
            top: 7px
            transform-origin: left center

        &:after
            content: ""
            display: block
            position: absolute
            height: 4px
            width: 100%
            background: $black
            opacity: 1
            left: 0
            transform: rotate(0deg)
            transition: .3s ease-in-out
            top: 14px
            transform-origin: left center

        &.open span
            transform: rotate(45deg)
            top: 1px
            left: 8px

        &.open:before
            width: 0%
            opacity: 0

        &.open:after
            transform: rotate(-45deg)
            top: 22px
            left: 8px

</style>
