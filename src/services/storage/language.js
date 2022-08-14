export const saveLanguage = (language) => {
  localStorage.setItem("ISHRO_LANGUAGE", language);
};

export const getLanguage = () => {
  var language = localStorage.getItem("ISHRO_LANGUAGE");
  return language ? language : "en";
};
