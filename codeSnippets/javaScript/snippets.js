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

//JQuery AJAX
$("#btn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filter",
        dataType: 'json'
        })
        .done(addP)
        .fail(function() {
            alert("Something Went wrong");
        })
});

function addP(data) {
    $("p").text(data[0]);
}

//JQUERY Shorthand AJAX
$("#getBtn").click(function() {
    $.get("https://baconipsum.com/api/?type=meat-and-filter")
    .done(function(data) {
        console.log(data);
    })
    .fail(function() {
        console.log("error!");
    });
});

$("#postBtn").click(function() {
    var data = {name:"Johan", city: "Florence"};
    $.post("https://baconipsum.com/api/?type=meat-and-filter")
    .done(function(data) {
        console.log("hi!");
    })
    .fail(function() {
        console.log("Error!");
    });
});

$("#getJSONBtn").click(function() {
    $.getJSON("https://baconipsum.com/api/?type=meat-and-filter")
    .done(function() {
        console.log(data);
    })
    .fail(function() {
        console.log("Error");
    }); 
});

//Array functions

//forEach
function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

doubleValues([5,1,2,3,10]);

function halfValues(arr) {
    var newArr = [];
    arr.forEach(function(val) {
        newArr.push(val / 2);
    })
    return newArr;
}

halfValues([2,4,6]);


function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val) {
        if(val % 2 === 0){
        newArr.push(val);
        }
    });
    return newArr;
}
onlyEvenValues([[1,2,3], [5,1,2,3,10]]);

function showFirstAndLast(arr) {
var newArr = [];
arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length-1])
});
return newArr;
}
showFirstAndLast(['Johan', 'Piet', 'Sarel']);

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter) {
        if(vowels.indexOf(letter.toLowerCase()) !== -1) {
            if(letter in obj) {
                obj[letter]++
            }
            else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

//Map
function doubleValues(arr) {
    return arr.map(function (val) {
return val*2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function(val,index) {
        return val*index;
    });
}
valTimesIndex([1,2,3]);

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}

//Filter
var arr = [1,2,3];
arr.filter(function(value, index, array) {
    return value > 2;
});

var friends = [
    {name: 'Johan'},
    {name: 'Raynardt'},
    {name: 'Willie'},
    {name: 'Zilla'}
];
friends.filter(function(value, index, array) {
    return value.name.length > 5;
});

function onlyFourLetterNames(arr) {
    return arr.filter(function(value) {
        return value.length === 4;
    });
}

onlyFourLetterNames(['Rusty', 'Matt', 'Moxie', 'Colt']);

function divisibleByThree(arr) {
    return arr.filter(function(value) {
        return value % 3 === 0;
    });
}

divisibleByThree([1,2,3,4,5,6,7,8,9]);


filterByValue([
    {first: 'Elie',last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
    ], 'isCatOwner');

find([1,2,3,4,5], 3);

findInObj([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
    ], 'isCatOwner',true);

removeVowels('Elie');

doubleOddNumbers([1,2,3,4,5]);