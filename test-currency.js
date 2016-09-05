var currency = require('./currency');

console.log('50 Canadian dollars equals $' + currency.canadianToUS(50) + ' USD');
console.log('50 US dollars equals $' + currency.USToCanadian(50) + ' CAD');
