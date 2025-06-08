
    const formularz = document.getElementById("formularzBMI");
    const wynik = document.getElementById("wynik");

    formularz.addEventListener("submit", function (e) {
      e.preventDefault();                                   //nie odświeża strony przez co wszytsko się ładuje

      const plec = document.getElementById("plec").value;
      const wiek = parseInt(document.getElementById("wiek").value);
      const waga = parseFloat(document.getElementById("waga").value);
      const wzrost = parseFloat(document.getElementById("wzrost").value);

        //błędy

      if (!plec || wiek <= 0 || waga <= 0 || wzrost <= 0) {
        wynik.innerHTML = "Uzupełnij poprawnie wszystkie pola.";
        wynik.style.display = "block";
        return;
      }

      const bmi = (waga / ((wzrost / 100) ** 2)).toFixed(1);
      let interpretacja = "";

      //wyniki
      if (bmi < 18.5) interpretacja = "niedowaga";
      else if (bmi < 25) interpretacja = "waga prawidłowa";
      else if (bmi < 30) interpretacja = "nadwaga";
      else interpretacja = "otyłość";

      // systen uwag
      let uwaga = "";
      if (plec === "kobieta") {
        if (bmi >= 24 && bmi < 27) {
          uwaga = "Dla kobiet w tym zakresie może być już zalecana kontrola tkanki tłuszczowej.";
        }


      } else if (plec === "mezczyzna") {
        if (bmi < 20 && wiek < 30) {
          uwaga = "U młodych mężczyzn niska masa ciała może wpływać na gospodarkę hormonalną.";
        }
      }


      if (wiek > 65 && bmi >= 25 && bmi <= 29.9) {
        uwaga += " U osób starszych lekkie nadwyżki wagi mogą być akceptowalne.";
      }
      // sklejanie wyniku benc
      wynik.innerHTML = `
        <strong>BMI:</strong> ${bmi} — ${interpretacja}<br />
        ${uwaga ? "<em>" + uwaga + "</em>" : ""} 
      `;
      wynik.style.display = "block";


    });
