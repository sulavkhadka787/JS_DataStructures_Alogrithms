//==========STACK============
//last-in-first-out==============

//functions
//push-->for placing data onto a stack
//pop-->removing a top element of a stack
//peek-->for displaying top element of a stack
//length-->how many elements are on a stack

//Check if the word is a palindrome

let letters=[]; //this is our stack

let word="racecar";

let revWord="";

//put the letters of the word into the stack
for(let i=0;i<word.length;i++){
    letters.push(word[i]);
    //console.log(letters);
}

//pop off the stack in reverse order
for(let i=0;i<word.length;i++){
    revWord +=letters.pop();
    //console.log('revWord=>',revWord);
}
console.log(revWord);
console.log(word);
if(revWord === word){
    console.log('It is a Palindrome');
}


