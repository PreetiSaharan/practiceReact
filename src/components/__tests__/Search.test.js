import { render } from "@testing-library/react"
import Body from "../Body";

//writing mock fetch function - making it similar to how browser gives us
//fetch function returns a promise - & that promise returns a json- this json has a function which again returns a promise- so resolve that 
// MOCK_DATA is what fetch will return
//MOCK_DATA here is the data we get from the api
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the Body Component", ()=>{

    render(<Body/>);
})