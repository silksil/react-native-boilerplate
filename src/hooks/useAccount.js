import { AuthContext } from "@providers/AuthProvider";
import { useContext } from "react";

export const useAccount = () => {
  return useContext(AuthContext);
};
