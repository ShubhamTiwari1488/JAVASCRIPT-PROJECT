let count=0;

function myFunction() {
    count= count+1;

    document.getElementById("show-increment").innerHTML = count;
}

function save() {
    document.getElementById("history").textContent += count + " - ";

    count = 0;

    document.getElementById("show-increment").innerText = count;
}