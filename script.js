 
 
 let country = [
     {con:"USA",price:76.56},
     {con:"Germany",price:82.50},
     {con:"France",price:82.50},
     {con:"NetherLand",price:42.53},
     {con:"Bhutan",price:1.00},
     {con:"Canada",price:60.15},
     {con:"Australia",price:55.50},
     {con:"Russai",price:0.99},

     
     

 ]


 let countryName = document.getElementById("country");
 let Btn  = document.getElementsByTagName("button")[0];
 let Result = document.getElementsByClassName("result")[0];
 let amount = document.getElementById("amt")


console.log(countryName.value)



 Btn.addEventListener("click",()=>{

    let x = country.filter((ele)=>{
          
          return ele.con == countryName.value
          
    })
     
    let price = x[0].price;
    console.log(price)
    

     Result.value =  "Rs" + " " + Math.round(amount.value * price)


     amount.value = " "


     
      
 })

 
 
 

 
  
 
 
 
 
 
 
 