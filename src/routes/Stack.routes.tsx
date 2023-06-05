import { createNativeStackNavigator } from "@react-navigation/native-stack"


import DrawerRoutes from "./drawer.routes"

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Home Stack"
                component={DrawerRoutes}
            />
        </Stack.Navigator>
    )
}