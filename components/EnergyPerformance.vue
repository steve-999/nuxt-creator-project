<template>
    <div class="energy-performance-container">
        <DisplayListForObject :input_object_data="energy_performance" :heading="heading" />
    </div>
</template>

<script>
import DisplayListForObject from './generic/DisplayListForObject.vue'

export default {
    name: 'EnergyPerformance',
    props: ['propertyData'],
    data() {
        return {
            heading: 'Energy Performance'
        }
    },
    components: {
        DisplayListForObject
    },
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        energy_performance() {
            if (!this.property) 
                return undefined
            const energy_performance = {}
            Object.entries(this.property.energy_performance).map(entry => {
                energy_performance[this.capitalize_first_word_replace_underscore(entry[0])] = entry[1]
            })
            return energy_performance
        },
        energy_performance_keys() {
            return this.energy_performance ? Object.keys(this.energy_performance) : []
        },
    },
    methods: {
        capitalize_first_word_replace_underscore(str) {
            const str_array = str.split('_')
            const new_array = [str_array[0].toUpperCase(), str_array[1]]
            return new_array.join(' ')
        }
    }
}
</script>

<style scoped>

.energy-performance-container {
    width: 67%;
    margin: 50px 0 70px 0;
}

.object__key, .object__value {
    padding: 0 10px;
}

</style>