import React from "react";

import { Uploads as UserUploads } from "@containers/Uploads";
import { LayoutBottomAndTopNavigation } from "@layouts/LayoutBottomAndTopNavigation";

function Uploads() {
  return (
    <LayoutBottomAndTopNavigation title="Uploads">
      <UserUploads />
    </LayoutBottomAndTopNavigation>
  );
}

export { Uploads };
