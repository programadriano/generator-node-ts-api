import * as HttpStatus from "http-status";
import Helper from "../infra/helper";


class ValuesController {

  async get(req, res) {
    try {
      let response: string[] = ["value1", "value2"];
      Helper.sendResponse(res, HttpStatus.OK, response);
    } catch (error) {
      console.error(error);
    }

  }


  async getById(req, res) {

    try {
      const _id = req.params.id;
      let response = `your id: ${_id}`;
      Helper.sendResponse(res, HttpStatus.OK, response);

    } catch (error) {
      console.error(error);
    }

  }

  async create(req, res) {
    try {
      let vm = req.body;
    } catch (error) {
      console.error(error);
    }

  }

  async update(req, res) {
    try {
      const _id = req.params.id;
      let vm = req.body;
    } catch (error) {
      console.error(error);
    }

  }

  async delete(req, res) {
    try {
      const _id = req.params.id;
      let response = `your id: ${_id}`;
      Helper.sendResponse(res, HttpStatus.OK, response);
      
    } catch (error) {
      console.error(error);
    }

  }
}

export default new ValuesController();
