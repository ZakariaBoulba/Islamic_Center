// window.onload = function () {
//    document.getElementById("pre").style.display = "none"
// }

window.onload = function () {
    var spinner = document.getElementById("pre");
    setTimeout(function() {
        spinner.style.display = "none";
        document.body.style.overflow = "auto;"
    }, 3000);
}
