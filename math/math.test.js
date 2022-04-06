const {add, subtract, multiply, divide, squareRoot, maximum}=require("./math")

describe("Test basic math operations",()=>{
    test("Add both arguments and return correct sum",()=>{
        expect(add(10,11)).toBe(21);
    });

    test("Subtract both arguments and return correct sum",()=>{
        expect(subtract(42,23)).toBe(19);
    });

    test("Multiply both arguments and return correct sum",()=>{
        expect(multiply(4,5)).toBe(20);
    });

    test("Divide both arguments and return correct sum",()=>{
        expect(divide(48,6)).toBe(8);
    });
})

describe("Test advanced math operations",()=>{
    test("Return correct square root of number",()=>{
        expect(squareRoot(16)).toBe(4);
    });

    test("Return maximum number in a given set",()=>{
        expect(maximum(29,-33,62)).toBe(62);
    });
})