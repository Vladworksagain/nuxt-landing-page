<template>
    <button
        class="default-btn"
        :style="{
            background: color,
            maxWidth: width + 'px'
        }"
    >
        <span
            :style="{
                color: textColor
            }"
        >
            {{text}}
        </span>
    </button>
</template>

<script>
export default {
    name: "default-button",
    props: {
        color: {
            type: String,
            default: '#22262A'
        },
        width: {
            type: Number,
            default: 147
        },
        textColor: {
            type: String,
            default: '#FFFFFF'
        },
        text: {
            type: String,
            default: 'DISCOVER'
        }
    }
}
</script>

<style lang="sass">

.default-btn
    border: none
    outline: none
    height: 3.5rem
    padding: 0 .5rem
    width: 100%
    cursor: pointer

    &:focus
        outline: none

    span
        font-family: $popins
        font-weight: 500
        font-size: 1.8rem
        text-transform: uppercase

</style>
