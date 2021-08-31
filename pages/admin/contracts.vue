<template>
    <div class="admin-contracts-container" v-if="property">
        <div class="admin-contracts-container">
            <ul class="admin-contracts__ul">
                <li 
                    v-for="idx1 in num_contracts" 
                    :key="idx1-1"
                    class="admin-contracts__li"
                >
                    <h2 class="admin-contracts__h2--top">Contract {{ idx1 }}</h2>
                    <div class="admin-contracts-main-info-and-utilities-container">
                        <div class="admin-contracts-main-contracts-info-container">
                            <InputListWithLabels 
                                :indices="`contract_idx=${idx1-1}`"
                                :input_object="create_main_contract_info_object(idx1-1)" 
                                :display_labels_object="main_contract_display_keys"
                                @handleInput="handleInputChange__MainInfo"
                                />
                        </div>

                        <div class="admin-contracts-utilities-container">
                            <InputBooleanList
                                :indices="`contract_idx=${idx1-1}`"
                                :input_object="create_utilities_info_object(idx1-1)" 
                                :display_labels_object="utilities_display_keys"
                                @handleCheckboxChange="handleCheckboxChange__Utilities" />    
                        </div>    
                    </div>      
                    <h3 class="admin-contracts__h3">Room prices</h3>          
                    <ul class="admin-contracts-room-prices__ul">
                        <li 
                            v-for="idx2 in property.contracts[idx1-1].prices.length" 
                            :key="idx2-1"
                            class="admin-contracts-room-prices__li"
                        >
                            <div class="admin-contracts-room-prices-container">
                                <InputListWithLabels 
                                    :indices="`contract_idx=${idx1-1} | room_idx=${idx2-1}`"
                                    :input_object="create_room_prices_info_object(idx1-1, idx2-1)" 
                                    :display_labels_object="room_prices_display_keys"
                                    @handleInput="handleInputChange__RoomPrices" />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="no-contracts-message" v-if="num_contracts === 0">There are no contracts for this property at the present time.</div>
        </div>
    </div>
</template>

<script>
import InputListWithLabels from '../../components/generic/InputListWithLabels.vue'
import InputBooleanList from '../../components/generic/InputBooleanList.vue'
import { update_mongodb } from '../../shared/shared_code.js'

export default {
    name: 'AdminContracts',
    props: ['propertiesData', 'property_id'],
    components: {
        InputListWithLabels,
        InputBooleanList
    },
    data() {
        return {
            properties: undefined,
            main_contract_display_keys: {
                title: 'Title',
                book_now_url: 'Book now URL',
                start_date: 'Start date',
                end_date: 'End date',
                min_contract_days: 'Minimum contract days',
            },
            utilities_display_keys: {
                broadband: 'Broadband',
                contents_insurance: 'Contents insurance',
                council_tax: 'Council tax',
                electricity: 'Electricity',
                gas: 'Gas',
                phone: 'Phone',
                tv_license: 'TV licence',
                water: 'Water'
            },
            room_prices_display_keys: {
                room_name: 'Room name',
                price_per_person_per_week: 'Price per person per week',
                deposit_per_person: 'Deposit per person',
                fee_per_person: 'Fee per person'
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
        contracts() {
            try { return this.property.contracts } catch(e) { return undefined}
        },
        num_contracts() {
            try { return this.contracts.length } catch(e) { return undefined}
        }
    },
    methods: {
        create_main_contract_info_object(contract_idx) {
            try {
                const d = {}
                const contract = this.property.contracts[contract_idx]
                Object.keys(this.main_contract_display_keys).forEach(key => d[key] = contract[key])
                return d
            }
            catch(e) {
                return undefined
            }
        },
        create_utilities_info_object(contract_idx) {
            return this.property.contracts[contract_idx] ? this.property.contracts[contract_idx].utilities : undefined       
        },
        create_room_prices_info_object(contract_idx, room_idx) {
            return this.property.contracts[contract_idx].prices[room_idx]
        },
        handleCheckboxChange__Utilities(name, value, indices) {
            const contract_idx = indices.split('=')[1]
            const update_key = `contracts.${contract_idx}.utilities.${name}` 
            update_mongodb(this.property_id, update_key, value)
        },
        handleInputChange__MainInfo(name, value, indices) {
            const contract_idx = indices.split('=')[1]
            const update_key = `contracts.${contract_idx}.${name}`
            update_mongodb(this.property_id, update_key, value)
        },
        handleInputChange__RoomPrices(name, value, indices) {
            const temp = indices.split(' | ')
            const contract_idx = temp[0].split('=')[1]
            const room_idx = temp[1].split('=')[1]
            const update_key = `contracts.${contract_idx}.prices.${room_idx}.${name}`
            update_mongodb(this.property_id, update_key, value)
        }
    }
}
</script>

<style>

.admin-edit-container {
    background-color: #f8f8f8;
}

.admin-contracts-container {
    padding: 10px 0;
}

.admin-contracts__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.admin-contracts__li {
    width: 90%;
    margin: 0 auto 30px auto;
    padding: 10px;
    background-color: #d8d8d8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.admin-contracts-main-info-and-utilities-container {
    display: flex;
    flex-direction: row;
}

.admin-contracts-main-contracts-info-container {
    width: 45%;
    margin: 30px auto;
    padding: 20px;
    background-color: #bbb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.admin-contracts-utilities-container {
    width: 45%;
    margin: 30px auto;
    padding: 20px;
    background-color: #bbb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.admin-contracts-room-prices__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;    
    display: flex;
    flex-flow: row wrap;
}

.admin-contracts-room-prices__li {
    width: 45%;
    margin: 30px auto;
    padding: 20px;
    background-color: #bbb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;    
}

.admin-contracts__h2--top {
    font-size: 1.4em;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
}

.admin-contracts__h3 {
    font-size: 1.2em;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
}

.no-contracts-message {
    width: 70%;
    margin: 0 auto;
    font-size: 1.2em;
    font-weight: 600;
    color: #444;
}

</style>