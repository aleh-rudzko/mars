import { expect, should } from "chai";
import { suite, test, slow, timeout } from "mocha-typescript";

@suite("Type service")
class TypeSpec {

    public static before() {
        should();
    }

    @test("hello world")
    public getTypes() {
        expect(1).to.be.equal(1);
    }

}