//alert("hello from data-processing");

function titleCase(str) {
    str = str.toLowerCase().split("");
    for(var i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join("");
}
const queryString = window.location.search;
console.log(queryString);

if(queryString.length > 0){
    const urlParams = new URLSearchParams(queryString);

    let myData = "";

    urlParams.forEach(function(value, key) {
        
        if(key == "Cart"){//cart
            alert("Cart Item: " + value);
        }else{//shipping label
            //swaps underscore for space
            key = key.split("_").join(" ");

            if(key == "First Name" || key == "Last Name" || key == "Address" || key == "City"){
                value == titleCase(value)
            }
        
            myData += `<p>${key}: ${value}</p>`;
        }
        
        //console.log(key, value);
    });

    myData += '<p><a href="index.html">CLEAR</a></p>'

    document.getElementById("output").innerHTML = myData;
}
