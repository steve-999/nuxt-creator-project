<template>
    <div class="tabs-container">
        <ul class="tabs__ul" v-if="property">
            <li v-for="(start_end_date, contract_idx) in converted_start_end_dates" :key="contract_idx" 
                :class="`tabs__li ${active_tab_idx === contract_idx ? 'active-tab' : ''}`"
                @click="handleTabClick(contract_idx)"
            >
                {{ start_end_date[0] }} - {{ start_end_date[1] }}
            </li>
        </ul>
    </div>
</template>

<script>
import { convert_yyyy_mm_dd_to_readable_date, get_min_price_contract_idx } from '../shared/shared_code.js'

export default {
    name: 'DateTabs',
    props: ['propertyData', 'contract_idx', 'start_end_dates'],
    data() {
        return {
            active_tab_idx: undefined,
            property: undefined
        }
    },
    mounted() {
        this.property = this.propertyData
    },
    updated() {
        if (this.property === undefined) {
            this.property = this.propertyData
        }
    },
    computed: {
        converted_start_end_dates() {
            return this.start_end_dates.map(start_end_date => {
                const start_date = convert_yyyy_mm_dd_to_readable_date(start_end_date[0])
                const end_date = convert_yyyy_mm_dd_to_readable_date(start_end_date[1])
                return [start_date, end_date]
            }) 
        },
        cheapest_contract_idx() {
            if (!this.propertyData)
                return undefined
            return get_min_price_contract_idx(this.property)
        }
    },
    methods: {
        handleTabClick(contract_idx) {
            this.$emit('dateTabClicked', contract_idx)
            this.active_tab_idx = contract_idx
        }
    },
    watch: {
        property(newVal, oldVal) {
            if (newVal) {
                this.active_tab_idx = get_min_price_contract_idx(this.property)
                this.$emit('dateTabClicked', this.active_tab_idx)
            }
        }
    }
}
</script>

<style scoped>

.tabs-container {
    width: 67%;
}

.tabs__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.tabs__li {
    display: inline-block;
    margin: 0 3px;
    font-size: 1em;
    font-weight: 500;
    background-color: rgb(255, 209, 153);
    color: #aaa;
    cursor: pointer;
    padding: 6px 9px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: 0.25s;
}

.active-tab {
    background-color: darkorange;
    color: white;
}

.tabs__li:hover {
    background-color: rgb(255, 94, 0);
    color: white;
}

</style>