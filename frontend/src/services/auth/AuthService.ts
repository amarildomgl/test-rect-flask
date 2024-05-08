
class AuthService {
  logout = () => {
    localStorage.removeItem("userData");
  
  };

  isLogged = (): boolean => {
    const isLogged = localStorage.getItem("userData");
    return !!isLogged;
  };
}

export default new AuthService();
