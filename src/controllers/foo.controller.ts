import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import {FooService} from "../services/foo.service";

@controller("/foo")
export class FooController implements interfaces.Controller {
    constructor( @inject("FooService") private fooService: FooService ) {}

    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction): string {
        return this.fooService.get();
    }
}