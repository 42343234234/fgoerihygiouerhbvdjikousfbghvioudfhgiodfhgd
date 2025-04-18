// Blokowanie F12, Ctrl+Shift+I, Ctrl+U
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85)) {
    e.preventDefault();
  }
});

// Po załadowaniu DOM podłączenie przycisku
document.addEventListener('DOMContentLoaded', () => {
  const goButton = document.querySelector('.go');

  if (goButton) {
    goButton.addEventListener('click', saveData);
  } else {
    console.error("Nie znaleziono przycisku .go");
  }
});

// Główna funkcja zapisująca dane
function saveData() {
  // Pobranie wartości z pól formularza
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const image = document.getElementById('image').value.trim();

  const birthDay = document.querySelectorAll('.date_input')[0].value.padStart(2, '0');
  const birthMonth = document.querySelectorAll('.date_input')[1].value.padStart(2, '0');
  const birthYear = document.querySelectorAll('.date_input')[2].value.trim();

  const nationality = document.getElementById('nationality').value.trim();
  const familyName = document.getElementById('familyName').value.trim();
  const fathersFamilyName = document.getElementById('fathersFamilyName').value.trim();
  const mothersFamilyName = document.getElementById('mothersFamilyName').value.trim();
  const birthPlace = document.getElementById('birthPlace').value.trim();
  const countryOfBirth = document.getElementById('countryOfBirth').value.trim();
  const adress1 = document.getElementById('adress1').value.trim();
  const adress2 = document.getElementById('adress2').value.trim();
  const city = document.getElementById('city').value.trim();

  // Sprawdzenie czy wszystkie wymagane pola są uzupełnione
  const requiredFields = [
    name, surname, birthDay, birthMonth, birthYear,
    nationality, familyName, fathersFamilyName, mothersFamilyName,
    birthPlace, countryOfBirth, adress1, adress2, city
  ];

  if (requiredFields.some(field => !field)) {
    alert("Uzupełnij wszystkie wymagane dane!");
    return;
  }

  // Walidacja daty
  if (
    birthDay < 1 || birthDay > 31 ||
    birthMonth < 1 || birthMonth > 12 ||
    birthYear.length !== 4 || isNaN(birthYear)
  ) {
    alert("Wprowadź prawidłową datę!");
    return;
  }

  // Obliczenie miesiąca do PESEL
  let peselMonth = parseInt(birthMonth);
  if (parseInt(birthYear) >= 2000) peselMonth += 20;
  peselMonth = peselMonth.toString().padStart(2, '0');

  // Losowa końcówka PESEL
  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  const pesel = birthYear.slice(2) + peselMonth + birthDay + randomDigits;

  // Przygotowanie danych do localStorage
  // Przygotowanie danych do localStorage
const generatedData = {
  name,
  surname,
  image,
  nationality,
  familyName,
  fathersFamilyName,
  mothersFamilyName,
  birthPlace,
  countryOfBirth,
  adress1,
  adress2,
  city,
  birthDate: `${birthDay}.${birthMonth}.${birthYear}`
};

// Zapis do localStorage
localStorage.setItem('pesel', pesel);
localStorage.setItem('generatedData', JSON.stringify(generatedData));
localStorage.setItem("birthDay", birthDay);
localStorage.setItem("birthMonth", birthMonth);
localStorage.setItem("birthYear", birthYear);
localStorage.setItem("nationality", nationality);
localStorage.setItem("birthPlace", birthPlace);
localStorage.setItem("countryOfBirth", countryOfBirth);

// Przejście do confirmation.html
window.location.href = 'id.html';

}
