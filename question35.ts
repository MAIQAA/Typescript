//Question35
//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!

let animalarr=["Cat","Dog","Whale"];
for(var i=0;i<animalarr.length;i++)
{console.log(animalarr[i]);}

i=0;
while(i<animalarr.length)
{if(animalarr[i].toLowerCase()=="cat")
console.log(animalarr[i]+` is an animal of independent nature`);
if(animalarr[i].toLowerCase()=="dog")
console.log(animalarr[i]+` is a bravest guard`);
if(animalarr[i].toLowerCase()=="whale")
console.log(animalarr[i]+` is a great singer`);
i++;
}

console.log(`These animals several key characteristics, including the Fur or hair , Three middle bone ears and Endothermy`);
console.log(`I would really love to have a Furry Cat`);