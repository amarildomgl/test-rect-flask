import axios from 'axios';

class AuthService {
  register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/user', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      return { success: true, response: response.data};

    } catch (error) {
      return { success: false, message: 'Erro na PAI' };
    }
  };
}

export default new AuthService();
