//Question29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let fruitarr=["Mangoe","Banana","Tangerine"];
for(var i=0;i<fruitarr.length;i++) {

if(fruitarr[i].toLowerCase()==="mangoe") 
console.log("Mangoe Really is your Favourite Fruit !");

if(fruitarr[i].toLowerCase()==="grape") 
console.log("Grape Really is your Favourite Fruit !");

if(fruitarr[i].toLowerCase()==="banana") 
console.log("Banana Really is your Favourite Fruit !");

if(fruitarr[i].toLowerCase()==="tangerine") 
console.log("Tangerine Really is your Favourite Fruit !");

if(fruitarr[i].toLowerCase()==="watermelon") 
console.log("Watermelon Really is your Favourite Fruit !");
}
