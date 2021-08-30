<template>
    <div class="top-of-page-container">
        <div class="top-of-page-left-container">
            <!-- <Photos :propertyData="property" /> -->
        </div>
        <div class="top-of-page-right-container">
            <PropertyHeading :propertyData="property" :show_top_rows="true" />
            <PriceCTA :propertyData="property" />
        </div>
    </div>
</template>

<script>
// import Photos from './Photos.vue'
//import PropertyHeading from './PropertyHeading.vue'
//import PriceCTA from './PriceCTA.vue'

export default {
    name: 'TopOfPageContainer',
    props: ['propertyData'],
    // components: {
    //     Photos,
    //     PropertyHeading,
    //     PriceCTA
    // },
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        }
    }
}
</script>

<style>

.top-of-page-container {
    width: 100%;
    height: 90vh;
    box-sizing: border-box;
    background-color: #eafae9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.top-of-page-left-container {
    width: 67%;

}

.top-of-page-right-container {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

</style>