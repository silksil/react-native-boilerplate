import React from "react";
import { Text } from "@components/Text";
import appInfo from "../../app.json";

function WelcomeText() {
  return (
    <>
      <Text numberOfLines={1} category="h4" mb="m">
        Welcome to {appInfo.expo.name}👋
      </Text>
    </>
  );
}
export { WelcomeText };
