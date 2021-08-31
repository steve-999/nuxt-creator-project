<template>
    <div class="facilities-page-container">
        <h3 class="facilities-form__h3">Facilities</h3> 
        <div class="facilities-form-container">
            <InputListForm 
                :input_list="facilities_list" 
                @handleInput="handleInputListChange" />
        </div>
    </div>
</template>

<script>
import InputListForm from '../generic/InputListForm.vue'
import { update_mongodb } from '../../shared/shared_code.js'

export default {
    name: 'AdminFacilities',
    props: ['propertiesData', 'property_id'],
    components: {
        InputListForm
    },
    data() {
        return {
            properties: undefined
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
        facilities_list() {
            return this.property ? this.property.facilities : undefined
        }
    },
    methods: {
        handleInputListChange(idx, value, indices) {
            const update_key = `facilities.${idx}`
            update_mongodb(this.property_id, update_key, value)
        }
    }
}
</script>

<style>

.facilities-page-container {
    width: 45%;
    background-color: #ccc;
    margin: 10px;
    padding: 15px;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.facilities-form__h3 {
    display: block;
    font-size: 1.2em;
    font-weight: 600;
    text-align: left;
    padding: 5px 0;
    margin: 5px 0;
}


.facilities-form__input {
    display: block;
    width: 80%;
    margin: 5px auto;
    padding: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8em;
    text-align: left;
    box-sizing: border-box;
    height: 2em;
}

.facilities-form__input {
    border: 1px solid #ccc;
    border-radius: 8px;
}

.facilities-form__input:focus {
    outline: none;
    border: none;
    box-shadow: var(--orangey-red-color) 0px 0px 2px 2px;
}


</style>

