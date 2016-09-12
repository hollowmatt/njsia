var Currency = require('./currency');
var canadianDollar = 0.91;
var currency = new Currency(canadianDollar);

console.log('50 Canadian dollars equals $' + currency.canadianToUS(50) + ' USD');
console.log('50 US dollars equals $' + currency.USToCanadian(50) + ' CAD');
