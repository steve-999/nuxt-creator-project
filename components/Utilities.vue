<template>
    <div class="utilities-outer-container">
        <h4>Utilities</h4>
        <DisplayBooleanList :input_object_data="utilities_list_object" />
    </div>
</template>

<script>
import DisplayBooleanList from './generic/DisplayBooleanList.vue'

export default {
    name: 'Utilities',
    props: ['propertyData', 'contract_idx'],
    data() {
        return {
            heading: 'Utilities'
        }
    },
    components: {
        DisplayBooleanList
    },
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        utilities_list_object() {
            if (!this.property || !('contracts' in this.property))
                return undefined
            return this.property ? this.property.contracts[this.contract_idx].utilities : undefined
        }
    }
}
</script>

<style scoped>

.utilities-outer-container {
    width: 100%;
    position: relative;
}

h4 {
    color: darkslateblue;
    font-size: 1.25em;
    margin: 0 0 0 6%;
    width: 100%;
    text-align: left;
}

</style>
