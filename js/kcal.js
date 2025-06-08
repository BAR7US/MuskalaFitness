const formularz = document.getElementById("KalkulatorKcal");
const wynik = document.getElementById("wynik");

formularz.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const plec = document.getElementById("plec").value;
    const wiek = parseFloat(document.getElementById("wiek").value);
    const waga = parseFloat(document.getElementById("waga").value);
    const wzrost = parseFloat(document.getElementById("wzrost").value);
    const akt = document.getElementById("akt").value;
    const cel = document.getElementById("cel").value;

    let aktN;
    let celN;

    // Aktywność
    if (akt === "1") {
        aktN = 1.2;
    } else if (akt === "2") {
        aktN = 1.3;
    } else if (akt === "3") {
        aktN = 1.375;
    } else if (akt === "4") {
        aktN = 1.725;
    } else if (akt === "5") {
        aktN = 1.9;
    }

    // Cel
    if (cel === "1") {
        celN = -330;
    } else if (cel === "2") {
        celN = 0;
    } else if (cel === "3") {
        celN = 370;
    }

    let kalorie;

    if (plec === "kobieta") {
        kalorie = (10 * waga) + (6.25 * wzrost) - (5 * wiek) - 161;
    } else {
        kalorie = (10 * waga) + (6.25 * wzrost) - (5 * wiek) + 5;
    }

    const kalorie2 = kalorie * aktN + celN;

    wynik.style.display = "block";
    wynik.innerHTML = `Twoje zapotrzebowanie kaloryczne: <strong>${Math.round(kalorie2)} kcal</strong>`;
});
