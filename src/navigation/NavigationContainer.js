import { NavigationContainer as BaseNavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { any } from "prop-types";
import React, { forwardRef } from "react";

import { TabStack } from "./TabStack";
import { BookDetail } from "@screens/bookDetail";
import { useAccount } from "@hooks/useAccount";
import { Login } from "@screens/Login";

const NavigationContainer = forwardRef(({ initialState }, ref) => {
  const { Navigator, Screen } = createStackNavigator();
  const { isLoggedIn } = useAccount();

  return (
    <BaseNavigationContainer ref={ref} initialState={initialState || undefined}>
      {!isLoggedIn && (
        <Navigator initialRouteName="Login" headerMode={false}>
          <Screen name="Login" component={Login} />
        </Navigator>
      )}

      {isLoggedIn && (
        <Navigator initialRouteName="TabStack" headerMode={false}>
          <Screen name="TabStack" component={TabStack} />
          <Screen name="BookDetail" component={BookDetail} />
        </Navigator>
      )}
    </BaseNavigationContainer>
  );
});

NavigationContainer.defaultProps = {
  initialState: false,
};

NavigationContainer.propTypes = {
  initialState: any,
};

export { NavigationContainer };