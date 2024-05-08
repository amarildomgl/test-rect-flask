import axios, { AxiosResponse } from "axios";

import { baseURL } from "../baseURL";

class HistoryDeliveryService {
  getAll = async (): Promise<AxiosResponse<any>> => {
    try {
      const response: AxiosResponse = await axios.get(`${baseURL}/delivery`);
      return response;
    } catch (error) {
      throw new Error("Erro ao obter histórico de entregas");
    }
  };

  getById = async (id: number): Promise<AxiosResponse<any>> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${baseURL}/delivery/${id}`
      );
      return response;
    } catch (error) {
      throw new Error("Erro ao obter histórico de entrega");
    }
  };

  create = async (
    packageId: number,
    userId: number,
    status: string
  ): Promise<AxiosResponse<any>> => {
    try {
      const response: AxiosResponse = await axios.post(
        `${baseURL}/delivery-histories`,
        { package_id: packageId, user_id: userId, status }
      );
      return response;
    } catch (error) {
      throw new Error("Erro ao criar histórico de entrega");
    }
  };
}

export default new HistoryDeliveryService();
