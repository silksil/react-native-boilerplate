import { Button } from "@components/buttons";
import { useAuth } from "@hooks/useAuth";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Button onPress={logout} title="Logout" width="100%" mt="s" status="basic">
      Log out
    </Button>
  );
};

export { LogoutButton };
