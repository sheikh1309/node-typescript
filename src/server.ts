import express from 'express';
import * as bodyParser from 'body-parser';
import "reflect-metadata";
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import "./controllers/foo.controller";
import {FooService} from "./services/foo.service";

let container = new Container();
container.bind<FooService>('FooService').to(FooService);
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);