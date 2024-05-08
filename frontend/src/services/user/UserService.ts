import axios, { AxiosResponse } from "axios";

import { baseURL } from "../baseURL";

class UserService {
  register = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; response?: any; message?: string }> => {
    try {
      const response: AxiosResponse = await axios.post(
        `${baseURL}/user`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === 200) {
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        return { success: true, response: response.data };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { success: false, message: "Erro na API" };
    }
  };

  updateUser = async (
    userId: string,
    userData: any
  ): Promise<{ success: boolean; response?: any; message?: string }> => {
    try {
      const response: AxiosResponse = await axios.patch(
        `${baseURL}/user/${userId}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === 200) {
        return { success: true, response: response.data };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { success: false, message: "Erro na API" };
    }
  };

  getUserById = async (
    userId: string
  ): Promise<{ success: boolean; response?: any; message?: string }> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${baseURL}/user/${userId}`
      );

      if (response.data.status === 200) {
        return { success: true, response: response.data };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { success: false, message: "Erro na API" };
    }
  };

  login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; response?: any; message?: string }> => {
    try {
      const response: AxiosResponse = await axios.post(
        `${baseURL}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === 200) {
        localStorage.setItem("userData", JSON.stringify(response.data.data));

        return { success: true, response: response.data };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { success: false, message: "Erro na API" };
    }
  };

  logout = () => {
    localStorage.removeItem("userData");
  };

  isLogged = (): boolean => {
    const isLogged = localStorage.getItem("userData");
    return !!isLogged;
  };
  
}

export default new UserService();
