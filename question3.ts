//Question3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

var Name="Ammad";
console.log("UpperCase : ",Name.toUpperCase());
console.log("LoweCase : ",Name.toLowerCase());

var str="My NAME is AMMAD";
function myfunction(str){ 
    var Title = str.toLowerCase().split(" "); 
    for (var i = 0; i < Title.length; i++) { 
        var ch = Title[i].charAt(0); 
        Title[i] = Title[i].replace(ch, ch.toUpperCase()); 
    } 
    return Title.join(" "); 
} 
console.log("TitleCase : ",myfunction(str));
