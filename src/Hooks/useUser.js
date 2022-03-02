import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function useUser() {
    return useContext(UserContext);
}