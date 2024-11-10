import { render, screen, fireEvent } from "@testing-library/react";
import { Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


//whether header loaded with login button or not
// whether cart has view items or not

it ("Should load Header Component with a Login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    //const loginButton = screen.getByRole("button"); // better way // works when one button
    //const loginButton = screen.getByText("Login"); // NOT a good way
    const loginButton = screen.getByRole("button", {name: "Login"}); // when multiple buttons but want to check a specific button
    expect(loginButton).toBeInTheDocument();

});

it ("Should load Header Component with a Cart", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/); /// regex (/ /) if passed doesn't need to pass the exact name / when multiple buttons but want to check a specific button
    expect(cartItems).toBeInTheDocument();

});

it ("Should change login button to logout on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"}); 
    fireEvent.click (loginButton); // fire the click event
    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();

});

