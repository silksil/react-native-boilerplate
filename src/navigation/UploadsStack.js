import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Uploads } from "@screens/Uploads";
import { SearchUploads } from "@screens/SearchUploads";

const { Navigator, Screen } = createStackNavigator();

function UploadsStack() {
  return (
    <Navigator headerMode={false} initialRouteName="uploads">
      <Screen name="Home" component={Uploads} />
      <Screen name="SearchUploads" component={SearchUploads} />
    </Navigator>
  );
}

export { UploadsStack };
