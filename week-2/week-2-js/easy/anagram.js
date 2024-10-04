/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let hehe = str1.split('').join('')
  let hehe2 = str2.split('').reverse().join('')

  if(hehe == hehe2){
    console.log('its ana gram')
  }else{
    console.log('you failed budddy ')
  }

}

isAnagram('aman','nama')

// module.exports = isAnagram;
