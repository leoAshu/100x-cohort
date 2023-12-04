/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  } 
  
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  map = {}
  for (let i=0; i<str1.length; i++) {
    if (str1[i] in map) {
      map[str1[i]] += 1
    } else {
      map[str1[i]] = 1
    }

    if (str2[i] in map) {
      map[str2[i]] -= 1
    } else {
      map[str2[i]] = -1
    }
  }

  for (const [_, value] of Object.entries(map)) {
    if (value !== 0) {
      return false
    }
  }
  return true
}

module.exports = isAnagram;
