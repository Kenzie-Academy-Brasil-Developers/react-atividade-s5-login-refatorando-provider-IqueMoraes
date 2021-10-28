import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface UserData {
  email: string;
  password: string;
}

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderValues {
  authToken: string;
  SignIn: (userData: UserData) => void;
  Logout: () => void;
}

const AuthContext = createContext<AuthProviderValues>({} as AuthProviderValues);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const SignIn = (userData: UserData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((error) => console.log(error));
  };
  const Logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, SignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
