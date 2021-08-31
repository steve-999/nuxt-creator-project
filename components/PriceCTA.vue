<template>
    <div class="outer-price-container" ref="outerPriceContainer">
        <div class="price-container" v-if="min_rent_price">
            <div class="price-info-container">
                <div class="price-from-col">
                    <span class="price-info__label">Rent from</span>
                    <span class="price-info__price">£{{ min_rent_price }}</span>
                    <span class="price-info__small-print">per calendar month</span>
                </div>
                <div class="deposit-col">
                    <span class="deposit-info__label">Deposit</span>
                    <span class="deposit-info__price">£{{ min_deposit }}</span>
                    <span class="deposit-info__small-print">One-off payment</span>
                </div>
            </div>
            <div class="book-now-btn-container">
                <a :href="book_now_url" target="_blank"><button class="book-now-btn">BOOK NOW</button></a>
            </div>
            <div class="property-heading-component-container">
                <PropertyHeading :propertyData="property" :show_top_rows="false" v-if="show_heading_component" />
            </div>
        </div>
        <div class="price-container" v-else>
            <h3>There are no price details available yet for this property</h3>
        </div>
    </div>
</template>

<script>
import { get_min_total_monthly_price, get_min_total_deposit } from '../shared/shared_code.js'

export default {
    name: 'PriceCTA',
    props: ['propertyData'],
    data() {
        return {
            position_type: 'static',
            show_heading_component: false
        }
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        document.removeEventListener('scroll', this.handleScroll)
    },
    computed: {
        property() {
            return this.propertyData ? this.propertyData : undefined
        },
        min_rent_price() {
            return get_min_total_monthly_price(this.propertyData)
        },
        min_deposit() {
            return get_min_total_deposit(this.propertyData)
        },
        book_now_url() {
            if (!this.propertyData || !('contracts' in this.propertyData))
                return ''
            return this.propertyData.contracts.length > 0 ? this.propertyData.contracts[0].book_now_url : ''
        }
    },
    methods: {
        get_min_val(propertyObj, key) {
            const contracts = propertyObj.contracts
            let min_val = 9999999
            contracts.forEach(contract => {
                contract.prices.forEach(priceObj => {
                    const price = parseInt(priceObj[key])
                    if (price < min_val && price !== 0) {
                        min_val = price
                    }               
                })
            })
            if (min_val === 9999999)
                return undefined
            return Math.round(Math.ceil(min_val))
        },
        handleScroll(e) {
            if (this.$refs.outerPriceContainer && this.position_type === 'fixed' && e.target.scrollingElement.scrollTop <= 380) {
                if (this.$refs.outerPriceContainer.classList.contains('outer-price-container-fixed')) {
                    this.$refs.outerPriceContainer.classList.replace('outer-price-container-fixed', 'outer-price-container')
                }
                this.position_type = 'static' 
                this.show_heading_component = false          
            }
            else if (this.$refs.outerPriceContainer && this.position_type === 'static' && e.target.scrollingElement.scrollTop > 380) {
                if (this.$refs.outerPriceContainer.classList.contains('outer-price-container')) {
                    this.$refs.outerPriceContainer.classList.replace('outer-price-container', 'outer-price-container-fixed')
                }
                this.position_type = 'fixed'
                this.show_heading_component = true
            } 

        }
    }
}
</script>

<style scoped>

.outer-price-container {
    width: 32vw;
    height: 240px;
    transition: 0.25s;
}

.outer-price-container-fixed {
    width: 32vw;
    position: fixed;
    top: 0px;
    height: 450px;
    transition: 0.25s;
}

.price-container { 
    background-color: white; 
    border: 2px solid #cee2d7;
    height: 100%;
    border-radius: 10px;
    width: 92%;
    margin: 40px auto 20px auto;
    padding: 15px;
}

.price-info-container {
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    align-items: center;
}

.price-from-col, .deposit-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 50%;
}

.price-info__label, .deposit-info__label {  
    font-size: 1.0em;
    font-weight: 600; 
    color: #999;
    padding: 5px;
}

.price-info__price, .deposit-info__price {
    font-family: 'Lato', sans-serif;
    font-size: 2.5em;
    font-weight: 900; 
    color: darkslateblue;
    padding: 5px;
}

.deposit-info__price {
    font-weight: 400; 
}

.price-info__small-print, .deposit-info__small-print {
    font-size: 0.8em;
    font-weight: 600; 
    color: lightseagreen;   
    padding: 5px;
}

.book-now-btn-container {
    height: 100px;
    padding: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.book-now-btn {
    background-color: darkorange;
    color: white;
    font-size: 1.5em;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
}

</style>