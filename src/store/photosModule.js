import photoapi from "../api/index"
export default ({
    state: {
        photos: [],
        currentPhoto: {},
        categories: []
    },
    getters: {
        getPhotos: state => state.photos,
        getPhoto: state => state.currentPhoto,
        getCategories: state => state.categories
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload.photos.photos
            state.categories = payload.photos.categories
        },
        setPhoto(state, payload) {
            state.currentPhoto = payload.photo.data
        },
    },
    actions: {
        async loadPhotos({ commit }) {
            let photos = await photoapi.photos.getAll()
            commit('setPhotos', { photos: photos })
        },
        async loadPhotoById({ commit }, id) {
            let photo = await photoapi.photos.get(id)
            commit('setPhoto', { photo })
        }
    }
})