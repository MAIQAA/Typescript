//Question44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time

let make_sandwich= (...items)=>
{
    console.log(`Your Sandwitch Contains : ${[...items]}`);
}

make_sandwich("Egg");
make_sandwich("Salad","Shami","Cheese");
make_sandwich("Chicken","lettuce","Cheese","Mustard");