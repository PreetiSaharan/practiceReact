import {sum} from "../sum";

//TESTS // test function - takes 2 args - 1 string(write description) & other callback function (write code to test)

test("Sum function should caculate the sum of two numbers", ()=>{
    const result = sum(3,4);

    //assertion -imp
    expect(result).toBe(7);
});