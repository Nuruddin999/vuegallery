export default function (instance) {
    return {
        get(id) {
            return instance.get(`photos/${id}`)
        },
        async getAll() {
            let response = await instance.get("photos?_limit=24")
            let photos = response.data.map((photo, index) => ({ ...photo, category: index % 6 + 1 }))
            let categories = photos.map(photo => photo.category).filter((val, index, array) => array.indexOf(val) === index)
            return { photos, categories }
        }
    }
}