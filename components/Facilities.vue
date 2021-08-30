<template>
    <div class="facilities-container">
        <DisplayBooleanList :input_object_data="output_object" :heading="heading" />
    </div>
</template>

<script>
import DisplayBooleanList from './generic/DisplayBooleanList.vue'

export default {
    name: 'Facilities',
    props: ['propertyData'],
    data() {
        return {
            heading: 'Facilities'
        }
    },
    components: {
        DisplayBooleanList
    },
    computed: {
        facilities_list() {
            return this.propertyData ? this.propertyData.facilities : []
        },
        output_object() {
            if (!this.facilities_list)
                return undefined
            const output_object = {}
            this.facilities_list.map(item => {
                output_object[item.replace('_', ' ')] = true
            })
            return output_object
        }
    }
}
</script>

<style scoped>

.facilities-container {
    width: 67%;
    margin-top: 50px;
}

</style>