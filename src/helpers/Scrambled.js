import React from 'react'

export default function Scramble(args) {
  // Function that randomly change the order of a character of the word
const wordRandomized = (element) =>{
 const p=element.length
   console.log("nn",p)
   for (let i=p-1; i>0; i--){ 
    let g= Math.floor(Math.random()*(i+1))
    let tmp = element[i];
    element[i]=element[g];
    element[g]=tmp
return element
}}
// function that shuffled the word who has at list 4 characters
  const shuffleWord = (word) => {
    if (word.length < 4) return word;
    const first = word.slice(0, 1);
    const middle = word.slice(1, -1);
    const last = word.slice(-1);
    const splited = middle.split("")
    const randomized= wordRandomized(splited)
    console.log(randomized)
    const joining= randomized.join("")
    
     
      
     
    return first + joining + last;
  };
 // function that process the sentence by spliting it into an array of word map over it then joining at the end
  const processSentence = (sentence) =>
  sentence
    .split(/("[^"]+"|[^"\s]+)/g)
    .map(shuffleWord)
    .join("");
  
return processSentence(args);
   
   
}
