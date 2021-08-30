<template>
    <div class="google-map-container" v-if="property">
        <h2>Location</h2>
        <div class="address">{{ addressString }}</div>
        <iframe :src="url" class="google-map" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>

<script>
import { create_address_string } from '../shared/shared_code.js'

export default {
    name: 'GoogleMap',
    props: ['propertyData'],
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        url() {
            if (!this.property)
                return ''
            const p = this.property;
            const url_prefix = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19030.700719278575!2d'
            const url_postfix = '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDIzJzU5LjQiTiAywrA1OCcwMi42Ilc!5e0!3m2!1sen!2suk!4v1629192988004!5m2!1sen!2suk'
            const url_lat_lng = `${p.coordinates.lat}!3d${p.coordinates.lng}`
            return `${url_prefix}${url_lat_lng}${url_postfix}`
        },
        addressString() {
            if (!this.property)
                return ''
            return create_address_string(this.property.address)
        },
    }
}
</script>

<style scoped>

.google-map-container {
    width: 67%;
    margin: 70px 0 100px 0;
}

h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2em;
    font-weight: 700;
    color: darkslateblue;
    margin-top: 10px;
    margin-left: 6%;
    text-align: left;
}

.address {
    margin-left: 6%;
    padding: 0;
    font-size: 1.2em;
    font-weight: 700;
    color: #555;
    text-align: left;
}

.google-map {
    display: block;
    width: 60vw;
    height: 40vw;
    margin-left: 6%;
    margin-top: 4%;
    border-radius: 15px;
}

</style>