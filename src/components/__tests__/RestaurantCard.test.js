import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"

it("should render restaurantCard component with props data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name =screen.getByText(/Belgian/);
    expect(name).toBeInTheDocument();
});

/*
it("Should render RestaurandCard with promoted Label", ()=>{
 // Test Higher Order Component - with Promoted Label here
 
});
*/