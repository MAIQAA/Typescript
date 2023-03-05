//Question43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
//array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
//separate array. Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.

let gmagicians=["Merlin","David","Vincenzo"];

let make_great = () => 
{
for(var i=0;i<gmagicians.length;i++)
console.log(gmagicians[i]);
}
let new_gmagicians=gmagicians;

let show_magician=()=>
{ 
    for(var i=0;i<new_gmagicians.length;i++)
    console.log(new_gmagicians[i]);
    for(var i=0;i<new_gmagicians.length;i++)
    console.log(`Great ${new_gmagicians[i]}`);
}
 show_magician();