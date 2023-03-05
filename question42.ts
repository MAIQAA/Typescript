//Question42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
//that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.

let g_magicians=["Vincenzo","Merlin","David"];
let great_magicians = () =>
{
    for(var i=0;i<g_magicians.length;i++)
    console.log(`Great ${g_magicians[i]}`);
}

let show_gmagicians=()=>
{
    (great_magicians());
}

show_gmagicians();