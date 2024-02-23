const display10000 = new SevenSegmentsDisplay(
    score_10000_a,
    score_10000_b,
    score_10000_c,
    score_10000_d,
    score_10000_e,
    score_10000_f,
    score_10000_g
);

// Exemple d'utilisation
const display1000 = new SevenSegmentsDisplay(
    score_1000_a,
    score_1000_b,
    score_1000_c,
    score_1000_d,
    score_1000_e,
    score_1000_f,
    score_1000_g
);

// Exemple d'utilisation
const display100 = new SevenSegmentsDisplay(
    score_100_a,
    score_100_b,
    score_100_c,
    score_100_d,
    score_100_e,
    score_100_f,
    score_100_g
);

// Exemple d'utilisation
const display10 = new SevenSegmentsDisplay(
    score_10_a,
    score_10_b,
    score_10_c,
    score_10_d,
    score_10_e,
    score_10_f,
    score_10_g
);

// Fonction pour mettre à jour l'horloge
function updateClock() {
    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();
    var ss = time.getSeconds();

    // Formatte les heures et les minutes avec un zéro devant si nécessaire
    var hx="";
    var xh="";
    var mx="";
    var xm="";

    if(hh>=10){
        xh=(hh%10).toString();
        hx=((hh-xh)/10).toString();
    } else{
        hx="";
        xh=(hh%10).toString();
    }

    if(mm>=10){
        xm=(mm%10).toString();
        mx=((mm-xm)/10).toString();
    } else{
        mx="0";
        xm=(mm%10).toString();
    }

    // Affiche l'heure dans la console
    console.log(hx + "  " + xh + ":" + mx  +"  "+ xm);

    if (ss%2===0){
        time_separator.style.display ="block"
    }else{
        time_separator.style.display ="none"
    }

    // Affiche les chiffres individuels sur les afficheurs 7 segments
    display10000.displayCharacter(hx);
    display1000.displayCharacter(xh);
    display100.displayCharacter(mx);
    display10.displayCharacter(xm);
}

// Met à jour l'horloge toutes les secondes
setInterval(updateClock, 500);
