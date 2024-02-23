class SevenSegmentsDisplay {
    constructor(a, b, c, d, e, f, g) {
        this.segments = {a, b, c, d, e, f, g};
        this.displayMap = {
            "0": [true, true, true, true, true, true, false],
            "1": [false, true, true, false, false, false, false],
            "2": [true, true, false, true, true, false, true],
            "3": [true, true, true, true, false, false, true],
            "4": [false, true, true, false, false, true, true],
            "5": [true, false, true, true, false, true, true],
            "6": [true, false, true, true, true, true, true],
            "7": [true, true, true, false, false, false, false],
            "8": [true, true, true, true, true, true, true],
            "9": [true, true, true, true, false, true, true],
            // Ajoutez d'autres caractères si nécessaire
        };
    }

    // Méthode pour afficher un chiffre ou un caractère sur l'afficheur
    displayCharacter(char) {
        const segmentsOn = this.displayMap[char] || [];
        for (let i = 0; i < 7; i++) {
            this.segments[Object.keys(this.segments)[i]].style.display = segmentsOn[i] ? "block" : "none";
        }
    }
}

// Exemple d'utilisation
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

// Exemple d'utilisation
const display1 = new SevenSegmentsDisplay(
    score_1_a,
    score_1_b,
    score_1_c,
    score_1_d,
    score_1_e,
    score_1_f,
    score_1_g
);

// Afficher le chiffre 5
display10000.displayCharacter("1");
display1000.displayCharacter("2");
display100.displayCharacter("3");
display10.displayCharacter("4");
display1.displayCharacter("5");