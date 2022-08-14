export const saveUser = (User) => {
  User = JSON.stringify({ ...User, isLoggedIn: true });
  localStorage.setItem("ISHRO_USER", User);
};

export const getUser = () => {
  var User = localStorage.getItem("ISHRO_USER");
  return User ? JSON.parse(User) : null;
};

export const clearUser = () => {
  localStorage.removeItem("ISHRO_USER");
  localStorage.removeItem("ishro_token");
  localStorage.removeItem("ishro_user_data");
  localStorage.removeItem("ishro_register_token");
  localStorage.removeItem("ishro_register_mobile");
  localStorage.removeItem("ishro_user_carts_v3");
  localStorage.removeItem("ishro_switch");
};
