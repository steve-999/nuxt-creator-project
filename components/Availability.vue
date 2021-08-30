<template>
    <div class="availability-container" v-if="property">
        <h2>Availability</h2>
        <div class="contract-details-container">
            <DateTabs :start_end_dates="start_end_dates" :propertyData="this.property" @dateTabClicked="handleChildDateTabClicked" />
            <!-- <router-view></router-view>           -->
            <Contract :contract_idx="contract_idx" :propertyData="this.property" />
        </div>
    </div>
</template>

<script>
// import DateTabs from './DateTabs.vue'
// import Contract    from './Contract.vue'
//import router from '../router/index.js'

export default {
    name: 'Availability',
    props: ['propertyData'],
    // components: {
    //     DateTabs,
    //     Contract,
    // },
    data() {
        return {
            contract_idx: 0
        }
    },
    computed: {
        property() {
            if (!this.propertyData || !('contracts' in this.propertyData) || this.propertyData.contracts.length === 0)
                return undefined
            //this.$router.push({ path: `/properties/${this.propertyData.property_id}/${this.contract_idx}` })
            //this.contract_idx = 
            // this.$router.replace({ name: 'Contract', 
            //             params: { 
            //                 propertyData: JSON.stringify(this.property), 
            //                 contract_idx: this.contract_idx
            //             } 
            //         })
            return this.propertyData ? this.propertyData : undefined
        },
        start_end_dates() {
            if (!this.property)
                return undefined
            const start_end_dates = this.property.contracts.map(c => {
                const start_date = 'start_date' in c ? c.start_date : ''
                const end_date = 'end_date' in c ? c.end_date : '' 
                return [start_date, end_date]
            }) 
            return start_end_dates
        },
        num_contracts() {
            try {
                return this.property.contracts.length
            }
            catch(e) {
                return 0
            }
        },
    },
    methods: {
        handleChildDateTabClicked(new_contract_idx) {
            this.contract_idx = new_contract_idx
            //this.$router.push({ path: `/properties/${this.propertyData.property_id}/${this.contract_idx}` })
            // this.$router.push({ name: 'Contract', 
            //                     params: { 
            //                         propertyData: JSON.stringify(this.property), 
            //                         contract_idx: JSON.stringify(this.contract_idx) 
            //                     } 
            //                 })
        },
    }
}
</script>

<style scoped>

.availability-container {
    /* outline: 2px solid blue; */
    width: 100%;
}

.contract-details-container {
    width: 100%;
    /* outline: 2px solid violet; */
}

h2 {
    color: darkslateblue;
    font-size: 1.75em;
    margin: 80px 0 60px 4%;
    text-align: left;
}

</style>