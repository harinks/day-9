//a. Get all the countries from Asia continent /region using Filter function

//1. create an xhr object
var request=new XMLHttpRequest();
//step 2. Create a connection
request.open('GET','https://restcountries.com/v2/all',true);
//step 3. send a request
//push a api from client to server
request.send();
//step 4. once data sucessfully recieved from server
request.onload=function(){
    var data = JSON.parse(request.response)
    var res = data.filter((ele)=>ele.region==='Asia')
        console.log(res.map((ele)=>ele.name))
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function

//1. create an xhr object
var request=new XMLHttpRequest();
//step 2. Create a connection
request.open('GET','https://restcountries.com/v2/all',true);
//step 3. send a request
//push a api from client to server
request.send();
//step 4. once data sucessfully recieved from server
request.onload=function(){
    var data = JSON.parse(request.response)
    var res = data.filter((ele)=>ele.population<=200000)
        console.log(res.map((ele)=>ele.name))
}

//c.Print the following details name, capital, flag using forEach function

//1. create an xhr object
var request=new XMLHttpRequest();
//step 2. Create a connection
request.open('GET','https://restcountries.com/v2/all',true);
//step 3. send a request
//push a api from client to server
request.send();
//step 4. once data sucessfully recieved from server
request.onload=function(){
    var data=JSON.parse(this.response);
    data.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag);
    })
}

//d.Print the total population of countries using reduce function

//1. create an xhr object
var request=new XMLHttpRequest();
//step 2. Create a connection
request.open('GET','https://restcountries.com/v2/all',true);
//step 3. send a request
//push a api from client to server
request.send();
//step 4. once data sucessfully recieved from server
request.onload=function(){
    var data = JSON.parse(request.response)
    var res = data.reduce((acc,ele)=>acc+ele.population,0)
        console.log("Total population: "+res)
}

//e.Print the country which uses US Dollars as currency.

//1. create an xhr object
var request=new XMLHttpRequest();
//step 2. Create a connection
request.open('GET','https://restcountries.com/v2/all',true);
//step 3. send a request
//push a api from client to server
request.send();
//step 4. once data sucessfully recieved from server
request.onload=function(){
    var data = JSON.parse(request.response)
    for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code==='USD'){
            console.log(data[i].name)
        }
    }
}