<template>
    <div class="admin-energy-performance-container">
        <InputListWithLabels 
            heading="Energy Performance" 
            :input_object="energy_performance_object"
            :display_labels_object="display_labels_obj"
            @handleInput="handleInputListWithLabelsChange" />
    </div>
</template>

<script>
import InputListWithLabels from '../generic/InputListWithLabels.vue'
import { update_mongodb } from '../../shared/shared_code.js'

export default {
    name: 'AdminEnergyPerformance',
    props: ['propertiesData', 'property_id'],
    components: {
        InputListWithLabels
    },
    data() {
        return {
            properties: undefined,
            display_labels_obj: {
                co2_current: 'CO2 current',
                co2_potential: 'CO2 potential',
                eef_current: 'EEF current',
                eef_potential: 'EEF potential',
                epc_certificate: 'EPC certificates',
                epc_reference: 'EPC reference'
            }
        }
    },
    mounted() {
        this.properties = this.propertiesData ? this.propertiesData : undefined
    },
    updated() {
        if (!this.properties && this.propertiesData) {
            this.properties = this.propertiesData ? this.propertiesData : undefined
        }
    },
    computed: {
        property() {
            try { return this.properties.find(property => property.property_id === this.property_id) }
            catch(e) { return undefined }
        },
        energy_performance_object() {
            return this.property ? this.property.energy_performance : undefined
        }
    },
    methods: {
        handleInputListWithLabelsChange(name, value, indices) {
            const update_key = `energy_performance.${name}`
            update_mongodb(this.property_id, update_key, value)
        }
    }
}
</script>

<style>

.admin-energy-performance-container {
    width: 46%;
}

.admin-energy-performance-container {
    width: 45%;
    background-color: #ccc;
    margin: 10px;
    padding: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

</style>




