<template>
    <div class="DisplayListForObject__outer-list-container">
        <h2 class="DisplayListForObject__h2">{{ heading }}</h2>
        <div class="DisplayListForObject__list-container">
            <ul class="DisplayListForObject__list__ul">
                <li v-for="key in input_list_keys" :key="key" class="DisplayListForObject__list__li">
                    <span class="DisplayListForObject__span-text">{{ capitalize_replace_underscore(key) }}</span>
                    <span class="DisplayListForObject__span-value">{{ replace_empty_string_with_hyphen(input_object_data[key]) }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DisplayListForObject',
    props: ['input_object_data', 'heading'],
    computed: {
        input_list_object() {
            return this.input_object_data ? this.input_object_data : undefined
        },
        input_list_keys() {
            return this.input_object_data ? Object.keys(this.input_object_data) : []
        }
    },
    methods: {
        capitalize_replace_underscore(str) {
            const new_str = str[0].toUpperCase() + str.slice(1)
            return new_str.replace('_', ' ')
        },
        replace_empty_string_with_hyphen(str) {
            return str.length === 0 ? '-' : str
        }
    }
}
</script>


<style>

.DisplayBooleanList__outer-list-container {
    width: 100%;
}

.DisplayBooleanList__h2 {
    color: darkslateblue;
    font-size: 1.75em;
    margin: 30px 0 30px 6%;
    text-align: left;
}

.DisplayBooleanList__list-container {
    width: 100%;
}

.DisplayBooleanList__list__ul {
    width: 94%;
    margin: 0 0 0 6%;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
}

.DisplayBooleanList__list__li {
    width: 31%;
    margin-top: 35px;
    text-align: left;
    font-size: 0.95em;
    font-weight: 600;
}

.DisplayBooleanList__list__li .icon {
    font-size: 0.8em;
    margin-right: 15px;
}


.DisplayListForObject__outer-list-container {
    width: 100%;
}

.DisplayListForObject__h2 {
    color: darkslateblue;
    font-size: 1.75em;
    margin: 30px 0 30px 6%;
    text-align: left;
}

.DisplayListForObject__list-container {
    width: 100%;
}

.DisplayListForObject__list__ul {
    width: 94%;
    margin: 0 0 0 6%;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
}

.DisplayListForObject__list__li {
    width: 31%;
    margin-top: 35px;
    text-align: left;
}

.DisplayListForObject__span-text, 
.DisplayListForObject__span-value {
    display: inline-block;
    text-align: left;
    font-size: 0.95em;
    font-weight: 600;
}

.DisplayListForObject__span-text {
    min-width: 60%;
}

</style>
