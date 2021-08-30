<template>
    <div class="page-heading-container" v-if="propertyData">
        <table class="page-heading-table">
            <tr v-if="show_top_rows"><td>&nbsp;</td><td><h1>{{ pageTitle }}</h1></td></tr>
            <tr class="page-heading__address" v-if="show_top_rows">
                <td><font-awesome-icon class="page-heading__fa-icon" icon="map-marker" /></td>
                <td>{{ addressString }}</td>
            </tr>
            <tr class="page-heading__num-bedrooms-available" v-if="isFinite(num_rooms) && num_bedrooms_string">
                <td><font-awesome-icon class="page-heading__fa-icon" icon="bed" /></td>
                <td>{{ num_bedrooms_string }}</td>
            </tr>
            <tr class="page-heading__num-bathrooms" v-if="isFinite(num_bathrooms) && num_bathrooms_string">
                <td><font-awesome-icon class="page-heading__fa-icon" icon="bath" /></td>
                <td>{{ num_bathrooms_string }}</td>
            </tr>
            <tr class="page-heading__available-from" v-if="available_from">
                <td><font-awesome-icon class="page-heading__fa-icon" icon="calendar-alt" /></td>
                <td class="page-heading__available-from__text">Available from {{ available_from }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { 
    create_address_string, 
    get_num_rooms,
    get_num_bathrooms,
    get_min_start_date,
    convert_yyyy_mm_dd_to_readable_date,
    pluralise_word_for_num
} from '../shared/shared_code.js'

export default {
    name: 'PropertyHeading',
    props: ['propertyData', 'show_top_rows'],
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        pageTitle() {
            return this.property ? this.property.room_type : ''
        },
        num_rooms() {
            return get_num_rooms(this.property)
        },
        num_bedrooms_string() {
            try { return this.num_rooms + ' ' + pluralise_word_for_num('bedroom', this.num_rooms) } catch(e) { return '' }
        },
        num_bathrooms() {
            return get_num_bathrooms(this.property)
        },
        num_bathrooms_string() {
            try { return this.num_bathrooms + ' ' + pluralise_word_for_num('bathroom', this.num_bathrooms) } catch(e) { return '' }
        },
        available_from() { 
            try { return convert_yyyy_mm_dd_to_readable_date(get_min_start_date(this.property)) } catch(e) { return undefined }
        },
        addressString() {
            try { return create_address_string(this.property) } catch(e) { return undefined }
        },
    },
}
</script>

<style scoped>

.page-heading-container {
    width: 95%;
    margin: 0 auto;
}

.page-heading-table {
    width: 100%;
    border: none;
}

h1 {
    color: darkslateblue;
    font-size: 1.75em;
    margin: 20px auto 0 auto;
}

.page-heading-table td {
    padding: 4px 0 4px 8px;
    text-align: left;
}

table tr td:nth-child(2) {
    padding: 12px;
    font-size: 1.2em;
    font-weight: 700;
    color: #555;
}

.page-heading__address {
    position: relative;
}

table tr td.page-heading__available-from__text {
    font-size: 0.9em;
}

.page-heading__fa-icon {
    margin: 0 auto;
    color: lightseagreen;
}

</style>