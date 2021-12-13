// test disable all cookies and enable only first party cookies

// set cookies by fn
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};samesite=strict;secure`;
}

setCookie("age", 24, 5);
setCookie("country", "USA", 100);

// suppose play btn set third party cookie but when you load page it disabled
const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
  document.cookie = "play=cookies";
});

const store = document.cookie;

// block all cookies except first party cookies

for (let i of store.split(";")) {
  const data = i.trim().split("=");
  if (data[0] === "country" || data[0] === "tech-cookie" || data[0] === "age") {
    setCookie(data[0], data[1], 100);
  } else {
    setCookie(data[0], data[1], -1);
  }
}

// end enabling and disabling cookies

async function getData() {
  try {
    // put your own url(in server it doesn't work)
    const response = await fetch("http://localhost:5000/sections");
    const result = await response.json();

    let resultArray = Object.keys(result);

    // dom manipulation
    const list_container = document.getElementById("more-options");

    for (let i of resultArray) {
      let li = document.createElement("li");

      let input = document.createElement("input");
      input.setAttribute("id", `${i}`);
      input.setAttribute("name", `${i}`);
      input.setAttribute("value", `${i}`);
      input.setAttribute("type", "checkbox");
      let label = document.createElement("label");
      label.setAttribute("for", `${i}`);
      label.innerHTML = `${i}`;
      li.appendChild(input);
      li.appendChild(label);
      list_container.appendChild(li);
    }
    // end dom manipulation

    return true;
  } catch (error) {
    console.log(error.message);
  }
}

const cookieStorage = {
  getItem: (item) => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[item];
  },
  setItem: (item, value) => {
    document.cookie = `${item}=${value};`;
  },
};

const storageType = cookieStorage;
const consentPropertyName = "tech-cookie";
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  // accept btn
  const acceptFn = (event) => {
    saveToStorage(setCookie("tech-cookies", "advertising", 100));
    consentPopup.classList.add("hidden");
  };

  // close icon
  const denyBtnFn = (event) => {
    consentPopup.classList.add("hidden");
  };

  // close icon
  const saveBtnFn = (event) => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    console.log(formData);
    // consentPopup.classList.add("hidden");
  };

  // close icon
  const closeBtnFn = (event) => {
    consentPopup.classList.add("hidden");
  };

  const consentPopup = document.getElementById("consent-popup");
  const acceptBtn = document.getElementById("accept");
  const denyBtn = document.getElementById("deny");
  const saveBtn = document.getElementById("save");
  const closeBtn = document.getElementById("close");

  acceptBtn.addEventListener("click", acceptFn);
  denyBtn.addEventListener("click", denyBtnFn);
  saveBtn.addEventListener("click", saveBtnFn);
  closeBtn.addEventListener("click", closeBtnFn);

  if (shouldShowPopup(storageType) && getData()) {
    setTimeout(() => {
      consentPopup.classList.remove("hidden");
    }, 1000);
  }
};
