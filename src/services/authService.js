// USER TOKEN
export const saveToken = (token) => {
  localStorage.setItem("ishro_token", token);
};

export const getToken = () => {
  var token = localStorage.getItem("ishro_token");
  return token ? token : "";
};
export const removeToken = () => {
  localStorage.removeItem("ishro_token");
};

export const saveSwitch = (swiched) => {
  localStorage.setItem("ishro_switch", swiched);
};
export const getSwitch = (swiched) => {
  localStorage.setItem("ishro_switch", swiched);
};
export const removeSwitch = () => {
  localStorage.removeItem("ishro_switch");
};

// USER DATA
export const saveUserData = (data) => {
  localStorage.setItem("ishro_user_data", JSON.stringify(data));
};
export const getUserData = () => {
  return localStorage.getItem("ishro_user_data");
};
export const saveUserCurrency = (currency) => {
  localStorage.setItem("ishro_user_currency", JSON.stringify(currency));
};
export const getUserCurrency = () => {
  return localStorage.getItem("ishro_user_currency")
    ? JSON.parse(localStorage.getItem("ishro_user_currency"))
    : null;
};
export const removeUserData = () => {
  localStorage.removeItem("ishro_token");
};

// USER CARTS
export const addUserLocalCarts = (data) => {
  localStorage.setItem("ishro_user_carts_v3", JSON.stringify(data));
};
export const getUserLocalCarts = () => {
  return localStorage.getItem("ishro_user_carts_v3");
};
export const clearUserLocalCarts = () => {
  localStorage.removeItem("ishro_user_carts_v3");
};

export const destroy = () => {
  localStorage.removeItem("ishro_token");
  localStorage.removeItem("ishro_user_data");
  localStorage.removeItem("ishro_register_token");
  localStorage.removeItem("ishro_register_mobile");
  localStorage.removeItem("ishro_user_carts_v3");
  localStorage.removeItem("ishro_switch");
};

export const saveRegisterToken = (token) => {
  localStorage.setItem("ishro_register_token", token);
};
export const getRegisterToken = () => {
  var token = localStorage.getItem("ishro_register_token");
  return token ? token : "";
};

export const saveRegisterMobile = (token) => {
  localStorage.setItem("ishro_register_mobile", token);
};

export const getRegisterMobile = () => {
  var token = localStorage.getItem("ishro_register_mobile");
  return token ? token : "";
};

export const saveLanguage = (language) => {
  localStorage.setItem("ishro_language", language);
};

export const getLanguage = () => {
  var language = localStorage.getItem("ishro_language");
  return language ? language : "";
};
