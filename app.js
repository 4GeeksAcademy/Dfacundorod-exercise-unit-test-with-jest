const sum = (a,b)=>{
    return a+b;
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    let valueInPund = (valueInYen/oneEuroIs.JPY)*oneEuroIs.GBP;
    return valueInPund;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar/oneEuroIs.USD)*oneEuroIs.JPY;
    return valueInYen;
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

module.exports = {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};
//fromDollarToYen(dollar){yen}
//fromEuroToDolar(euros){dollar}
//fromYenToPound(dollar){pund}