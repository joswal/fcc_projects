function palindrome(str) {
    // Good luck!
    let filtered = str
        .trim() //trims the string to remove whitespaces by the sides
        .toLowerCase() //converts trimmed string to lower case
        .match(/[a-z0-9]/gi); //use regex to select an array of alphabets and letters only from the string
    let laststr = filtered.join(""); //join the elements of the array to form a word

    let reversed = filtered.reverse().join(""); //reverse the filtered array and then join to form a string

    return reversed == laststr; //compare the two strings and return true or false
}

console.log(palindrome("race CAR"));