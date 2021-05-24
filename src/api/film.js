export default function (instance) {
    return {
        get(id) {
            return instance.post(`photos/:${id}`)
        },
        getAll() {
            return instance.get("photos")
        }
    }
}