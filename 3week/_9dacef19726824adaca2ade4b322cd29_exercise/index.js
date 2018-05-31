/**
 * @param {String} date
 * @returns {Object}
 */
//module.exports =
//var time = date('2017-05-16 13:45')

function mayParseDate(number, unit){
    var units = ['years', 'months', 'days', 'hours', 'minutes'];
    try {
        if (number > 0 && (units.includes(unit))) {
            return true;
        } else {
            throw new TypeError();
        }
    }catch (e){
        console.log('Данные некоррекны');
        return false;
    }
}


function add(number, unit) {
    if(mayParseDate(number, unit)) {


        console.log(number, unit);
    }
}


function subtract(number, unit) {

}

function test(date) {
    var castedDate = new Date(date);
    console.log(castedDate);


};


var time = '2017-05-16 13:45';
test(time);

mayParseDate(-5,'years');
