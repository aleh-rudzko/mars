import { Type } from "../../models/Type";

let typeCounter = 0;

export default function TypeFactory(): Type {
    return {
        id: typeCounter++,
        name: '',
        description: ''
    };
}
