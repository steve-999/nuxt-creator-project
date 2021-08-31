<template>
    <div class="admin-page-container fadeInAnimation" v-if="properties">
        <div class="select-property-container">
            <button class="select-property__button" @click="handleClickOpenModal">Select a property to edit</button>
            <SelectPropertyModal 
                :propertiesData="properties" 
                :show_modal="show_modal" 
                @handleSelectPropertyClick="handleSelectPropertyClick" 
                @closeModal="closeModal"
            />
            <div class="selected-property__div" v-show="selected_property_id">Selected property: {{ selected_property_string }}</div>
        </div>

        <div class="admin-content-container">
            <div class="tabs-container" v-if="!show_modal">
                <ul class="tabs__ul">
                    <div v-for="idx in tabs.length" :key="idx"> 
                        <li class="tabs__li">
                            <NuxtLink 
                                :to="`/admin/${tabs[idx-1].route_name}`"
                                @click="handleClickTab(tabs[idx-1].route_name)"
                                :ref="tabs[idx-1].route_name" 
                                class="tab"
                            >
                                {{ tabs[idx-1].text }}
                            </NuxtLink>
                        </li>                
                    </div>
                </ul>
            </div>
            <div class="admin-edit-container">
                <NuxtChild :propertiesData="properties" :property_id="selected_property_id" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { BASE_API_URL } from '../environment/environment.js'
import SelectPropertyModal from '../components/admin/SelectPropertyModal.vue'
import { 
    create_address_string, 
    get_num_rooms, 
    get_num_bathrooms,
    pluralise_word_for_num 
} from '../shared/shared_code.js'

export default {
    name: 'Admin',
    data() {
        return {
            properties: undefined,
            show_modal: true, 
            selected_property_id: undefined,
            tabs: [
                { text: 'Property Info',    route_name: 'property_info'},
                { text: 'Room Details',     route_name: 'room_details'},
                { text: 'Contracts',        route_name: 'contracts'},
                { text: 'Media',            route_name: 'media' },
            ]
        }
    },
    components: {
        SelectPropertyModal
    },
    fetch() {
        const url = `${BASE_API_URL}/properties`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.properties = data
            })
    },
    computed: {
        selected_property_string() {
            if (!this.selected_property_id)
                return undefined
            const property = this.properties.find(property => property.property_id == this.selected_property_id)
            const address_string = create_address_string(property)
            const property_title = property.room_type
            const num_bedrooms = get_num_rooms(property)
            const num_bathrooms = get_num_bathrooms(property)
            const num_bedrooms_string = pluralise_word_for_num('bedroom', num_bedrooms)
            const num_bathrooms_string = pluralise_word_for_num('bathroom', num_bathrooms)
            return `${property_title}, ${address_string}, ${num_bedrooms} ${num_bedrooms_string}, ${num_bathrooms} ${num_bathrooms_string}`
        }
    },
    methods: {
        handleSelectPropertyClick(property_id) {
            this.selected_property_id = property_id
            this.show_modal = false
            this.$router.push({ path: '/admin/property_info'})
        },
        handleClickOpenModal() {
            this.show_modal = true
        },
        handleClickTab(route_name) {
            if (!this.selected_property_id) {
                alert('Please select a property to edit')
                return
            }
            this.$router.push({ path: `/admin/${route_name}`})
        },
        closeModal() {
            this.show_modal = false
        }
    }
}
</script>

<style scoped>

.page-heading-table,
.page-heading-table td {
    border: 1px solid grey;
}

.admin-page-container {
    width: 100%;
}

.admin-content-container {
    width: 90%;
    margin: 0 auto;
}

.select-property-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.select-property__button {
    background-color: rgb(91, 142, 236);
    margin: 20px auto;
    text-align: center;
}

.selected-property__div {
    font-size: 1.05em;
    font-weight: 600;
    color: #444;
    padding: 8px 0;
    margin: 0 auto 10px auto;
    text-align: center;
    height: 40px;
}

/******************************************************/

.tabs-container {
    margin: 0 auto;
}

.tabs__ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    position: relative;
    top: -5px;
}

.tabs__li {
    display: inline-block;

}

.tabs__li a {
    margin: 0 1px;
    padding: 5px 12px;
    background-color: rgb(118, 105, 207);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    color: white;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    text-decoration: none;
}

.tabs__li a:hover {
    background-color: mediumorchid;
}

.tabs__li a.nuxt-link-active {
    background-color: var(--orangey-red-color);
}

.admin-edit-container {
    width: 90%;
    margin: 0 auto 60px auto;
    padding: 20px 0;
    border: 2px solid #dcdcdc;
    border-radius: 15px;
    background-color: #f4f4f4;
    min-height: 500px;
}

/* .tabs__li .tab.router-link-exact-active {
    color: yellow;
}  */

</style>


