//Question31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames1=["Ammad"];
usernames1.pop();

if(usernames1.length==0)
console.log("No Users Detected! We need to Find somer Users.");
else
console.log(`Hello, ${usernames1} Yhank you for Logging In again`);