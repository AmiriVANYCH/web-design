import http from "../http-common";

class QastionDataService {

  getQastion(id) {
    return http.get(`/getQuestions/${id}`);
  }
}

export default new QastionDataService();
