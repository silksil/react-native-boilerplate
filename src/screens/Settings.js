import { ThemeSwitch } from "@containers/ThemeSwitch";
import React from "react";
import { LayoutBottomAndTopNavigation } from "@layouts/LayoutBottomAndTopNavigation";
import { LogoutButton } from "@containers/LogoutButton";

function Settings() {
  return (
    <LayoutBottomAndTopNavigation title="Settings ⚙️">
      <ThemeSwitch />
      <LogoutButton />
    </LayoutBottomAndTopNavigation>
  );
}
export { Settings };
