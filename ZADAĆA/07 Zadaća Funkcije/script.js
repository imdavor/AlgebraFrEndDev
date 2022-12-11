/**
 * 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
 * 2. Vratite tu riječ iz funkcije i spremite u varijablu.
 * 3. Ispišite varijablu u konzoli. */

var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function longestString(arr) {
    var longestResult = "";
    for (var i = 0; i < arr.length; i++) {
        var curentWord = arr[i];
        if (curentWord.length > longestResult.length) {
            longestResult = arr[i];
        }
    }
    return longestResult;
}
console.log("Solution 2: " + longestString(words) + " is longest word in array.");
