import { useLinking } from "@react-navigation/native";
import * as Linking from "expo-linking";

/**
 * The useLinking hook lets us handle 'deep links' in our apps.
 * Every time a screen is added to this file, it should also be added to the NavigationContainer
 * The key (e.g. 'Home') is the screen name passed to the NavigationContainer
 * and the value ('home') is the url.
 * For more information see;
 * 1.) https://docs.expo.io/versions/latest/workflow/linking/
 * 2.) https://reactnavigation.org/docs/deep-linking/
 */

export default function (containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Home: "home",
      Login: "login",
    },
  });
}
