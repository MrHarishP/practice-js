function findword(sentences){
    let n= sentences.length
    let max_word="0"
    // let word = []
    for (const sentence of sentences){
         const word = sentence.split (' ');
         console.log("---->",word)
        max_word = Math.max(max_word, word.length)
    }
    return max_word
}

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
const result = findword(sentences)
console.log(result)