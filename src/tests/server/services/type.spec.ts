import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { getTypeModel } from "../../../server/models/type";
import getTypeService from "../../../server/services/type";

@suite("Type service")
class TypeSpec {

    public static async before() {
        should();
    }

    @test("hello world")
    public async getTypes() {
        await getTypeModel().create({name: "test", description: "test"});

        const types = await getTypeService().all();

        expect(types.length).to.be.equal(1);
    }

}
