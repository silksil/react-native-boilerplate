import React, { useState, useEffect, useRef } from "react";
import { AuthProvider } from "@providers/AuthProvider";
import { Ionicons } from "@expo/vector-icons";
import { registerRootComponent } from "expo";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { bool } from "prop-types";

import { NavigationContainer } from "@navigation/NavigationContainer";
import useLinking from "@navigation/useLinking";
import { StyledWrapper } from "@theme/StyledWrapper";

const App = ({ skipLoadingScreen }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, [getInitialState, setInitialNavigationState]);

  if (!isLoadingComplete && skipLoadingScreen) {
    return null;
  }

  return (
    <AuthProvider>
      <StyledWrapper>
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        />
      </StyledWrapper>
    </AuthProvider>
  );
};
App.defaultProps = {
  skipLoadingScreen: false,
};

App.propTypes = {
  skipLoadingScreen: bool,
};
export default registerRootComponent(App);
