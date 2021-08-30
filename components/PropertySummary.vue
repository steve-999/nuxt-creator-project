<template>
    <div class="property-container" v-if="min_total_monthly_cost">
        <img class="property__image" src="../assets/images/unsplash-kitchen-design_1280x720.jpg" alt="unsplash kitchen design" />
        <img class="property__image" src="../assets/images/unsplash-bedroom-2_1280x720.jpg" alt="unsplash bedroom design" />        
        <div class="property__details-box">
            <NuxtLink :to="`/properties/${property.property_id}`"> 
                <div class="property__details-box-address">
                    <span class="property__details-box-address--anchor-text">{{ property_name }}, {{ road_name }}</span>
                </div>
            </NuxtLink>
            <div class="property__details-box-availability">Available from {{ available_from }}</div>
            <div class="property__rooms-included">
                <span class="property__num-bedrooms">
                    <span class="property__num-bedrooms--icon"><font-awesome-icon class="property__fa-icon fa-sm" icon="bed" /></span>
                    <span class="property__num-bathrooms--text">{{ num_bedrooms_string }}</span>
                </span>
                <span class="property__num-bathrooms">    
                    <span class="property__num-bathrooms--icon"><font-awesome-icon class="property__fa-icon fa-sm" icon="bath" /></span>
                    <span class="property__num-bathrooms--text">{{ num_bathrooms_string }}</span>
                </span>
            </div>
            <div class="property__overall-price">
                <span class="property__overall-price--price">£{{ min_total_monthly_cost }} PCM</span>
                <span class="property__overall-price--text"> Excluding Bills</span>
            </div>
            <div class="property__book-now-button">
                <a :href="book_now_url" target="_blank">
                    <span class="property__book-now-button--text">BOOK NOW</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { 
    get_min_start_date, 
    pluralise_word_for_num, 
    get_num_rooms, 
    get_num_bathrooms,
    get_min_total_monthly_price,
    convert_yyyy_mm_dd_to_readable_date
} from '../shared/shared_code.js'

export default {
    name: 'PropertySummary',
    props: ['propertyData'],
    computed: {
        property() {
            return this.propertyData
        },
        property_name() {
            try { return this.property.address.property_name } catch(e) { return undefined }
        },
        road_name() {
            try { return this.property.address.road_name } catch(e) { return undefined }
        },
        available_from() {
            try { return convert_yyyy_mm_dd_to_readable_date(get_min_start_date(this.property)) } catch(e) { return undefined }
        },
        num_contracts() {
            try { return this.property.contracts.length } catch(e) { return undefined }
        },
        num_bedrooms() {
            try { return get_num_rooms(this.property)} catch(e) { return undefined }
        },
        num_bedrooms_string() {
            return this.num_bedrooms ? `${this.num_bedrooms} ${pluralise_word_for_num('Bedroom', this.num_bedrooms)}` : undefined
        },
        num_bathrooms() {
            try { return get_num_bathrooms(this.property) } catch(e) { return undefined }
        },
        num_bathrooms_string() {
            return this.num_bathrooms ? `${this.num_bathrooms} ${pluralise_word_for_num('Bathroom', this.num_bathrooms)}` : undefined
        },
        min_total_monthly_cost() {
            return get_min_total_monthly_price(this.property)
        },
        book_now_url() {
            if (!this.property || !('contracts' in this.property))
                return ''
            return this.property.contracts.length > 0 ? this.property.contracts[0].book_now_url : ''
        }
    }
}
</script>

<style scoped>

.property-container {
    width: 100%;
    margin: 40px auto;
    padding: 0px;
    max-width: 1100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.property__image {
    width: 48%;
}

.property__details-box {
    position: absolute;
    top: 5%;
    left: 27.5%;
    width: 45%;
    height: 90%;
    background-color: white;
    z-index: 2;
    text-align: left;
    padding: 0.5em 1.3em;
    font-weight: 300;
}

.property__details-box a {
    text-decoration: none;
     color: #000;
}

.property__details-box-address {
    font-size: 1.2em;
    font-weight: 300;
    color: #000;
    padding: 0.3em 0;
    transition: 0.25s;
}

.property__details-box-address--anchor-text:hover {
    color: rgb(194, 68, 46);
    border-bottom: 1px solid rgb(194, 68, 46);
}

.property__details-box-availability {
    font-size: 0.9em;
    font-weight: 300;
    color: #888;
    padding: 0.2em 0;
}

.property__num-bedrooms,
.property__num-bathrooms,
.property__overall-price {
    display: inline-block;  
    font-size: 1rem;
    padding: 0.2em 0;
}

.property__fa-icon {
    font-size: 1.0em;
    color: rgb(236, 82, 44);
}

.property__num-bathrooms--text {
    font-size: 0.8em;
    color: #222;
    padding: 0 0.7em;
}

.property__overall-price--price,
.property__overall-price--text {
    font-size: 0.9em;
    font-weight: 400;
    color: #555;
    letter-spacing: -0.5px;
}

.property__overall-price--price {
    font-weight: 600;
}

.property__book-now-button {
    display: block;
    background-color: var(--orangey-red-color);
    transition: 0.25s;
}

.property__book-now-button:hover {
    background-color: rgb(245, 140, 121);
}

.property__book-now-button--text {
    display: block;
    color: white;
    font-size: 0.9em;
    font-weight: 300;
    text-align: center;
    letter-spacing: 2px;
    padding: 1em 0;
    margin: 0.8em 0 0 0;
}


</style>