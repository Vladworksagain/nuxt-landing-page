<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrap">
                <div class="footer-left__side">
                    <nuxt-link
                        to="/"
                        class="footer-logo__link"
                    >
                        <img src="/icon/main-logo.svg" alt="#">
                    </nuxt-link>
                    <p class="footer-descr">
                        We earned a reputation of being good at what we do.
                        Let us take your online shop to new dimension in
                        success!
                    </p>
                    <div class="footer-feedback">
                        <div class="footer-feedback__location">
                            <img src="/icon/location-icon-black.svg" alt="#">
                            <address class="footer-feedback__text">
                                Comilla, Bangladesh 3500
                            </address>
                        </div>
                        <div class="footer-feedback__user">
                            <a class="footer-feedback__text footer-feedback__mail" href="mailto:kawsarahmed0210@gmail.com">
                                kawsarahmed0210@gmail.com
                            </a>
                            <a class="footer-feedback__text" href="tel:01647470457">
                                01647470457
                            </a>
                        </div>
                    </div>
                    <div class="footer-social">
                        <a href="#" class="reset-btn footer-social__link">
                            <img src="/icon/facebook-icon-black.svg" alt="">
                        </a>
                        <a href="#" class="reset-btn footer-social__link">
                            <img src="/icon/instagram-icon-black.svg" alt="">
                        </a>
                        <a href="#" class="reset-btn footer-social__link">
                            <img src="/icon/twitter-icon-black.svg" alt="">
                        </a>
                        <a href="#" class="reset-btn footer-social__link">
                            <img src="/icon/linkedin-icon-black.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="footer-right__side">
                    <div class="footer-right__side--top">
                        <span class="footer-title">
                            RECIVE EMAIL UPDATES
                        </span>
                        <form action="" class="footer-form">
                            <div class="footer-form__wrap">
                                <label>
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                    >
                                </label>
                                <button class="reset-btn footer-submit__btn">
                                    <span>JOIN</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="footer-right__side--bottom">
                        <div
                            class="footer-nav__wrap"
                            v-for="footerItemList in footerNavData"
                            :key="footerItemList.title"
                        >
                            <span class="footer-nav__subtitle">
                                {{footerItemList.title}}
                            </span>
                            <ul class="footer-nav__list">
                                <li
                                    class="footer-nav__item"
                                    v-for="item in footerItemList.list"
                                    :key="item.name"
                                >
                                    <nuxt-link to="#" class="footer-nav__link">
                                        {{item.name}}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
                <span class="footer-copyright__title">
                    Copyright © 2020 . Your company name  All rights reserved
                </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "app-footer",

    data() {
        return {
            footerNavData: [
                {
                    title: 'SHOP',
                    list: [

                        {
                            name: 'Shop',
                            link: '#'
                        },
                        {
                            name: 'Collection',
                            link: '#'
                        },
                        {
                            name: 'Outlet',
                            link: '#'
                        },
                        {
                            name: 'Lookbook',
                            link: '#'
                        },
                    ],
                },
                {
                    title: 'HELP',
                    list: [

                        {
                            name: 'FAQ',
                            link: '#'
                        },
                        {
                            name: 'Privecy Policy',
                            link: '#'
                        },
                        {
                            name: 'Tearms and conditions',
                            link: '#'
                        },
                        {
                            name: 'Return and Exchanges',
                            link: '#'
                        },
                    ],
                },
                {
                    title: 'ABOUT',
                    list: [

                        {
                            name: 'Journal',
                            link: '#'
                        },
                        {
                            name: 'Our Story',
                            link: '#'
                        },
                        {
                            name: 'Contact',
                            link: '#'
                        },
                        {
                            name: 'Store Location',
                            link: '#'
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped lang="sass">

.footer
    background: $background
    padding-top: 11.5rem

    &-wrap
        display: flex
        align-items: flex-start
        justify-content: space-between
        padding-bottom: 10.6rem

    .footer-left__side
        max-width: 40.6rem
        width: 100%
        padding-top: 1rem

        .footer-logo__link
            max-width: 14.6rem
            width: 100%
            display: inline-block
            margin-bottom: 1.7rem

            img
                object-fit: cover
                width: 100%
                height: 100%

        .footer-descr
            font-weight: 400
            font-size: 1.5rem
            line-height: 2.2rem
            color: $black
            margin-bottom: 4.1rem

        .footer-feedback
            margin-bottom: 1.6rem

            &__location
                display: flex
                margin-bottom: 1.6rem
                align-items: center

                img
                    width: 1.5rem
                    height: 1.5rem
                    margin-right: 2.6rem

            &__text
                font-weight: 400
                font-size: 1.5rem
                color: $black

            &__user
                display: flex
                flex-direction: column

                .footer-feedback__mail
                    border-bottom: 1px solid #000000
                    margin-bottom: .4rem
                    width: fit-content

        .footer-social

            &__link
                max-width: 1.5rem
                width: 100%
                display: inline-block
                margin-right: 1.5rem

                &:last-child
                    margin-right: 0

                img
                    object-fit: contain
                    width: 100%
                    height: 100%

    .footer-right__side

        .footer-right__side--top
            margin-bottom: 7rem

            .footer-form__wrap
                display: flex
                width: 100%
                position: relative

                label
                    width: 100%

                    input
                        width: 100%
                        border: none
                        outline: none
                        background: $white
                        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.07)
                        border-radius: 5px
                        padding: 11px 0 11px 24px
                        font-family: $popins
                        font-weight: 400
                        font-size: 1.5rem
                        line-height: 2.2rem
                        color: $black

                        &::placeholder
                            color: $black

                        &:focus
                            outline: none

                .footer-submit__btn
                    border: none
                    padding: 0
                    outline: none
                    background-color: transparent
                    position: absolute
                    right: 2.3rem
                    top: 50%
                    transform: translateY(-50%)

                    &:focus
                        outline: none

                    span
                        text-transform: uppercase
                        font-family: $popins
                        font-weight: 600
                        font-size: 1.5rem
                        color: $black

            .footer-title
                font-family: $popins
                font-weight: 700
                font-size: 2.5rem
                color: $black
                margin-bottom: 2.4rem
                display: inline-block

        .footer-right__side--bottom
            display: flex
            justify-content: space-between

            .footer-nav__wrap
                margin-right: 9.3rem

                &:last-child
                    margin-right: 0

                .footer-nav__subtitle
                    font-family: $popins
                    font-weight: 600
                    font-size: 2rem
                    text-transform: uppercase
                    color: $black
                    margin-bottom: 2.7rem
                    display: inline-block

                .footer-nav__list

                    .footer-nav__item
                        margin-bottom: 2.1rem

                        &:last-child
                            margin-bottom: 0

                    .footer-nav__link
                        font-family: $popins
                        font-weight: 400
                        font-size: 1.5rem
                        color: $black

    .footer-copyright
        background: #E7F5F8
        padding: 3.5rem 0
        text-align: center

        &__title
            font-weight: 400
            font-family: $popins
            font-size: 1.5rem
            color: $black

</style>
