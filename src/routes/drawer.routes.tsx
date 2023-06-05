import { createDrawerNavigator } from "@react-navigation/drawer"
import { Feather } from "@expo/vector-icons"

import TabRoutes from "./tab.routes"

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{ title: ""}}
        >
            <Drawer.Screen
                name="home Drawer"
                component={TabRoutes}
                options={{
                    drawerIcon:  ({ color, size  }) => <Feather name="home" color={color} size={size}/>,
                    drawerLabel: "início"
                }}
            />

            <Drawer.Screen
                name="New Drawer"
                component={TabRoutes}
                options={{
                    drawerIcon:  ({ color, size  }) => <Feather name="user" color={color} size={size}/>,
                    drawerLabel: "Meu Perfil"
                }}
            />
        </Drawer.Navigator>
    )
}