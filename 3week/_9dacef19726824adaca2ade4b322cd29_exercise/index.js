/**
 * @param {String} date
 * @returns {Object}
 */
//module.exports =
//var time = date('2017-05-16 13:45')

function parseDate(number, unit){
    var units = ['years', 'months', 'days', 'hours', 'minutes'];
        if (number > 0 && (units.includes(unit))) {
            return number, unit;
        } else {
    try{
            throw new TypeError();
    }catch (e){
        console.log('Данные некоррекны');
    }
        }
}


function add(number, unit) {
    parseDate(number, unit);
    console.log(number, unit);
}


function subtract(number, unit) {

}

function test(date) {
    var castedDate = new Date(date);

    console.log(castedDate)
};


var time = '2017-05-16 13:45';
test(time);

add(2,'iuhyku');