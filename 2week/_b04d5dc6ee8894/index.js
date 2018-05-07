/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var arr = tweet.split(' ');
    var result = [];
    arr.forEach(filterWithHashtags);

    function filterWithHashtags(word, i){
         if(word.indexOf('#',0) !== -1){
            result.push(word.substr(1));
         }
    }
    return result;
};
