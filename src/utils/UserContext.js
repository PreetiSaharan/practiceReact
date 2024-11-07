import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User" //giing default value to user
});

export default UserContext;
