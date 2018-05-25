function Chrono() {
    let seconde = 59;
    let minute = 24;
    let currentTime;
    this.start = function () {
        
        currentTime = setInterval(function () { 
            document.getElementById("affichesec").innerHTML = seconde--;
            if (seconde == -1) {
                seconde = 59;
                document.getElementById("affichemin").innerHTML = minute--;
            } }, 1000);
    }
    this.pause = function () {
        clearInterval(currentTime);
    }
    this.stop = function () {
        clearInterval(currentTime);
        seconde = 59;
    }
}

function push() {
    var text = document.getElementById('texte').value;

    console.log(text);

    document.getElementById('list').innerHTML += "<div>" +text + "</div>";
}

var chrono = new Chrono();

