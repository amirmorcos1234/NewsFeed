import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainStack from "./Stacks/AuthenticatedStack";

const AppContainer=()=>{
return (
    <NavigationContainer>
               <MainStack/>
        </NavigationContainer>
)
}

export default AppContainer