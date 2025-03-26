import { useMemo, useState } from "react";
import { UserContext } from "./Context";

function UserProvider({ children }) {
	const [user, setUser] = useState(() => ({
		name: "",
		email: "",
		role: "",
	}));

	const handleLogin = useMemo(
		() => (name: string, email: string, role: string) => setUser({ name, email, role }),
		[]
	);

	const value = useMemo(() => ({ ...user, handleLogin }), [user, handleLogin]);

	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
