// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 // Телефонная книга
 var phoneBook = {};

 /**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
//module.exports =
function test(command) {

    var arrayCommand = command.split(' ');
    var arrayPhoneBook = [];
    var commandName = arrayCommand.shift();
    var NAME = 0;

    if (commandName === 'ADD'){
        if(!phoneBook.hasOwnProperty(arrayCommand[NAME])) {
            phoneBook[arrayCommand.shift()] = arrayCommand.shift();
        }else{
            phoneBook[arrayCommand.shift()] += ',' + arrayCommand.shift();
        }
    } else if (commandName === 'REMOVE_PHONE'){
        var phoneToRemove = arrayCommand.shift();
        var names = Object.keys(phoneBook);
        var removed = false;

        for (var i = 0; i < names.length; i++) {
            var key = names[i];
            if(phoneBook[key].includes(phoneToRemove)){
                removed = true;
                phoneBook[key] = phoneBook[key].split(',').filter( function (element) {
                        return element !== phoneToRemove}).join(', ');
            }
            if(phoneBook[key].length == 0){
                delete phoneBook[key];

            }

        }
        return removed;

    } else if (commandName === 'SHOW'){
        var names = Object.keys(phoneBook);

        if(names) {
            for (var i = 0; i < names.length; i++) {
                var key = names[i];
                var value = phoneBook[key].split(',').join(', ');
                arrayPhoneBook.push(key + ': ' + value);
            }
            console.log(arrayPhoneBook.sort())
            return arrayPhoneBook.sort();
        }
        else return false;

    }
};



test('ADD Ivan 555-10-01,555-10-03');
test('ADD Ivan 555-10-02');
test('SHOW');
test('REMOVE_PHONE 555-10-03');


test('ADD Alex 555-20-01');
test('SHOW');
console.log(test('REMOVE_PHONE 555-20-01'));
test('SHOW');

console.log(test('REMOVE_PHONE 545-20-01'));
test('SHOW');

function testTest() {
    var book = { 'user': 'hf'};
    console.log(book);
    delete book[user];
    console.log(book);
}
