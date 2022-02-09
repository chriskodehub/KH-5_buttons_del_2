// page2.html

const fsend = document.querySelector("#send-data");
const fname = document.querySelector("#name");
const fnumber = document.querySelector("#fnumber");
const fbirthday = document.querySelector("#birthday");
const fmood = document.querySelector("#mood");
fsend.onclick = (event) => {
    event.preventDefault();
    showData();
};

function showData (){
    document.getElementById("show-name").innerHTML = fname.value;
    document.getElementById("show-number").innerHTML = fnumber.value;
    document.getElementById("show-birthday").innerHTML = fbirthday.value;
    document.getElementById("show-mood").innerHTML = fmood.value;
    document.getElementById("ikke-flower").innerHTML = `<img src="img/flower.png" alt="flower" class="flower">`;
}