import React from "react";
import { useTheme } from "styled-components";

import { Tab as TabComponent } from "@components/Tab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { UploadsStack } from "./UploadsStack";
import { Settings } from "@screens/Settings";

const Tab = createBottomTabNavigator();

function TabStack() {
  const { colors, bottomNavigationHeight } = useTheme();
  const borderTopColor = colors["background-basic-color-3"];

  return (
    <Tab.Navigator
      initialRouteName="Uploads"
      headerMode={false}
      tabBarOptions={{
        style: {
          shadowRadius: 2,
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowColor: "grey",
          elevation: 4,
          backgroundColor: "transparent",
          position: "absolute",
          borderTopColor,
          borderTopWidth: 0,
          height: bottomNavigationHeight,
        },
      }}
    >
      <Tab.Screen
        name="Uploads"
        component={UploadsStack}
        options={{
          tabBarButton: props => (
            <TabComponent label="Uploads" {...props} iconName="book-outline" />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarButton: props => (
            <TabComponent
              label="Settings"
              {...props}
              iconName="settings-outline"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { TabStack };
