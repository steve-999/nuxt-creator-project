<template>
    <div class="input-boolean-list-container" v-if="input_object">
        <h3 class="input-boolean-list__h3" v-if="heading">{{ heading }}</h3>
        <form>
            <div v-for="key in keys_list" :key="key" class="input-boolean-list__row">
                <input 
                    type="checkbox" 
                    :id="key"
                    :value="key"
                    :name="key" 
                    :checked="input_object[key]"
                    class="input-boolean-list__input" 
                    @change="handleCheckboxChange($event)"
                >
                <label class="input-boolean-list__label">{{ display_labels_object[key] }}</label>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'InputBooleanList',
    props: ['heading', 'input_object', 'display_labels_object', 'indices'],
    computed: {
        keys_list() {
            return this.display_labels_object ? Object.keys(this.display_labels_object) : undefined
        }
    },
    methods: {
        handleCheckboxChange(e) {
            this.$emit('handleCheckboxChange', e.target.name, e.target.checked, this.indices)
        }
    }
}
</script>

<style>

.input-boolean-list__h3 {
    font-size: 1.2em;
    font-weight: 600;
    text-align: left;
    padding: 5px 0;
    margin: 5px 0;
}

.input-boolean-list__row {
    width: 80%;
    margin-left: 20%;
    text-align: left;
}

.input-boolean-list__label,
.input-boolean-list__input {
    display: inline-block;
    padding: 5px 8px;
    margin: 2px auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8em;
    text-align: left;
    box-sizing: border-box;
    height: 2em;
    text-align: left;
}

.input-boolean-list__input {
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 1em;
    width: 30px;
}

.input-boolean-list__label {
    width: 60%;
}

.input-boolean-list__input:focus {
    outline: none;
    border: none;
    box-shadow: var(--orangey-red-color) 0px 0px 2px 2px;
}


</style>