export default function (instance) {
    return {
        get(id) {
            return instance.get(`photos/${id}`)
        },
        async getAll() {
            let response = await instance.get("photos?_limit=24")
            let photos = response.data.map((photo, index) => ({ ...photo, category: index % 4 + 1 }))
            let categories = photos.map(photo => photo.category).filter((val, index, array) => array.indexOf(val) === index)
            let groupedPhotos = categories.map(category => ({
                category,
                photos: photos.filter(photo => photo.category === category)
            }))
            return { photos: groupedPhotos, categories }
        }
    }
}