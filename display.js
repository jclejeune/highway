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
            "-": [false, false, false, false, false, false, true],
            "": [false, false, false, false, false, false, false],
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