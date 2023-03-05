//Question18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has 
//  been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show 
//  that its order has changed

//Storing Array
const World=["Grand Canyon","DisneyLand","Mohenjo Daro","Kaaba","Edge Of The World"];

//Print Array
console.log("Original Order : ",World);

//Alphabetical Order
console.log("Alphabetical Order : ",[...World].slice().sort());

//Real Array
console.log("Original Order : ",World);

//Reverse Array
console.log("Reverse Order : ",[...World].sort().reverse());

//Real Array
console.log("Original Order : ",World);

//Reverse Order
console.log("Reverse Order : ",World.reverse());

//Re-Reverse Order
console.log("Re-Reverse Order : ",World.reverse());

//Sort Array
console.log("Sorting : ",World.sort());

//Resort Array
console.log("Re-Sorting : ",World.reverse());