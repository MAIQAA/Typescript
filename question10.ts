//Question10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence 
//describing what the program does.

//Program1
var str="My NAME is AMMAD";  //Variable is declared and in inverted commas value is initialized
function MyFunction2(str) {  //custom function is created
    var Title = str.toLowerCase().split(" ");   //New variable is delared in which previous variable's value 
                                                //is converted to lowercase and text is splitted after space is detected
    for (var i = 0; i < Title.length; i++) { 
        var ch = Title[i].charAt(0); //The variable stores the first letter of each splitted word to UpperCase
        Title[i] = Title[i].replace(ch, ch.toUpperCase());  //This will replace first lowercase letter of each splitted word to Uppercase
    } 
    return Title.join(" "); 
} 
console.log("TitleCase : ",MyFunction2(str));   //custom Function is called and Message is printed in TitleCase

//Program2
var Name="\t MetaVerse \n"; //variable is declared and value is initialized
console.log("With Spaces: ",Name);  //simple message stored in variable is print
console.log("Without Spaces : ",Name.trim());   //Using trim method extra spaces will be trimmed and message will be printed
