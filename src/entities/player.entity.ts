import { Sign } from '../types/sign.type';
export class Player {
    name: string;
    sign: Sign;
    constructor(name: string, sign: Sign) {
        this.name = name;
        this.sign = sign;
    }

}