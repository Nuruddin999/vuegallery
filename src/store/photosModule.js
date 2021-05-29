import photoapi from "../api/index"
export default ({
    state: {
        photos: [],
        currentPhoto: {}
    },
    getters: {
        getPhotos: state => state.photos,
        getPhoto: state => state.currentPhoto
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload.photos.data
        },
        setPhoto(state, payload) {
            state.currentPhoto = payload.photo.data
        }
    },
    actions: {
        async loadPhotos({ commit }) {
            let photos = await photoapi.photos.getAll()
            commit('setPhotos', { photos })
        },
        async loadPhotoById({ commit }, id) {
            let photo = await photoapi.photos.get(id)
            commit('setPhoto', { photo })
        }
    }
})