<template>
    <div class="input-list-form-container">
        <form>
            <ul class="input-list-form__ul" v-if="input_list">
                <li v-for="(item, idx) in input_list" :key="idx" class="input-list-form__li">
                    <input  
                        class="input-list-form__input" 
                        type="text" 
                        :name="idx" 
                        :value="item"
                        @input="handleInput($event)"
                    />
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
export default {
    name: 'InputListForm',
    props: ['input_list', 'indices'],
    computed: {
        num_elements() {
            return this.input_list ? this.input_list.length : undefined
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('handleInput', Number(e.target.name), e.target.value, this.indices)
        }
    }
}
</script>

<style>

.input-list-form-container {
    width: 80%;
    margin: 0 auto;
}

.input-list-form__ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
}

.input-list-form__li {
    display: inline-block;
    width: 100%;
}

.input-list-form__input {
    padding: 5px 8px;
    margin: 2px auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8em;
    box-sizing: border-box;
    height: 2em;
}

.input-list-form__input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
}

.input-list-form__input:focus {
    outline: none;
    border: none;
    box-shadow: var(--orangey-red-color) 0px 0px 2px 2px;
}

</style>