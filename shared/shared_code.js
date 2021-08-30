import {BASE_API_URL} from '../environment/environment.js'
import axios from 'axios';

export function create_address_string(propertyObj) {
    try {
        const a = propertyObj.address;
        const optional_property_name = a.property_name ? `${a.property_name}, ` : ''
        return `${optional_property_name}${a.property_number} ${a.road_name}, ${a.city},  ${a.postcode},  ${a.country} `
    }
    catch(e) {
        return undefined
    }
}

export const get_num_bathrooms = (propertyObj) => { try { return propertyObj.bathrooms } catch(e) { return null } }

export function get_min_start_date(propertyObj) {
    if (!propertyObj || !('contracts' in propertyObj) || propertyObj.contracts.length === 0)
        return undefined
    return propertyObj.contracts.map(c => c.start_date).sort()[0]
}

export function convert_yyyy_mm_dd_to_readable_date(datestr) {
    const [year, month, day] = datestr.split('-')
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const readable_str = `${parseInt(day)} ${months[parseInt(month)]} ${year}`
    return readable_str
}

export function get_min_price_contract_idx(propertyObj) {
    if (!propertyObj || !('contracts' in propertyObj) || propertyObj.contracts.length === 0)
        return undefined
    const key = 'price_per_person_per_week'
    const contracts = propertyObj.contracts
    let min_val = 9999999
    let min_contract_idx = 999999
    contracts.forEach((contract, contract_idx) => {
        contract.prices.forEach(priceObj => {
            const price = parseInt(priceObj[key])
            if (price < min_val && price !== 0) {
                min_val = price
                min_contract_idx = contract_idx
            }               
        })
    })
    if (min_val === 9999999)
        return undefined
    return min_contract_idx
}

export const isPlural = num => Number(num) !== 1

export const pluralise_word_for_num = (singular_word, num) => `${singular_word}${isPlural(num) ? 's' : ''}`

export function get_num_rooms(propertyObj) {
    const p = propertyObj
    const num_room_details = 'room_details' in p ? p.room_details.length : 0
    let num_room_prices;
    if ('contracts' in p && p.contracts.length > 0 && 'prices' in p.contracts[0]) {
        num_room_prices = p.contracts[0].prices.length
    }
    return Math.max(num_room_details, num_room_prices)
}

export const isNumber = value => typeof value === 'number' && isFinite(value)

export const get_num_contracts = propertyObj => { try { return propertyObj.contracts.length } catch(e) { return null } }

export const get_contract_total_monthly_price = (propertyObj, contract_idx) => { 
    try {     
        const prices_per_week_array = propertyObj.contracts[contract_idx].prices.map(obj => Number(obj.price_per_person_per_week))
        return Math.round(Math.ceil((52 / 12) * prices_per_week_array.reduce((acc, val) => acc + val, 0)))
    } 
    catch(e) { 
        return undefined 
    } 
}

export const get_contract_total_deposit = (propertyObj, contract_idx) => {
    try {     
        const deposits_array = propertyObj.contracts[contract_idx].prices.map(obj => Number(obj.deposit_per_person))
        return Math.round(deposits_array.reduce((acc, val) => acc + val, 0))
    } 
    catch(e) { 
        return undefined 
    }     
}

export function get_min_total_amount(propertyObj, calculation_fn) {
    const num_contracts = get_num_contracts(propertyObj)
    let min_total_amount = 99999;
    for (let i=0; i<num_contracts; i++) {
        const contract_total = calculation_fn(propertyObj, i)
        if (isNumber(contract_total) && contract_total < min_total_amount) {
            min_total_amount = contract_total
        }
    }
    if (min_total_amount === 99999) {
        return undefined
    }
    return min_total_amount
}

export const get_min_total_monthly_price = propertyObj => get_min_total_amount(propertyObj, get_contract_total_monthly_price)

export const get_min_total_deposit = propertyObj => get_min_total_amount(propertyObj, get_contract_total_deposit)


export const update_mongodb = (property_id, update_key, update_val) => {
    //console.log('update_mongodb() :', property_id, update_key, update_val)
    const url = `${BASE_API_URL}/properties/${property_id}`
    const body = {
        update_key,
        update_val
    }
    console.log(`update_mongodb > property_id ${property_id} update_key ${update_key} update_val ${update_val}`)
    axios.patch(url, body)
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err.message))
}

export const DEBOUNCE_MS = 2000

export function debounce(fn, ms=300) { 
    console.log('inside debounce > ms', ms)
    let timer
    return () => { 
        console.log('reset timer')
        clearTimeout(timer)
        //console.log('timer', timer)
        timer = setTimeout(() => fn.apply(this, arguments), ms)
    }
}

// export function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };