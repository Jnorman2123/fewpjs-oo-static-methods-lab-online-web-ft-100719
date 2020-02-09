class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    const exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(' ')
    const firstWord = words.shift()
    const capitalized = firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
    const titleizedWords = words.map(word => {
      if (!exemptWords.find(ele => ele === word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word
      }
    })
    titleizedWords.unshift(capitalized)
    return titleizedWords.join(' ')
  }
}