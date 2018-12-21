//Setinterval js code

var num = 3;
var countDown = setInterval(() => {
    num--;
    if (num > 0) {
        console.log("Timer: ", num);
    } else if (num === 0) {
        console.log("Ring! Ring! Ring!");
    } else {
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
    .then(function (data) {
        //do something
    })
    .catch(function (handleErrors) {
        //handle error
    })

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
};


//JQuery AJAX

$("#btn").click(function () {
    $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filter",
            dataType: 'json'
        })
        .done(addP)
        .fail(function () {
            alert("Something Went wrong");
        })
});

function addP(data) {
    $("p").text(data[0]);
}


//JQUERY Shorthand AJAX

$("#getBtn").click(function () {
    $.get("https://baconipsum.com/api/?type=meat-and-filter")
        .done(function (data) {
            console.log(data);
        })
        .fail(function () {
            console.log("error!");
        });
});

$("#postBtn").click(function () {
    var data = {
        name: "Johan",
        city: "Florence"
    };
    $.post("https://baconipsum.com/api/?type=meat-and-filter")
        .done(function (data) {
            console.log("hi!");
        })
        .fail(function () {
            console.log("Error!");
        });
});

$("#getJSONBtn").click(function () {
    $.getJSON("https://baconipsum.com/api/?type=meat-and-filter")
        .done(function () {
            console.log(data);
        })
        .fail(function () {
            console.log("Error");
        });
});

