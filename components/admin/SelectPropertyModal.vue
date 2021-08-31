<template>
    <div class="modal-container" v-if="show_modal">
        <div class="modal-content-container">
            <h3 class="modal-content__h3">Please select a property to edit</h3>
            <ul class="select-property__ul">
                <li class="select-property__li" 
                    v-for="property in properties" 
                    :key="property.property_id"  
                    @click="handleSelectPropertyClick(property.property_id)"
                >
                    <div class="select-property__card">
                        <div class="select-property__title">{{ get_title(property) }}</div>
                        <div class="select-property__address">{{ get_address_string(property) }}</div>
                        <div class=select-property__num-bedrooms-num-bathrooms>
                            <span class="select-property__fa-icon">
                                <font-awesome-icon class="page-heading__fa-icon fa-sm" icon="bed" />
                            </span>
                            <span class="select-property__num-bedrooms">{{ get_num_bedrooms(property) }}</span>
                            <span class="select-property__fa-icon">
                                <font-awesome-icon class="page-heading__fa-icon fa-sm" icon="bath" />
                            </span>
                            <span class="select-property__num-bathrooms">{{ get_num_bathrooms(property) }}</span>    
                        </div>
                    </div>
                </li>
            </ul>
            <button @click="handleClickCloseModal" class="select-property__button">Close</button>
        </div>
    </div>
</template>

<script>
import { 
    create_address_string, 
    get_num_rooms,
    get_num_bathrooms
} from '../../shared/shared_code.js'

export default {
    name: 'SelectPropertyModal',
    props: ['propertiesData', 'show_modal'],
    data() {
        return {
            properties: undefined
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickForModal)
        this.properties = this.propertiesData ? this.propertiesData : undefined
    },
    updated() {
        if (!this.properties && this.propertiesData) {
            this.properties = this.propertiesData ? this.propertiesData : undefined
        }
    },
    destroyed() {
        document.removeEventListener('click', this.handleClickForModal)
    },
    methods: {
        get_title(property) {
            return property ? property.room_type : ''
        },
        get_address_string(property) {
            return create_address_string(property)
        },
        get_num_bedrooms(property) {
            return get_num_rooms(property)
        },
        get_num_bathrooms(property) {
            return get_num_bathrooms(property)
        },
        handleClickForModal(e) {
            if (e.target.className === 'modal-container' && this.show_modal === true) {
                this.$emit('closeModal')
            }
        },
        handleSelectPropertyClick(property_id) {
            this.$emit('handleSelectPropertyClick', property_id)
        },
        handleClickCloseModal() {
            this.$emit('closeModal')
        },
    }
}
</script>

<style>

.select-property-container {
    width: 90%;
    margin: 0 auto 10px auto;
}

.select-property__button {
    font-size: 1.1em;
    font-weight: 500;
    margin: 0.8em;
    padding: 6px 20px;
    background-color: rgb(44, 182, 106);
    color: white;
    outline: none;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.2s;
}

.select-property__button:hover {
    background-color: rgb(95, 171, 248);
}

.modal-container {
    background: rgba(94, 94, 94, 0.678);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 99;
}

.modal-content-container {
    background-color: white;
    width: 80%;
    margin: 20vh auto 0 auto;
    padding: 20px;
    border-radius: 15px;
}

.select-property__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 0 auto;
}

.select-property__li {
    display: inline-block;
    background-color: #d8f0f3;
    border: 1px solid #ddd;
    width: 31%;
    margin: 5px;
    padding: 5px 7px;
    box-sizing: border-box;
    border-radius: 8px;
}

.select-property__li:hover {
    background-color: #7debfa;
    cursor: pointer;
}

.select-property__title {
    font-size: 0.75em;
    font-weight: 700;
}
                   
.select-property__address {
    font-size: 0.6em;
    font-weight: 600;
}

.select-property__fa-icon {
    font-size: 0.9em;
    padding: 2px 5px;
}

.select-property__num-bedrooms,
.select-property__num-bathrooms {
    display: inline-block;
    font-size: 0.7em;
    padding: 2px 5px;
}


</style>