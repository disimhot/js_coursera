// Телефонная книга
var phoneBook = {

};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
//module.exports =
function test(command) {

    var arrayCommand = command.split(' ');
    var commandName = arrayCommand.shift();
    var name = 0;
    var phone = 1;

    if (commandName === 'ADD'){
        if(!phoneBook.hasOwnProperty(arrayCommand[name])) {
            phoneBook[arrayCommand.shift()] = arrayCommand.shift();
        }else{
            phoneBook[arrayCommand.shift()] += ',' + arrayCommand.shift();
        }
    } else if (commandName === 'REMOVE_PHONE'){




    } else if (commandName === 'SHOW'){

        

    } else return false;


    console.log(str);
};



test('ADD Lena 545-10-02')
test('ADD Ivan 555-10-01,555-10-03')
test('ADD Ivan 555-10-02')
test('ADD Ken 535-10-02')
test('SHOW')
//test('REMOVE_PHONE 555-20-01')