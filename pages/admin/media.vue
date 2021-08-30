<template>
    <div class="admin-media-container">
        <ul class="admin-media-photos__ul">
            <h3 class="admin-media-photos__h3">Photos</h3>
            <li v-for="(photo, photo_idx) in photos" 
                :key="photo_idx"
                class="admin-media-photos__li"
            >
                <div class="admin-media-single-photo-container">
                    <InputListWithLabels 
                        :indices="`photo_idx=${photo_idx}`"
                        :input_object="photo" 
                        :display_labels_object="photo_display_keys"
                        @handleInput="handleInputChange__Photos" />
                </div>
            </li>
        </ul>

        <div class="floorplans-container">
            <h3 class="floorplans__h3">Floorplans</h3>
            <InputListForm 
                :input_list="floorplans" 
                indices="floorplans"
                @handleInput="handleInputListChange" />
        </div>

        <div class="photos360-container">
            <h3 class="photos360__h3">Photos 360</h3>
            <InputListForm 
                :input_list="photos360" 
                indices="photos360"
                @handleInput="handleInputListChange" />
        </div>

        <div class="tours-container">
            <h3 class="tours__h3">Tours</h3>
            <InputListForm 
                :input_list="tours" 
                indices="tours"
                @handleInput="handleInputListChange" />
        </div>

        <div class="videos-container">
            <h3 class="videos__h3">Videos</h3>
            <InputListForm 
                :input_list="videos" 
                indices="videos"
                @handleInput="handleInputListChange" />
        </div>
    </div>
</template>

<script>
import InputListWithLabels from '../../components/generic/InputListWithLabels.vue'
import InputListForm from '../../components/generic/InputListForm.vue'
import { update_mongodb } from '../../shared/shared_code.js'

const EMPTY_LIST = ['']

export default {
    name: 'AdminMedia',
    props: ['propertiesData', 'property_id'],
    data() {
        return {
            properties: undefined,
            photo_display_keys: {
                photo: 'Photo URL',
                thumb: 'Thumbnail URL',
                caption: 'Caption'
            },
            floorplans: [...EMPTY_LIST],
            photos360: [...EMPTY_LIST],
            tours: [...EMPTY_LIST],
            videos: [...EMPTY_LIST],
        }
    },
    components: { 
        InputListWithLabels,
        InputListForm
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
        photos() {
            try { return this.property.media.photos } catch(e) { return []}
        },
    },
    methods: {
        handleInputListChange(name, value, indices) {
            console.log(`AdminMedia > handleInputListChange > indices ${indices} name ${name} value ${value}`)
            const update_key = `media.${indices}.${name}` 
            console.log('[value]', [value])
            update_mongodb(this.property_id, update_key, [value])
        },
        handleInputChange__Photos(name, value, indices) {
            //console.log(`AdminMedia > handleInputChange__photos > indices ${indices} idx ${photo_idx} value ${value}`)
            const photo_idx = indices.split('=')[1]
            const update_key = `media.photos.${photo_idx}.${name}` 
            update_mongodb(this.property_id, update_key, value)
        },
    }

}
</script>

<style scoped>

.admin-media-photos__ul {
    list-style-type: none;
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background-color: #d8d8d8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
}

.admin-media-photos__li
 {
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    background-color: #bbb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.admin-media-photos__h3 {
    font-size: 1.3em;
    font-weight: 700;
    margin: 0px auto;
    padding: 0;
}

.floorplans-container,
.photos360-container,
.tours-container,
.videos-container {
    width: 80%;
    margin: 40px auto;
    padding: 20px;
    background-color: #d8d8d8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

</style>