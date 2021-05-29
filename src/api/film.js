export default function (instance) {
    return {
        get(id) {
            return instance.get(`photos/${id}`)
        },
        getAll() {
            return instance.get("photos?_limit=24")
        }
    }
}