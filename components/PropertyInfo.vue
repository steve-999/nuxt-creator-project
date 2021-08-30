<template>
    <div class="property-info-container" v-if="property">
        <h2 class="overview">Overview</h2>
        <div class="description">{{ description }}</div>
    </div>
</template>

<script>
export default {
    name: 'PropertyInfo',
    props: ['propertyData'],
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        description() {
            return this.property ? this.property.description : ''
        }
    }
}
</script>

<style scoped>

.property-info-container {
    min-height: 300px;
    width: 70%;
}

h2 {
    font-size: 2em;
    font-weight: 700;
    color: darkslateblue;
    margin: 40px 0 30px 6%;
    text-align: left;
}

.description {
    width: 87%;
    padding: 3%;
    margin: 6% 4% 0 6%;
    font-size: 1.25em;
    font-weight: 500;
    color: #333;
    min-height: 250px;
    text-align: justify;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 15px;
}



</style>