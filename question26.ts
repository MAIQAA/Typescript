//Question26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting 
//the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

//1st version
let alien_color2="Green";
if(alien_color2.toLowerCase()=="green")
console.log(`Player Just Earned 5 Points For Shooting the Alien`);
else
console.log(`Player Just Earned 10 Points For Shooting the Alien`);

//2nd version
alien_color2="Yellow";
if(alien_color2.toLowerCase()=="green")
console.log(`Player Just Earned 5 Points For Shooting the Alien`);
else
console.log(`Player Just Earned 10 Points For Shooting the Alien`);