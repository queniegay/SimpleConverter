function usd() {
    let php = document.getElementById("currencyInput").value;
    const usd = 0.017;
    const ans = php * usd;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "USD";
}

function rub() {
    let php = document.getElementById("currencyInput").value;
    const rub = 1.06;
    const ans = php * rub;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "RUB";
}

function jyp() {
    let php = document.getElementById("currencyInput").value;
    const jyp = 2.53;
    const ans = php * jyp;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "JYP";
}