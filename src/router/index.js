import VueRouter from 'vue-router';
import GalleryPage from "../pages/GalleryPage.vue"
import AboutMePage from "../pages/AboutMePage.vue"
import ImagePage from "../pages/ImagePage.vue"
export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'main',
            component: GalleryPage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutMePage
        },
        {
            path: '/:id',
            name: 'img',
            component: ImagePage
        }

    ]
})