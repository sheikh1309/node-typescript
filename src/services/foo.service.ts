import {injectable} from "inversify";

@injectable()
export class FooService {

    get(): string {
        return `id is ${2}`
    }
}