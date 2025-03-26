import { createContext } from "react";

type UserContextType = {
	name: string;
	email: string;
	role: string;
	handleLogin: (name: string, email: string, role: string) => void;
}

export const UserContext = createContext<UserContextType>({
	name: "",
	email: "",
	role: "",
	handleLogin: () => {}
});
