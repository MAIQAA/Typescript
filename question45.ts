//Question45
//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with required information and 2 other name-value pairs, such as color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

let cars = (manufacturer:string ,model:string,color:string,feature:boolean) =>
{const car={
    manufacturer_name: manufacturer,
    model_name: model,
    color:color,
    optional_feature:feature
};
  return car;
}
console.log(cars("Honda","Hondacivic","White",false));


//-----------
//--- OR ----
//-----------


let cars2 = (...keyword) =>
{const car={
    manufacturer_name: keyword,
    model_name: keyword,
    color:keyword,
    optional_feature:keyword
};
console.log(`Your Car Features : ${[...keyword]}`);
}

cars2("Honda","Honda Civic","White","2020",true);