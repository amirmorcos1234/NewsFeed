import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainScreen } from "../scenes";

const AppContainer=()=>{
return (
    <NavigationContainer>
                <MainScreen/>
        </NavigationContainer>
)
}

export default AppContainer