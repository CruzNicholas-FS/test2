const {uppercase, lowercase}=require("./string")

describe("Testing string module", ()=>{
    test("Should uppercase a string input", ()=>{
        expect(uppercase("bob")).toBe("BOB");
    });

    test("Should lowercase a string input",()=>{
        expect(lowercase("FULL SaiL")).toBe("full sail");
    });
});