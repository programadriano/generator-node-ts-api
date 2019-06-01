import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as compression from "compression";

import newsRouter from "./router/newsRouter";

class StartUp {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middler();
    this.routes();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET,OPTIONS,PUT,POST,DELETE",
      origin: "*"
    };

    this.app.use(cors(options));
  }

  //middlers
  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
  }
  
  //routes
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.1" });
    });


    //To call your route
    this.app.use("/", newsRouter);

  }
}

export default new StartUp();
