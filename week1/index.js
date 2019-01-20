console.log('hello worlds');
var temp = "57579595985";
var count = (temp.match(/7/g) || []).length;
console.log(count);
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
console.log(occurrences(670840800, 0,)); 


function findOccurances(value) {
   // var value = 63683366;
    var value_str = value.toString();
    if (value_str.length > 9 ) {
        var value_arr = value_str.split('');

        var counter = {};

        for(var index = 0; index < value_arr.length; index++) {
        var element = value_arr[index];

        if( !(element in counter) ) {
            counter[element] = 1;
        }
        else {
            counter[element] += 1;
        }
        }
        return counter;
    } else {
        console.log('not up to 9 digit');
        
    }
    

}
// console.log(counter);
console.log(findOccurances(2556545945));



