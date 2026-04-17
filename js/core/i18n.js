const translations = {
  en: { login: "Login", email: "Email", password: "Password" },
  am: { login: "ግባ", email: "ኢሜይል", password: "የይለፍ ቃል" },
  om: { login: "Seeni", email: "Imeelii", password: "Jecha icciitii" }
};

export const setLang = (lang) => {
  localStorage.setItem("lang", lang);
  apply(lang);
};

export const apply = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerText = translations[lang][key] || key;
  });
};

export const initLang = () => {
  apply(localStorage.getItem("lang") || "en");
};