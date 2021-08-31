<template>
    <div class="contract-outer-container">
        <div class="contract-container" v-if="property">
            <div class="rooms-container">
                <RoomDetails 
                    v-for="index in num_rooms"
                    :key="`${index-1} + ${Math.random()}`"
                    :room_details="room_details[index-1]"
                    :room_prices="room_prices[index-1]"
                    class="room-container"
                />
            </div>
        </div>
        <div class="utilities-container">
            <Utilities class="item-Utilities"  :propertyData="property" :contract_idx="contract_idx" />
            <div class="small-print">* All prices are per person</div>
        </div>
    </div>
</template>

<script>
import { get_num_rooms } from '../shared/shared_code.js'

export default {
    name: 'Contract',
    props: ['propertyData', 'contract_idx'],
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        num_rooms() {
            return get_num_rooms(this.property)
        },
        room_details() {
            return this.property.room_details ? this.property.room_details : undefined
        },
        room_prices() {
            try { 
                return this.property.contracts[this.contract_idx].prices 
            } 
            catch(e) { return undefined } 
        }
    }
}
</script>

<style scoped>

.contract-outer-container {
    width: 62%;
    margin: 0 2% 80px 2%;
    border: 2px solid #cee2d7;
    border-radius: 15px;
    background-color: #eee;
}

.contract-container {
    width: 100%;
}

.rooms-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 2% 2%;
}

.utilities-container {
    width: 100%;
}

.small-print {
    font-size: 0.9em;
    text-align: left;
    margin: 35px 0 25px 6%;
}

</style>