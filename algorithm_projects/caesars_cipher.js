function rot13(str) {
    // LBH QVQ VG!
    let letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    let testreg = /[A-Z]/;
    let arr = str.split(" ");
    return arr
        .map(word => {
            return word
                .split("")
                .map(letter => {
                    return testreg.test(letter) == true ?
                        letters[letters.indexOf(letter) + 13] :
                        letter;
                })
                .join("")
                .toUpperCase();
        })
        .join(" ");
}

// Change the inputs below to test
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));