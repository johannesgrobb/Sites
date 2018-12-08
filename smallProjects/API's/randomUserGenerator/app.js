var url = 'https://randomuser.me/api';
var btn = document.querySelector("#btn");
var fullNameDisplay = document.querySelector("#fullname");
var imgDisplay = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var email = document.querySelector("#email");
var displayProfile = document.querySelector("#profile");

btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(displayErrors);
});

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res) {
    return res.json().then(function (data) {
        return data.results[0];
    })
}

function updateProfile(data) {
    var fullname = data.name.first + " " + data.name.last;
    fullNameDisplay.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
    displayProfile.style.display = "inline-block";
}

function displayErrors(err) {
    console.log("INSIDE displayErrors!");
    console.log(err);
}