//Question19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
//indicating the number of people you are inviting to dinner.

var invited=["Abdul Kareem","Anwar","Nazeera"];
var moreinvited=["Azam","Nawaz","Ammad"];
var Message="We found a bigger Dinner Table so we're Deciding to Invite More Guests. I'm looking forward to seeing you ";

let Finalist=invited.concat(moreinvited);

for(var i=0;i<Finalist.length;i++)
console.log("Dear ",Finalist[i],Message);

Finalist.unshift("Zayyan");

let middle;
if((Finalist.length) %2==0)
{ middle=Finalist.length/2}
else
{middle=Math.floor(Finalist.length/2)}
Finalist.splice(middle,0,"Ibaa");

Finalist.push("Ali");

let counting=0;
for(var i=0;i<Finalist.length;i++)
{
    counting++;
}
console.log(Finalist);
console.log("Guests Invited are : ",counting);
