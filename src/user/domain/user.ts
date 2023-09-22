import { v4 as uuidv4 } from 'uuid';

export class User {
    constructor(
        readonly id:number,
        readonly name:string,
        readonly last_name: string,
        readonly email:string,
        readonly password:string,
        readonly status:boolean
    ){}
}
