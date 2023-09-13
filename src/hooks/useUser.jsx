import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export function useUser() {
  return useContext(UserContext);
}
