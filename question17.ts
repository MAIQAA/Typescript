//Question17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you 
//pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
//invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure 
//you actually have an empty list at the end of your program.

let newlist=["Zayyan","Abdul Kareem","Anwar","Ibaa","Nazeera","Azam","Nawaz","Ammad","Ali"];
var Message="Sorry! We won't be able to invite you to dinner. Let's meet another Time.";
var Message2="Your are still invited to the Dinner. Looking Forward to Seeing you."
console.log("Sorry! The dining table won't arrive in Time. So you can Invite Only Two People.");

//removing extra people
for(var i=newlist.length;i>2;i--)
console.log("Dear ",newlist.pop(),"! ",Message);

//inviting two people
for(var i=0;i<newlist.length;i++)
console.log("Dear ",newlist[i],"! ",Message2);

//Emptying list
do{
    newlist.pop();
}
while(newlist.length!=0);
console.log(newlist,newlist.length);