//Question16
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages,one for each person in your list.

var invited=["Abdul Kareem","Anwar","Nazeera"];
var moreinvited=["Azam","Nawaz","Ammad"];
var Message="We found a bigger Dinner Table so we're Deciding to Invite More Guests. I'm looking forward to seeing you ";
var Message2="You are cordially invited to dinner at my place. Please join us for a night of good food, great conversation, and wonderful company. I'm looking forward to seeing you";
let newlist=invited.concat(moreinvited);
console.log(newlist);

//informing guests
for(var i=0;i<newlist.length;i++)
console.log("Dear ",newlist[i],Message);

//add to start of Array
newlist.unshift("Zayyan");

//add to mid of Array
let mid;
if((newlist.length) %2==0)
{ mid=newlist.length/2}
else
{mid=Math.floor(newlist.length/2)}
newlist.splice(mid,0,"Ibaa");

//ad to end of Array
newlist.push("Ali");
console.log(newlist);

//Informing new guestList
for(var i=0;i<newlist.length;i++)
console.log("Dear ",newlist[i],Message2);