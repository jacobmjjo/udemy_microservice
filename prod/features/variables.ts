











































const json = '{"x": 10, "y":20}';
const coordinates: {x:number; y: number} = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i ++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
