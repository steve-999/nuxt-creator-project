<template>
    <div class="empty-input-list-form-container">
        <form>
            <ul class="empty-input-list-form__ul" v-if="input_list">
                <li v-for="(item, idx) in input_list" :key="idx" class="empty-input-list-form__li">
                    <input  
                        class="empty-input-list-form__input" 
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
            //console.log('InputListForm > handleInput > this.indices, e.target.name, e.target.value', 
            //                                                this.indices, e.target.name, e.target.value)
            this.$emit('handleInput', Number(e.target.name), e.target.value, this.indices)
        }
    }
}
</script>

<style>

.empty-input-list-form__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.empty-input-list-form__input {
    display: inline-block;
    padding: 5px 8px;
    margin: 2px auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8em;
    text-align: left;
    box-sizing: border-box;
    height: 2em;
}

.empty-input-list-form__input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 80%;
}

.empty-input-list-form__input:focus {
    outline: none;
    border: none;
    box-shadow: var(--orangey-red-color) 0px 0px 2px 2px;
}

</style>