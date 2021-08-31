<template>
    <div class="property-container fadeInAnimation">
        <TopOfPageContainer     class="item-TopOfPageContainer" :propertyData="property"/>
        <PropertyInfo           class="item-PropertyInfo" :propertyData="property" />
        <GoogleMap              class="item-GoogleMap" :propertyData="property" />
        <AmenitiesContainer     class="item-AmenitiesContainer" :propertyData="property" />
        <Availability           class="Availability" :propertyData="property" />
    </div>
</template>

<script>
import axios from 'axios';
import { BASE_API_URL } from '../../../environment/environment.js'

export default {
    name: 'PropertyDetails',
    data() {
        return {
            property_id: undefined,
            property: undefined,
            photos: [],
            pageTitle: undefined,
            address: undefined,
        }
    },
    async created() {
        this.property_id = this.$route.params.property_id
        const url = `${BASE_API_URL}/properties/${this.property_id}`
        try {
            const resp = await axios.get(url)
            this.property = resp.data
        }
        catch(err) {
            console.log(err.message);
        }
    },
    computed: {
        num_contracts() {
            if (!this.property || !('contracts' in this.property))
                return 0
            return this.property.contracts.length
        }
    }
}
</script>

<style scoped>

.item-TopOfPageContainer { 
    grid-area: TopOfPageContainer;
    width: 100%;
    box-sizing: border-box;     
}
.item-PropertyHeading { grid-area: PropertyHeading }
.item-Photos { grid-area: Photos; }
.item-PriceCTA { grid-area: PriceCTA }
.item-PropertyInfo { grid-area: PropertyInfo }
.item-Availability { grid-area: Availability }
.item-AmenitiesContainer { grid-area: AmenitiesContainer }
.item-Facilities { grid-area: Facilities }
.item-EnergyPerformance { grid-area: EnergyPerformance }
.item-GoogleMap { grid-area: GoogleMap }
.item-Eligibility { grid-area: Eligibility }

.property-container {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
    "TopOfPageContainer"
    "PropertyInfo"
    "GoogleMap"
    "AmenitiesContainer"
    "Availability"
    "Footer"
}

</style>