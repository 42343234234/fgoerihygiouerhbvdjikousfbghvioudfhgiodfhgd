import { database, ref, get, set, child } from './firebase-config.js';

async function login() {
  const passwordValue = document.getElementById('password').value.trim();

  if (!passwordValue) {
    alert('Wprowadź hasło.');
    return;
  }

  const dbRef = ref(database);
  const passwordRef = child(dbRef, `passwords/${passwordValue}`);
  const snapshot = await get(passwordRef);

  if (!snapshot.exists()) {
    alert('Nieprawidłowe hasło.');
    return;
  }

  const data = snapshot.val();

  // Zaloguj bez HWID
  await set(passwordRef, {
    loggedIn: true,
    hasGenerated: data.hasGenerated || false
  });

  alert('Zalogowano pomyślnie!');

  // Przekieruj lub odblokuj generator
  if (data.hasGenerated) {
    window.location.href = 'home.html';
  } else {
    document.getElementById('loginOverlay').style.display = 'none';
  }
}

// PRZYCISK
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('loginBtn').addEventListener('click', login);
});
