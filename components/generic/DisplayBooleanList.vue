<template>
    <div class="DisplayBooleanList__outer-list-container">
        <h2 v-if="heading" class="DisplayBooleanList__h2">{{ heading }}</h2>
        <div class="DisplayBooleanList__list-container">
            <ul class="DisplayBooleanList__list__ul">
                <li v-for="item in input_list_keys" :key="item" class="DisplayBooleanList__list__li">
                    <span class="DisplayBooleanList__span-icon">
                        <font-awesome-icon
                            class="icon" 
                            :icon="`${input_list_object[item] ? 'check' : 'times'}`"
                            :style="{color: `${input_list_object[item] ? 'green' : 'crimson'}`}" 
                        />
                    </span>
                    <span class="DisplayBooleanList__span-text">{{ capitalize_replace_underscore(item) }}</span>
                </li>
            </ul>
        </div>
</div>
</template>

<script>
export default {
    name: 'DisplayBooleanList',
    props: ['input_object_data', 'heading'],
    computed: {
        input_list_object() {
            return this.input_object_data ? this.input_object_data : undefined
        },
        input_list_keys() {
            if (!this.input_object_data)
                return []
            return Object.keys(this.input_object_data).length > 0 ? Object.keys(this.input_object_data) : []
        }
    },
    methods: {
        capitalize_replace_underscore(str) {
            const new_str = str[0].toUpperCase() + str.slice(1)
            return new_str.replace('_', ' ')
        }
    }
}
</script>

