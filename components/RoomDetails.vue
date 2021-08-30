<template>
    <div class="room-details-container" v-if="room">
        <div class="room_name">Room {{ room.room_name }}</div>
        <ul class="room-details__ul">
            <li v-for="key in keys_list" :key="key" class="room-details__li">
                <div v-show="room[key] !== null" class="room-details__div">
                    <span :ref="`room_details_key_${key}`" class="room-details__key" :key="Math.random()">{{ display_keys[key] }}</span>
                    <span :ref="`room_details_value_${key}`" class="room-details__value" :key="Math.random()">{{ room[key] }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'RoomDetails',
    props: ['room_details', 'room_prices'],
    data() {
        return {
            room: undefined,
            // room_id: undefined,
            // room_name: undefined,
            // disabled_access: undefined,
            // ensuite: undefined,
            // floor: undefined,
            // floor_space: undefined,
            // deposit_per_person: undefined,
            // price_per_person_per_week: undefined,
            // fee_per_person: undefined,
            keys_list: [
                'price_per_person_per_week',
                'deposit_per_person',
                'fee_per_person',
                'ensuite',
                'floor',
                'floor_space',
                'disabled_access'
            ],
            display_keys: {
                'price_per_person_per_week': 'Rent',
                'deposit_per_person': 'Deposit',
                'fee_per_person': 'Fee',
                'ensuite': 'Ensuite',
                'floor': 'Floor',
                'floor_space': 'Floor space',
                'disabled_access': 'Disabled access'               
            }
        }
    },
    mounted() {
        if (!this.room && this.room_details && this.room_prices) {
            this.create_room_obj()
        }
    },
    updated() {
        if (!this.room && this.room_details && this.room_prices) {
            this.create_room_obj()
        }
    },
    methods: {
        create_room_obj() {
            if (this.room_details && this.room_prices) {
                const room = {}
                const room_details = this.room_details
                room.room_id = room_details.room_id
                room.room_name = room_details.room_name
                room.disabled_access = room_details.disabled_access ? 'Yes' : 'No'
                room.ensuite = room_details.ensuite ? 'Yes' : 'No'
                room.floor = room_details.floor ? room_details.floor : null
                room.floor_space = parseFloat(room_details.floor_space) > 0 ? room_details.floor_space : null

                const room_prices = this.room_prices
                room.room_name = room_prices.room_name
                room.deposit_per_person = '£' + Math.round(room_prices.deposit_per_person)
                room.price_per_person_per_week = `£${Math.round((52/12) * room_prices.price_per_person_per_week)} pcm`
                room.fee_per_person = parseFloat(room_prices.fee_per_person) > 0 ? '£' + Math.round(room_prices.fee_per_person) : null
                this.room = {...room}
            }
        },
    },
}
</script>

<style scoped>

.room-details-container {
    width: 39%;
    margin: 2vh 1%;
}

.room_name {
    font-size: 1.2em;
    font-weight: 600;
    background-color: seagreen;
    height: 2em;
    padding: 5px 6px;
    color: white;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.room-details__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.room-details__li {
    width: 100%;
    font-size: 0.8em;
    font-weight: 600;
    background-color: rgb(211, 248, 210);
    border-left: 1px solid seagreen;
    border-right: 1px solid seagreen;
    padding: 0 6px;
}

.room-details__li:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; 
    border-bottom: 1px solid seagreen;
    padding-bottom: 4px;
}

.room-details__li span {
    padding: 6px 5px;
}

.room-details__key {
    display: inline-block;
    width: 50%;
    text-align: left;
}

.room-details__value {
    display: inline-block;
    width: 50%;
    text-align: right;
    padding-right: 5%;
}

</style>