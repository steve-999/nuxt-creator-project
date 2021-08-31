<template>
    <div class="eligibility-container">
        <InputBooleanList 
            indices="AdminEligibility"
            :heading="heading" 
            :input_object="output_object"
            :display_labels_object="display_labels_object" 
            @handleCheckboxChange="handleCheckboxChange"
        />
    </div>


</template>

<script>
import InputBooleanList from '../generic/InputBooleanList.vue'
import { update_mongodb } from '../../shared/shared_code.js'

export default {
    name: 'AdminEligibility',
    props: ['propertiesData', 'property_id'],
    components: {
        InputBooleanList
    },
    data() {
        return {
            heading: 'Eligibility',
            properties: undefined,
            display_labels_object: {
                dss: 'DSS',
                female_only: 'Female only',
                male_only: 'Male only',
                pets_permitted: 'Pets permitted',
                postgraduate_student: 'Postgraduate student',
                professional: 'Professional',
                smoking_permitted: 'Smoking permitted',
                trainee: 'Trainee',
                undergraduate_student: 'Undergraduate student' 
            }
        }
    },
    mounted() {
        if (this.propertiesData) {
            this.properties = this.propertiesData
        }
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
        output_object() {
            return this.property ? this.property.eligibility : undefined
        }
    },
    methods: {
        handleCheckboxChange(name, value, indices) {
            const update_key = `eligibility.${name}`
            update_mongodb(this.property_id, update_key, value)
        },
    }
}
</script>

<style>

.eligibility-container {
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

