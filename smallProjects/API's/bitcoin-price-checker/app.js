var btn = document.querySelector("button");
var displayPrice = document.querySelector("#price");
var currency = "USD"
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(async function (request) {
            try {
                const data = await request.json();
                var price = data.bpi[currency].rate;
                displayPrice.innerText = price + " " + currency;
            } catch (error) {
                console.log(error);
            }
        });
})

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}