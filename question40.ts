//Question40
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these 
//two pieces of information. Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

let make_album = (name:string, title:string)=>
({
    artistname: name,
    albumtitle:title
});
console.log(make_album("Alan Walker","Faded"));
console.log(make_album("Adele","21"));
console.log(make_album("Michael Jackson","Thriller"));


let make_album2=(name:string,title:string,tracks:number)=>
({
    artistname:name,
    albumtitile:title,
    track:tracks
});
console.log(make_album2("Michael Jackson","Thrillern",5));
console.log(make_album2("Taylor Swift","1989",5));