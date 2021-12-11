async function getData() {
  try {
    // put your own url(in server it doesn't work)
    const response = await fetch("http://localhost:5000/sectionss");
    const result = await response.json();

    let resultArray = Object.keys(result);

    // dom manipulation
    const list_container = document.getElementById("more-options");

    for (let i of resultArray) {
      let li = document.createElement("li");

      let input = document.createElement("input");
      input.setAttribute("id", `${i}`);
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
    saveToStorage(storageType);
    consentPopup.classList.add("hidden");
  };

  // close icon
  const denyBtnFn = (event) => {
    consentPopup.classList.add("hidden");
  };

  // close icon
  const saveBtnFn = (event) => {
    consentPopup.classList.add("hidden");
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
    console.log(getData() ? "yes" : "no");
    setTimeout(() => {
      consentPopup.classList.remove("hidden");
    }, 1000);
  }
};
