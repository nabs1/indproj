/*    Project:  Individual Project 
      Author: Nabta Hamid
      Date: February 28th, 2017
      Purpose:
*/ 
// array created
var products = ["Powder Foundation($38)", "Foundation ($40)", "Eyeshadow Palette($42)", "Cream Concealer ($21)", "Eyebrow Pencil ($16)"];
// created matching array of thr label elements

var labels = document.getElementsByTagName("label");
//function created to generate list from array

function processProducts() {
for (var i = 0; i < 4; i++) {
labels[i]. innerHTML=products[i];
}
}

if (window.addEventListener){
    window.addEventListener("load",processProducts,false);
} else if (window.attachEvent) {
    window.attachEvent("onload",processProducts);
}


function calcTotal()
{
  var itemTotal = 0
  var salesTaxRate = .06 
  var items = document.getElementsByTagName("input");
  
  for(var i=0; i<4; i++) {
   if(items[i].checked) {
       itemTotal += (items[i].value * 1);
            }
          }
          itemTotal *= 1+ salesTaxRate; // use of the compound operator here
          document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2);


      //add backward compatible event listener to Submit button
        var submitButton = document.getElementById ("sButton");
      
  
  submitButton.addEventListener("onclick", calcTotal)
  
  
  
  
        }
  
  
  
  
  
 
  
  
  
  


