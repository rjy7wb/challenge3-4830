function httpsCheck(){
    if (location.protocol != 'https:'){
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
    return;
}
function pushHome(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("txt").innerHTML = this.responseText;
            document.getElementById("title").innerHTML = "HOME";
        }
    };
    xhttp.open("GET","./txts/home.txt",true);
    xhttp.send();
}

function pushAbout(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("txt").innerHTML = this.responseText;
            document.getElementById("title").innerHTML = "ABOUT";
        }
    };
    xhttp.open("GET","./txts/about.txt",true);
    xhttp.send();
}

function pushContact(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("txt").innerHTML = this.responseText;
            document.getElementById("title").innerHTML = "CONTACT";
        }
    };
    xhttp.open("GET","./txts/contact.txt",true);
    xhttp.send();
}