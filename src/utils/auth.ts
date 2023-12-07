const TokenKey = 'vue_admin_template_token';

export const getToken = () => {
  //   return Cookies.get(TokenKey)
  return localStorage.getItem(TokenKey);
};

export const setToken = (token: string) => {
  //   return Cookies.set(TokenKey, token);
  localStorage.setItem(TokenKey, token);
};

export const removeToken = () => {
  //   return Cookies.remove(TokenKey);
  localStorage.removeItem(TokenKey);
};
