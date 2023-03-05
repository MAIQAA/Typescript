//Question23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and 
//your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru');

let answer;
 let Age=20;
 let Fname="Ammad";
 let Lname="Din";
 let University="SZABIST";
 let Hobby="No";
 let Degree="BSSE";

console.log("Is age==18 ? I Predict False");
if(Age==18)
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is age>=18 ? I Predict True");
if(Age>=18)
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is Fname.length=Lname.length ? I Predict False");
if(Fname.length==Lname.length)
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is Fname=='Ammad' ? I Predict True");
if(Fname=='Ammad')
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is Degree=='BSCS' ? I Predict False");
if(Degree=="BSCS")
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is University='SZABIST' ? I Predict True");
if(University=="SZABIST")
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is Hobby=true ? I Predict False");
if(Hobby=="Yes")
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Does University name contains A ? I Predict True");
let finding=University.includes("A");
if(finding)
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is 22-Age=0 I Predict False");
if(22-Age==0)
{answer=true;}
else 
{answer=false;}
console.log(answer);

console.log("Is Fname.length>=5 I Predict True");
if(Fname.length>=5)
{answer=true;}
else 
{answer=false;}
console.log(answer);