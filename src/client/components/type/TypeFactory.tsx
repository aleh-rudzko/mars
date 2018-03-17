import { Type } from "../../models/Type";

let typeCounter = 0;

export default function TypeFactory(): Type {
    return {
        id: typeCounter++,
        name: "type-" + typeCounter,
        description: "this is type that have number: " + typeCounter
    };
}
