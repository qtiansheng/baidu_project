
function change() {
    var len = window.document.getElementById("text-id").offsetWidth + "px";
    window.document.getElementById("text-id").style.color = "blue";
    window.document.getElementById("line-id").style.width = len;
}

function outbutton() {
    window.document.getElementById("text-id").style.color = "black";
    window.document.getElementById("line-id").style.width = "0px";
}
