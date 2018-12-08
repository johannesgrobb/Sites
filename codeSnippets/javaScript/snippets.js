//Setinterval js code

var num = 3;
var countDown = setInterval(()=>{
    num--;
    if (num > 0) {
        console.log("Timer: ", num);
    }
    else if (num === 0){
        console.log("Ring! Ring! Ring!");
    } 
    else {
        clearInterval(countDown);
    }
    return num;
}, 1000);

//XHR 

var btn = document.querySelector("button");
var displayPrice = document.querySelector("#price");
var currency = "USD"

btn.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {

        if (XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText);
            var price = data.bpi[currency].rate;
            displayPrice.innerText = price + " " + currency;
        }
    }

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    XHR.open("GET", url);
    XHR.send();
});

//Fetch API 

futch(url, {
    method: 'POST',
    body: JSON.stringify({
        name: 'blue',
        login: 'bluecat',
    })
})
.then(function(data) {
    //do something
})
.catch(function(handleErrors) {
    //handle error
})

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
};