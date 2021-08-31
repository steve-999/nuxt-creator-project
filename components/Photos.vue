<template>
    <div class="photos-container" v-if="photo">
        <div class="carousel-container">
            <VueSlickCarousel ref="carousel">
                <div v-for="(photo, idx) in photos" :key="idx">
                    <img ref="large_image_ref" class="photos__image" :src="photo.photo" />
                </div>
            </VueSlickCarousel>
        </div> 
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Photos',
    props: ['propertyData'],
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            photo_idx: 0,
            Nthumbs: 4,
            settings: {
                dots: true,
                dotsClass: 'slick-dots custom-dot-class',
                arrows: true,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: false
            },
        }
    },
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        photos() {
            if (!this.property || !('media' in this.property) || !('photos' in this.property.media))
                return []
            return this.property ? this.property.media.photos : []
        },
        photo() {
            return this.photos.length ? this.photos[this.photo_idx] : undefined
        },
    },
}
</script>

<style>

.carousel-container {
    width: 100%;
    padding: 35px 30px;
    height: 100%;
    position: relative;
}

.photo-container {
    width: 100%;
    height: 100%;
    padding: 20px 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.photos__image {
    width: 100%;
    border-radius: 9px;
}

button.slick-prev:before, 
button.slick-next:before {
      background-color: #eafae9;
      color: mediumseagreen;
      font-size: 32px;
}

button.slick-next:before {
    position: relative;
    right: 5px;
}

button.slick-prev:before {
    position: relative;
    left: -5px;
}

</style>