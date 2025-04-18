document.addEventListener("DOMContentLoaded", () => {
  const confirmElement = document.querySelector(".confirm");
  const time = document.getElementById("time");
  const updateText = document.querySelector(".bottom_update_value");
  const unfold = document.querySelector(".info_holder");
  const update = document.querySelector(".update");

  const optionsDate = { year: 'numeric', month: 'numeric', day: '2-digit' };
  const optionsTime = { hour: '2-digit', minute: 'numeric', second: 'numeric' };

  function clearClassList() {
    confirmElement.classList.remove("page_open", "page_1_open", "page_2_open", "page_3_open");
  }

  window.closePage = clearClassList;

  window.openPage = function (page) {
    clearClassList();
    confirmElement.classList.add("page_open", `page_${page}_open`);
  };

  if (!localStorage.getItem("update")) {
    localStorage.setItem("update", "24.12.2024");
  }

  updateText.innerHTML = localStorage.getItem("update");

  update.addEventListener('click', () => {
    const newDate = new Date().toLocaleDateString("pl-PL", optionsDate);
    localStorage.setItem("update", newDate);
    updateText.innerHTML = newDate;
    window.scrollTo(0, 0);
  });

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function setClock() {
    while (true) {
      const now = new Date();
      time.innerHTML = "Czas: " + now.toLocaleTimeString("pl-PL", optionsTime) + " " + now.toLocaleDateString("pl-PL", optionsDate);
      await delay(1000);
    }
  }

  setClock();

  unfold.addEventListener('click', () => {
    unfold.classList.toggle("unfolded");
  });

  function setData(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }

  let params = new URLSearchParams(window.location.search);
  let data = {};

  if (params.has('name')) {
    for (let [key, value] of params.entries()) {
      data[key] = value;
    }
  } else if (localStorage.getItem("generatedData")) {
    const stored = JSON.parse(localStorage.getItem("generatedData"));
    data = {
      name: stored.name,
      surname: stored.surname,
      nationality: stored.nationality,
      birthPlace: stored.birthPlace,
      countryOfBirth: stored.countryOfBirth,
      adress1: stored.adress1,
      adress2: stored.adress2,
      city: stored.city,
      familyName: stored.familyName,
      fathersFamilyName: stored.fathersFamilyName,
      mothersFamilyName: stored.mothersFamilyName,
      image: stored.image
    };
    data.sex = localStorage.getItem("selectedSex") || "Nieokreślona";
    data.birthday = `${localStorage.getItem("birthDay")}.${localStorage.getItem("birthMonth")}.${localStorage.getItem("birthYear")}`;
  }

  const userImage = data.image || localStorage.getItem('userImage');
  if (userImage) {
    document.querySelector(".id_own_image").style.backgroundImage = `url(${userImage})`;
    localStorage.setItem('userImage', userImage);
  }

  if (Object.keys(data).length) {
    const [dayRaw, monthRaw, yearRaw] = data['birthday'].split(".");
    const day = parseInt(dayRaw);
    const month = parseInt(monthRaw);
    const year = parseInt(yearRaw);

    const birthdayDate = new Date(year, month - 1, day);
    const birthdayFormatted = birthdayDate.toLocaleDateString("pl-PL", optionsDate);

    setData("name", data['name']?.toUpperCase());
    setData("surname", data['surname']?.toUpperCase());
    setData("nationality", data['nationality']?.toUpperCase());
    setData("birthday", birthdayFormatted);
    setData("familyName", data['familyName']);
    setData("sex", data['sex']);
    setData("fathersFamilyName", data['fathersFamilyName']);
    setData("mothersFamilyName", data['mothersFamilyName']);
    setData("birthPlace", data['birthPlace']);
    setData("countryOfBirth", data['countryOfBirth']);
    setData("adress", `ul. ${data['adress1']}<br>${data['adress2']} ${data['city']}`);

    if (!localStorage.getItem("homeDate")) {
      const homeDate = new Date(getRandom(2012, 2019), getRandom(0, 11), getRandom(1, 25));
      localStorage.setItem("homeDate", homeDate.toLocaleDateString("pl-PL", optionsDate));
    }

    document.querySelector(".home_date").innerHTML = localStorage.getItem("homeDate");

    let peselMonth = year >= 2000 ? month + 20 : month;
    const later = data['sex'].toLowerCase() === "mężczyzna" ? "0295" : "0382";
    const pesel = `${year.toString().slice(2)}${peselMonth.toString().padStart(2, "0")}${day.toString().padStart(2, "0")}${later}7`;
    setData("pesel", pesel);
    localStorage.setItem("pesel", pesel);
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  window.sendTo = function (url) {
    const savedParams = localStorage.getItem('lastParams');
    location.href = url + ".html" + (savedParams ? `?${savedParams}` : window.location.search);
  };

  const currentParams = window.location.search.substring(1);
  if (currentParams) {
    localStorage.setItem('lastParams', currentParams);
  }
});
