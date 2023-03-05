//Question20
//Think of something you could store in a array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a 
//list containing these items.
let mount=["Mount Everest","Mount Kilimanjaro","Mount Fuji"];
let river=["Nile River","Yangtze River","Amazon River"];
let country=[" United States","China","Brazil"];
let city=["New York City","Beijing","Rio de Janeiro"];
let language=[" English", "Urdu", "Spanish"];
let List=mount.concat(river,country,city,language);
for(var i=0;i<List.length;i++)
console.log(Array(List[i]));