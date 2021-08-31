<template>
    <div class="home-container fadeInAnimation" v-if="properties && properties.length">
        <div class="properties-container" v-for="property in properties" :key="property.property_id">
            <PropertySummary :propertyData="property" />
        </div>
    </div>
</template>

<script>
import { BASE_API_URL } from '../environment/environment.js'

export default {
    name: 'Home',
    data() {
        return {  
            properties: null  
        }
    },
    fetch() {
        const url = `${BASE_API_URL}/properties`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.properties = data
            })
    }
}
</script>

<style scoped>

.home-container {
    width: 100%;
}

.properties-container {
    width: 85%;
    max-width: 900px;
    height: 100%;
    margin: 50px auto;
}

</style>