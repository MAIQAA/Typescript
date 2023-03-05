//Question14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

var invited=["Abdul Kareem","Anwar","Nazeera"];
var Message="You are cordially invited to dinner at my place. Please join us for a night of good food, great conversation, and wonderful company. I'm looking forward to seeing you";
for(var i=0;i<invited.length;i++)
console.log("Dear ",invited[i],"! ",Message);