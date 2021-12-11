<template>
    <main>
        <section class="introduction">
            <div class="container">
                <div class="default__wrap">
                    <div
                        class="about"
                        v-for="contentData in introductionData"
                        :key="contentData.title"
                    >
                        <span class="default__subtitle">
                            {{contentData.subtitle}}
                        </span>
                        <h1 class="default__title">
                            {{contentData.title}}
                        </h1>
                        <div
                            class="default__text"
                            v-html="contentData.text"
                        >
                        </div>
                    </div>
                    <div class="buttons-wrap">
                        <default-button class="introduction-btn"/>
                        <default-button
                            :text="'SHOP NOW'"
                        />
                    </div>
                </div>
            </div>
        </section>
        <div class="portfolio">
            <div class="container">
                <div class="grid__wrap">
                    <div
                        class="portfolio-placeholder__img"
                        v-for="imgItem in portfolioImgData"
                        :key="imgItem.alt"
                    >
                        <img
                            :src="imgItem.src"
                            :alt="imgItem.alt"
                        >
                        <div
                            class="portfolio-hover__descr"
                        >
                            <default-button
                                :width="203"
                                :color="'#FFFFF'"
                                :textColor="'#22262A'"
                                :text="'CATAGORY NAME'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="products-card">
            <div class="container">
                <div
                    class="products-card__main"
                    v-for="cardData in productCardData"
                    :key="cardData.src"
                >
                    <div class="default-text__wrap">
                        <span class="default-product__subtitle">
                            {{cardData.title}}
                        </span>
                        <p class="default-product__descr">
                            {{cardData.descr}}
                        </p>
                    </div>
                    <div class="default-card__wrap">
                        <default-card
                            v-for="productCardData in cardData.productList"
                            :key="productCardData.src"
                            :productCardData="productCardData"
                        />
                    </div>
                </div>
<!--                <pre>-->
<!--                    {{cardItems}}-->
<!--                </pre>-->
            </div>
        </div>
        <section class="gallery">
            <div class="container">
                <template
                    v-for="item in galleryImg"
                >
                    <div class="default-text__wrap">
                        <span class="default-product__subtitle">
                            {{item.title}}
                        </span>
                        <p class="default-product__subtitle">
                            {{item.descr}}
                        </p>
                    </div>
                    <div
                        class="gallery__wrap"
                        v-for="oneImg in item.img"
                        :key="oneImg.src"
                    >
                        <div class="gallery-one__img">
                            <div class="gallery-placeholder__img">
                                <img
                                    :src="oneImg.src"
                                    :alt="oneImg.alt"
                                >
                            </div>
                        </div>
                        <div
                            class="gallery-more__img"
                        >
                            <div
                                class="gallery-placeholder__img"
                                v-for="otherImg in oneImg.moreImg"
                                :key="otherImg.src"
                            >
                                <img
                                    :src="otherImg.src"
                                    :alt="otherImg.alt"
                                >
                                <p
                                    class="gallery-signature__text"
                                    v-if="otherImg.signatureText"
                                >
                                    {{otherImg.signatureText}}
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
        <section class="introduction introduction__bottom">
            <div class="container">
                <div class="default__wrap introduction__bottom--wrap">
                    <div
                        class="about"
                        v-for="contentPreFooterData in introductionPreFooter"
                        :key="contentPreFooterData.title"
                    >
                        <span class="default__subtitle">
                            {{contentPreFooterData.subtitle}}
                        </span>
                        <h1 class="default__title">
                            {{contentPreFooterData.title}}
                        </h1>
                    </div>
                    <div class="buttons-wrap buttons-wrap__prefooter">
                        <default-button
                            class="introduction-btn"
                            :width="214"
                            :text="'SHOP COLLECTION'"
                        />
                    </div>
                </div>
            </div>
        </section>
<!--        <div>-->
<!--            <div class="container">-->
<!--                <b><customer/></b>-->
<!--            </div>-->
<!--        </div>-->
    </main>
</template>

<script>

    import defaultButton from '@/components/buttons/default-button'
    import defaultCard from '@/components/card/default-card'
    import customer from '@/components/customer'

