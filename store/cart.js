export const strict = false

//состояние//
export const state = () => ({
    cart: []
})
//состояние//


//Отдать состояние//
export const getters = {
    getCart(state) {
        return state.cart
    },
}
//Отдать состояние//


//Управление состояние//
export const mutations = {
    setProductToCart(state, promise) {
        console.log(state)
        if(state.cart.length > 0) {
            const isHaveInCart = state.cart.findIndex(item => promise.id === item.id)
            if(isHaveInCart !== -1) {
                state.cart[isHaveInCart] = state.cart[isHaveInCart].count ? state.cart[isHaveInCart].count += 1 : state.cart[isHaveInCart].count += 1
                console.log(state.cart)
            } else {
                state.cart.push(promise)
            }
        } else {
            state.cart.push(promise)
        }
    },
}
//Управление состояние//
