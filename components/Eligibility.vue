<template>
    <div class="eligibility-container">
        <DisplayBooleanList :input_object_data="eligibility_list_object" :heading="heading" />
    </div>
</template>

<script>
import DisplayBooleanList from './generic/DisplayBooleanList.vue'

export default {
    name: 'Eligibility',
    props: ['propertyData'],
    data() {
        return {
            heading: 'Eligibility'
        }
    },
    components: {
        DisplayBooleanList
    },
    computed: {
        eligibility_list_object() {
            return this.propertyData ? this.propertyData.eligibility : undefined
        }
    }
}
</script>

<style scoped>

.eligibility-container {
    width: 67%;
    margin-top: 50px;
    background-color: #e9fbfa;
}

h2 {
    color: darkslateblue;
    font-size: 1.75em;
    margin: 30px 0 0 6%;
    width: 100%;
    text-align: left;
}

</style>
