// chechking whether contactUs component is loaded or not when rendering it on JS DOm

import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page load & button loading Test Cases", ()=>{

    test ("Should load Contact Us component", ()=>{
        render (<Contact/>);

        const heading = screen.getByRole("heading"); // it will find all the headings in contactus compo and will return here

        expect(heading).toBeInTheDocument();
    });

    test ("Should load button inside my Contact Us component", ()=>{
        render (<Contact/>);

        const button = screen.getByText("Submit"); //screen.getByRole("button"); // it will find all the headings in contactus compo and will return here

        expect(button).toBeInTheDocument();
    });

});

describe("Contact Us page Input loading Test Cases", ()=>{
    it ("Should load input name inside my Contact Us component", ()=>{ // it works same as test
        render (<Contact/>);

        const inputName = screen.getByPlaceholderText("Name"); //screen.getByRole("button"); // it will find all the headings in contactus compo and will return here

        expect(inputName).toBeInTheDocument();
    });

    it ("Should load 2 input boxes inside my Contact Us component", ()=>{
        render (<Contact/>);

        //Querying
        const inputBoxes = screen.getAllByRole("textbox"); //no role by name input - but textbox (when mutliple inputs - use getAllByRole)

        console.log(inputBoxes); //expect(inputBoxes).toBeInTheDocument(); (toBe.. can't be used to store an array)

        //assertion
        expect(inputBoxes.length).toBe(3);
    });
})