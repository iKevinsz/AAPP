import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import Cardapio from "../pages/Cardpaio"

export default function Routes(){
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator
        >
            <Stack.Screen
                name="Cardapio"
                component={Cardapio}

            />
        </Stack.Navigator>
    )
}