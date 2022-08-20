// A Few way to create an alphabetical string or array:

// Here we map the 26 character codes of the alphabet and then convert
// // them into an array of strings
// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));

// And below, we split a string of letters into an array
    // const secondAlpha = 'abcdefghijklmnopqrstuvwxyz'.split("")

    //Below is my solution to this challenge
    function pangrams(s) {
    // Write your code here
    let capitalS = s.toUpperCase();
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    for (let i=0;i<alpha.length;i++){
        let count = 0;
        if(capitalS.includes(alpha[i])) count++
        if (count <1) return ("not pangram")
    }
    return ("pangram")
}