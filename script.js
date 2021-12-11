console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));

async function getData(){
    const response = await fetch("http://localhost:5000/sections")
    const f = await response.json();
    console.log(response);
    console.log(f)
}

getData();

const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);


window.onload = () => {

    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    }
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', acceptFn);

    console.log(consentPopup)
    if (shouldShowPopup(storageType)) {
        console.log("inside")
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    }

};