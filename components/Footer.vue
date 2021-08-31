<template>
    <div class="footer">
        <div class="copyright">&copy; {{ copyright }}</div>
        <div class="address-container">
            <div class="address address__line1">{{ address.line1 }}</div>
            <div class="address address__line2">{{ address.line2 }}</div>
            <div class="address address__line3">{{ address.line3 }}</div>
            <div class="address address__city">{{ address.city }}</div>
            <div class="address address__city">{{ address.postcode }}</div>
            <div class="address address__country">{{ address.country }}</div>
            <div class="address address__telephone">{{ address.telephone }}</div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            copyright: "Properties'R'Us 2021",
            address: {
                line2: "Properties'R'Us",
                line2: 'Liver Building',
                line3: 'Waterfront',
                city: 'Liverpool',
                postcode: 'L1 1AA',
                country: 'UK',
                telephone: '0151 222 3333',
            }
        }
    }
}
</script>

<style scoped>

.footer {
    width: 100%;
    height: 35vh;
    background-color: rgb(40, 36, 48);
    color: #999;
    position: relative;
}

.copyright {
    font-size: 1.1em;
    position: absolute;
    left: 35vw;
    top: 50px;
}

.address-container  {
    position: absolute;
    left: 10vw;
    top: 50px;
}

.address {
    font-size: 1.1em;
    text-align: left;
}

</style>