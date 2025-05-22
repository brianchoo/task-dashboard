export const saveUserSession = (id, name) => {
  try {
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("userId", id);
    return true;
  } catch (error) {
    console.error("saveUserSession: Error saving user session", error);
    return false;
  }
};

export const clearUserSession = () => {
  try {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userId");
    return true;
  } catch (error) {
    console.error("clearUserSession: Error clearing sessionStorage:", error);
    return false;
  }
};
