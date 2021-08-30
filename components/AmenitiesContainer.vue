<template>
    <div class="amenities-container">
        <Facilities         class="item-Facilities"         :propertyData="property" />
        <Eligibility        class="item-Eligibility"        :propertyData="property" />
        <EnergyPerformance  class="item-EnergyPerformance"  :propertyData="property" />
    </div>
</template>

<script>
// import Facilities           from './Facilities.vue'
// import EnergyPerformance    from './EnergyPerformance.vue'
// import Eligibility          from './Eligibility.vue'

export default {
    name: 'AmenitiesContainer',
    props: ['propertyData'],
    // components: {
    //     Facilities,
    //     EnergyPerformance,
    //     Eligibility
    // },
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        }
    }
}
</script>

<style scoped>

.amenities-container {
    background-color: #e9fbfa;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
}

</style>