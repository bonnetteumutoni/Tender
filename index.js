let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where",12,56];
const result=(arr1[arr1.length-1]);
const resultOne=(arr2[arr2.length-1]);
console.log({result});
console.log({resultOne});

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let res=myPets.join(" ");
console.log({res});


var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());


let arr = ["boy", "man", "girl", "school", "girl", "woman"];
arr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(arr)

let arr5 = ["the","way","x",4]
let findingFood = arr5.find(arr5 => arr5 == "Food");
if (findingFood == "Food"){
   console.log(findingFood)
}
   else{
console.log("the search was not found")
   }

let word = "renniw"
const ans = word.split('').reverse().join('');
console.log(ans);

const fruits = ["Mango", "Banana", "Kiwi", "Watermelon", "Orange", "Grapes", "Thornmelon", "Peach", "Avocado",];
fruits.splice(5, 0, "Tomato");
console.log({ fruits });