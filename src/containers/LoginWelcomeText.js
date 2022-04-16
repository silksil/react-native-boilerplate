import React from "react";
import { Text } from "@components/Text";
import appInfo from "../../app.json";

function WelcomeText() {
  return (
    <>
      <Text numberOfLines={1} category="h4">
        Welcome to {appInfo.expo.name}👋
      </Text>
      <Text category="h5" mt="m" mb="xl" fontWeight="normal">
        {appInfo.expo.name} helps you to keep an eye on your spine.
      </Text>
    </>
  );
}
export { WelcomeText };
