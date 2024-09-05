import { v4 } from "uuid";

class Especification{
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id=v4();
        }
    }
}
export default Especification;