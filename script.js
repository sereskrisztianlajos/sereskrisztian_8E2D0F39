let edzesek = [
    { nev: "Kardió", kaloria: 300, intenzitas: "kozepes" },
    { nev: "Erősítés", kaloria: 450, intenzitas: "kozepes" },
    { nev: "HIIT", kaloria: 650, intenzitas: "magas" },
    { nev: "Jóga", kaloria: 200, intenzitas: "alacsony" },
    { nev: "CrossFit", kaloria: 700, intenzitas: "magas" },
    { nev: "Pilates", kaloria: 250, intenzitas: "alacsony" },
    { nev: "Futás", kaloria: 500, intenzitas: "kozepes" },
    { nev: "Ugrókötelezés", kaloria: 550, intenzitas: "magas" }
];

//Változás

// EDZÉSEK MEGJELENÍTÉSE
function edzesekMegjelenitese() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < edzesek.length; i++) {
        let li = document.createElement("li");
        li.innerText = edzesek[i].nev +
            " – " + edzesek[i].kaloria + " kcal (" +
            edzesek[i].intenzitas + ")";
        lista.appendChild(li);
    }

    legerosebbEdzes();
}

// MAXIMUM KIVÁLASZTÁS
function legerosebbEdzes() {
    let max = edzesek[0];

    for (let i = 1; i < edzesek.length; i++) {
        if (edzesek[i].kaloria > max.kaloria) {
            max = edzesek[i];
        }
    }

    document.getElementById("legerosebb").innerText =
        "Legintenzívebb edzés: " + max.nev;
}

// MET értékek
function metErtek(tipus) {
    if (tipus === "kardio") return 8;
    if (tipus === "erosites") return 6;
    if (tipus === "hiit") return 10;
    if (tipus === "jooga") return 3;
    if (tipus === "crossfit") return 9;
    return 5;
}

//KALÓRIA SZÁMÍTÁS
function kaloriaSzamol(suly, ido, met, intenzitas, nem) {
    let intenzitasSzorzó = 1;

    if (intenzitas === "kozepes") intenzitasSzorzó = 1.2;
    if (intenzitas === "magas") intenzitasSzorzó = 1.4;

    let nemSzorzó = nem === "ferfi" ? 1.1 : 1;

    return Math.round((met * 3.5 * suly / 200) * ido * intenzitasSzorzó * nemSzorzó);
}

// ELÁGAZÁS + LOGIKA
function kaloriaSzamitas() {
    let suly = Number(document.getElementById("suly").value);
    let ido = Number(document.getElementById("ido").value);
    let tipus = document.getElementById("tipus").value;
    let intenzitas = document.getElementById("intenzitas").value;
    let nem = document.getElementById("nem").value;

    if (suly <= 0 || ido <= 0) {
        document.getElementById("eredmeny").innerText =
            "Adj meg érvényes adatokat!";
        return;
    }

    let met = metErtek(tipus);
    let kaloria = kaloriaSzamol(suly, ido, met, intenzitas, nem);

    let szoveg = "Elégetett kalória: " + kaloria + " kcal";

    if (kaloria > 600) {
        szoveg += " 🔥 Nagyon kemény edzés!";
    }

    document.getElementById("eredmeny").innerText = szoveg;
}