// index.html

const btn = document.querySelector("#button");
const sb = document.querySelector("#land");
btn.onclick = (event) => {
    event.preventDefault();
    chooseFlag(sb.value);
};

function chooseFlag(land) {
    if (land == "") {
        showFlag("Select flag you want to display");
    } else {
        showFlag(`<img src="img/${land}.png" alt="flag of ${land}">`);
    }
}

function showFlag(flag) {
    document.getElementById("flag").innerHTML = flag;
}