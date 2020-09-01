// lib contains the core functionality of our project
const endpoint = `https://api.exchangeratesapi.io/latest`;
//cach object, Where we are going to store the rates that we already asked
const ratesByBase = {};

// default base parameter set to USD
export async function fetchRates(base = 'USD') {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    console.log(rates);
    return rates;
}

export async function convert(amount, from, to) {
    //check if we even have the rates to convert from that currency
    if (!ratesByBase[from]) {
        console.log(`Oh no we don't have ${from} to convert to ${to}. Let's get it`);
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time! if CAD, store them to 'ratesByBase'.CAD
        ratesByBase[from] = rates;
    }
    //CACH HIT 
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
}