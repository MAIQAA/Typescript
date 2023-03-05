//Question15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

var invited=["Imtiaz","Anwar","Nazeera"];
var Message="You are cordially invited to dinner at my place. Please join us for a night of good food, great conversation, and wonderful company. I'm looking forward to seeing you";
for(var i=0;i<invited.length;i++)
console.log("Dear ",invited[i],"! ",Message);

var newinvite='Abdul Kareem';
console.log("Dear ",newinvite,"! ",Message);

console.log(invited[0]," won't be able to attend the Dinner");
var notjoined=invited[0];

var replacedperson=invited.indexOf(notjoined);
invited.splice(replacedperson,1,newinvite);
console.log(invited);

for(var i=0;i<invited.length;i++)
console.log("Dear ",invited[i],"! ",Message);
