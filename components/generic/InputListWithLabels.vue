<template>
    <div class="input-list-with-labels-container" v-if="input_object">
        <h3 class="input-list-with-labels__h3" v-if="heading">{{ heading }}</h3>
        <form>
            <div v-for="key in keys_list" :key="key" class="input-list-with-labels__row">
                <label class="input-list-with-labels__label">{{ display_labels_object[key] }}</label>
                <input 
                    class="input-list-with-labels__input" 
                    type="text" 
                    :name="key" 
                    :value="input_object[key]"
                    @input="handleInput($event)"
                >
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'InputListWithLabels',
    props: ['heading', 'input_object', 'display_labels_object', 'indices'],
    computed: {
        keys_list() {
            return this.display_labels_object ? Object.keys(this.display_labels_object) : []
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('handleInput', e.target.name, e.target.value, this.indices)
        }
    }
}
</script>

<style>

.input-list-with-labels-container {
    padding: 0;
}

.input-list-with-labels__h3 {
    font-size: 1.2em;
    font-weight: 600;
    text-align: left;
    padding: 5px 0;
    margin: 5px 0;
}

.input-list-with-labels__row {
    display: flex;
    flex-direction: row;
}

.input-list-with-labels__label,
.input-list-with-labels__input {
    display: inline-block;
    padding: 5px 8px;
    margin: 4px auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8em;
    text-align: left;
    box-sizing: border-box;
    height: 2em;
}

.input-list-with-labels__label {
    width: 50%;
}

.input-list-with-labels__input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 50%;
}

.input-list-with-labels__input:focus {
    outline: none;
    border: none;
    box-shadow: var(--orangey-red-color) 0px 0px 2px 2px;
}

</style>
