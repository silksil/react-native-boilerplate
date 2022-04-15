import { Button } from "@components/buttons";
import { useAccount } from "@hooks/useAccount";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAccount();

  return (
    <Button onPress={logout} title="Logout" width="100%" mt="s" status="basic">
      Log out
    </Button>
  );
};

export { LogoutButton };
