import photoapi from "../api/index"
export default ({
    state: {
        photos: [],
        currentPhoto: {}
    },
    getters: {
        getPhotos: state => state.photos
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload.photos.data
        }
    },
    actions: {
        async loadPhotos({ commit }) {
            let photos = await photoapi.photos.getAll()
            commit('setPhotos', { photos })
        }
    }
})