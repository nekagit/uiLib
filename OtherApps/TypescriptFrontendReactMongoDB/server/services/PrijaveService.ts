import http from "../../http-common";
import { Prijava } from "../../interfaces/Interfaces";

export default function PrijaveService() {
  const getAll =(): Promise<Prijava> => {
    return http.get("/prijave");
  }

  const get =(id: string): Promise<Prijava> => {
    return http.get(`/prijave/${id}`);
  }

  const create =(data: Prijava): Promise<Prijava> => {
    console.log(data, http.options.toString, http.getUri(), http.head.toString)
    return http.post("/prijave", data);
  }

  const update =(id: string, data: Prijava): Promise<Prijava> => {
    return http.put(`/prijave/${id}`, data);
  }

  const deleteIt = (id: string): Promise<Prijava> => {
    return http.delete(`/prijave/${id}`);
  }

  const deleteAll =(): Promise<Prijava> => {
    return http.delete(`/prijave`);
  }

  const findByTitle =(title: string): Promise<Prijava> => {
    return http.get(`/prijave?title=${title}`);
  }
  return {getAll, get, create,update,deleteIt,deleteAll,findByTitle}
}
