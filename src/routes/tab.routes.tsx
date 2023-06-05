import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Feather } from "@expo/vector-icons"

import Feed from "../screens/Feed"
import New from "../screens/New"
import Profile from "../screens/Profile"

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Feed Tab"
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size  }) => 
                        <Feather name="home" color={color} size={size}/>,
                        tabBarLabel: "Início"
                }}
            />

            <Tab.Screen 
                name="New Tab"
                component={New}
                options={{
                    tabBarIcon: ({ color, size  }) => <Feather name="plus" color={color} size={size}/>,
                    tabBarLabel: "Novo"
                }}
            />

            <Tab.Screen 
                name="Profile Tab"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size  }) => <Feather name="plus" color={color} size={size}/>,
                    tabBarLabel: "Profile"
                }}
            />
        </Tab.Navigator>
    )
}
