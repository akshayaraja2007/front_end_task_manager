var login = document.getElementById("login");
var luserid = document.getElementById("luserid");
var lpassword = document.getElementById("lpassword");
var tasks = document.getElementById("tasks");
var taskdiv = document.getElementById("taskdiv");
var taskh = document.getElementById("taskh");
var inp = document.getElementById("inp");
var tas = document.getElementById("tas");



function dispon() {
    login.style.display = "block";
}
function dispof() {
    var a = luserid.value;
    var b = lpassword.value;
    if (a == "akshay" && b == "2007") {
        window.location.href = "loged.html"
        login.style.display = "none";
        luserid.value = ""
        lpassword.value = ""
    }
}
function taskadding(event) {
    var vald = document.createElement("tr")



    vald.innerHTML = `<td><h1 id="valds">${tasks.value}</h1></td><td><button onclick="del(event)" id="comp">completed</button></td>`




    tas.append(vald)
    tasks.value = ""
}
function del(event) {
    event.target.parentNode.parentNode.remove()
}
function tasb() {
    inp.style.display = "block"
}