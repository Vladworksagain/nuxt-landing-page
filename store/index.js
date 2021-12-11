export const strict = false

export const state = () => ({
    headerNavData: [
        {
            name: 'HOME',
            link: '#'
        },
        {
            name: 'SHOP',
            link: '#'
        },
        {
            name: 'LOOKBOOK',
            link: '#'
        },
        {
            name: 'FEATURES',
            link: '#'
        },
        {
            name: 'PAGES',
            link: '#'
        },
        {
            name: 'BLOG',
            link: '/cart'
        },
    ],
})

export const getters = {
    getHeaderNavData(state) {
        return state.headerNavData
    }
}

export const mutations = {

}

export const actions = {
}