export default {
    layout: 'index',

    components: {
        defaultButton,
        defaultCard,
        customer
    },

    data() {
        return {
            introductionData: [
                {
                    subtitle: 'NEW TREND',
                    title: 'COLLUSION',
                    text: '<p>An exclusive selection of this seasons trends.</p>'
                }
            ],
            portfolioImgData: [
                {
                    src: '/img/portfolio-img1.jpg',
                    alt: '1'
                },
                {
                    src: '/img/portfolio-img4.jpg',
                    alt: '2'
                },
                {
                    src: '/img/portfolio-img2.jpg',
                    alt: '3'
                },
                {
                    src: '/img/portfolio-img3.jpg',
                    alt: '4'
                },
            ],
            productCardData: [
                {
                    title: 'WOMEN’S FASHION',
                    descr: 'Shop our new arrivals from established brands',
                    productList: [
                        {
                            src: '/img/card-w-img1.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 1
                        },
                        {
                            src: '/img/card-w-img2.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 2
                        },
                        {
                            src: '/img/card-w-img3.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 3
                        },
                        {
                            src: '/img/card-w-img4.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 4
                        }
                    ]
                },
                {
                    title: 'MEN’S FASHION',
                    descr: 'Shop our new arrivals from established brands',
                    productList: [
                        {
                            src: '/img/card-m-img1.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 5
                        },
                        {
                            src: '/img/card-m-img2.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 6
                        },
                        {
                            src: '/img/card-m-img3.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 7
                        },
                        {
                            src: '/img/card-m-img4.jpg',
                            alt: '#',
                            subtitle: 'IGURE',
                            descr: 'GREEN MUSCLE FIT POLO SHIRT',
                            oldPrice: '$229.00',
                            newPrice: '$129.00',
                            id: 8
                        }
                    ]
                },

            ],
            galleryImg: [
                {
                    title: 'AVONE STYLES',
                    descr: 'Choose Your Favorite Color',
                    img: [
                        {
                            src: '/img/gallery-img1.jpg',
                            alt: '#',
                            moreImg: [
                                {
                                    src: '/img/gallery-img2.jpg',
                                    alt: '#'
                                },
                                {
                                    src: '/img/gallery-img3.jpg',
                                    alt: '#',
                                    signatureText: 'SHOW WOMEN’S DRESS',
                                }
                            ]
                        },
                    ]
                },
            ],
            introductionPreFooter: [
                {
                    subtitle: 'OWN THE DAY',
                    title: 'TACHEN 19',
                    text: '<p>An exclusive selection of this seasons trends.</p>'
                }
            ]
        }
    },

    // computed: {
    //     cardItems() {
    //         return this.$store.getters['cart/getCart']
    //     }
    // }


}
</script>

<style lang="sass">

.introduction
    background: url("../static/img/introduction-img.jpg") no-repeat 100%
    width: 100%
    height: 100vh
    background-size: cover
    margin-bottom: 12.3rem

    .about
        display: flex
        justify-content: flex-start
        flex-direction: column

        .default__subtitle
            font-family: $popins
            font-weight: 500
            font-size: 1.8rem
            color: $black

        .default__title
            font-family: $popins
            font-weight: 700
            font-size: 8rem
            color: $black
            text-transform: uppercase

        .default__text
            font-family: $popins
            font-weight: 500
            font-size: 1.8rem
            color: $black

    .buttons-wrap
        padding-top: 2.7rem
        display: flex
        max-width: 45.2rem
        width: 100%

    .introduction-btn
        margin-right: 3.2rem

.portfolio
    margin-bottom: 11.4rem

    .grid__wrap
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr))
        grid-column-gap: 3rem
        grid-row-gap: 2.2rem

        .portfolio-placeholder__img
            position: relative
            cursor: pointer

            img
                object-fit: cover
                width: 100%
                height: 100%

            &:nth-child(1)
                grid-column: span 2

            &:nth-child(2)
                grid-row: span 2
                grid-column: span 2

            &:hover

                .portfolio-hover__descr
                    opacity: 1
                    visibility: visible

        .portfolio-hover__descr
            background: rgba(0, 0, 0, .5)
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            padding: 2.5rem 2.8rem
            display: flex
            align-items: flex-end
            opacity: 0
            visibility: hidden
            transition: $transition

.products-card

    .products-card__main
        margin-bottom: 11rem

.gallery
    margin-bottom: 12.1rem

    .gallery__wrap
        display: flex

        .gallery-one__img
            margin-right: 2.9rem
            align-self: flex-end

        .gallery-placeholder__img
            max-width: 55.2rem
            width: 100%

            img
                object-fit: cover
                width: auto
                height: auto

        .gallery-more__img
            display: flex
            flex-direction: column

            .gallery-placeholder__img
                display: flex
                justify-content: end
                flex-direction: row-reverse

                &:last-child
                    position: relative
                    top: -5rem

                    &:after
                        content: ''
                        width: 100%
                        max-width: 22.7rem
                        height: 100%
                        background: $white
                        display: block
                        position: absolute
                        right: 0
                        top: -2.2rem

                    img
                        position: relative
                        z-index: 1
                        margin-right: -2.8rem

            .gallery-signature__text
                align-self: flex-end
                font-size: 1.5rem
                font-family: $popins
                font-weight: 400
                color: $black
                padding-bottom: 3rem
                position: relative
                margin-right: 3.3rem
                z-index: 1

                &:after
                    content: ''
                    width: 100%
                    height: 1px
                    background: $black
                    display: inline-block
                    position: absolute
                    left: 0
                    bottom: 2.5rem

.introduction__bottom
    background: url("../static/img/introduction-img2.jpg") no-repeat 100%
    background-size: cover
    height: 100vh
    width: 100%
    margin-bottom: 0

    .introduction__bottom--wrap
        align-items: flex-start

        .buttons-wrap__prefooter
            padding-top: .7rem

</style>
