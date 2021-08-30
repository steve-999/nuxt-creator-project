<template>
    <div class="admin-room-details-container" v-if="room_details">
        <div class="admin-room-details-list-container">
            <ul class="admin-room-details__ul">
                <li 
                    v-for="(room, room_idx) in room_details"
                    :key="room_idx"
                    class="admin-room-details__li"
                >
                    <form>
                        <label  class="admin-room-details__label">Room name</label>
                        <input  class="admin-room-details__input-text" 
                                type="text" 
                                :room_idx="room_idx"
                                name="room_name" 
                                :value="room.room_name"
                                @input="handleInputChange($event, room_idx)"
                        />
                        <label  class="admin-room-details__label">Room ID</label>
                        <input  class="admin-room-details__input-text" 
                                type="text" 
                                :room_idx="room_idx"
                                name="room_id" 
                                :value="room.room_id"
                                @input="handleInputChange($event, room_idx)"
                        />                      
                        <label  class="admin-room-details__label">Floor</label>
                        <input  class="admin-room-details__input-text" 
                                type="text" 
                                :room_idx="room_idx"
                                name="floor" 
                                :value="room.floor"
                                @input="handleInputChange($event, room_idx)"
                        />
                        <label  class="admin-room-details__label">Floor space</label>
                        <input  class="admin-room-details__input-text" 
                                type="text" 
                                :room_idx="room_idx"
                                name="floor_space" 
                                :value="room.floor_space"
                                @input="handleInputChange($event, room_idx)"
                        />  
                        <label  class="admin-room-details__label">Ensuite</label>
                        <input  class="admin-room-details__input-checkbox"
                                type="checkbox" 
                                :room_idx="room_idx"
                                id="ensuite" 
                                value="ensuite" 
                                name="ensuite" 
                                :checked="room.ensuite"
                                @change="handleCheckboxChange($event, room_idx)"
                        />                        
                        <label  class="admin-room-details__label">Disabled access</label>
                        <input  class="admin-room-details__input-checkbox"
                                type="checkbox" 
                                :room_idx="room_idx"
                                id="disabled_access" 
                                value="disabled_access" 
                                name="disabled_access" 
                                :checked="room.disabled_access"
                                @change="handleCheckboxChange($event, room_idx)"
                        />
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
import { update_mongodb } from '../../shared/shared_code.js'

export default {
    name: 'AdminRoomDetails',
    props: ['propertiesData', 'property_id'],
    data() {
        return {
            properties: undefined,
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
        room_details() {
            return this.property ? this.property.room_details : undefined
        }
    },
    methods: {
        handleInputChange(e, room_idx) {
            const update_key = `room_details.${room_idx}.${e.target.name}`
            const value = e.target.value
            update_mongodb(this.property_id, update_key, value)  
        },
        handleCheckboxChange(e, room_idx) {
            const update_key = `room_details.${room_idx}.${e.target.name}`
            const value = e.target.checked
            update_mongodb(this.property_id, update_key, value)  
        }
    }
}
</script>


<style scoped>

.admin-room-details-container {
    width: 100%;
}

.admin-room-details-list-container {
    width: 90%;
    margin: 0 auto;
}

.admin-room-details__ul {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
}

.admin-room-details__li {
    width: 45%;
    margin: 15px;
    padding: 15px;
    background-color: #ccc;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.admin-room-details__label {
    display: inline-block;
    width: 50%;
    font-size: 0.8em;
    box-sizing: border-box;
    padding: 5px;
    text-align: left;
}

.admin-room-details__input-checkbox,
.admin-room-details__input-text {
    display: inline-block;
    padding: 5px;
    text-align: left;
    box-sizing: border-box;
    width: 50%;
    margin: 2px auto;
    border: 1px solid #ccc;
}

.admin-room-details__input-text
 {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8em;
    height: 2em;
    border-radius: 8px;
}

.admin-room-details__input-text:focus {
    outline: none;
    border: none;
    box-shadow: var(--orangey-red-color) 0px 0px 2px 2px;
}


</style>



