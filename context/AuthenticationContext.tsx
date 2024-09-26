import React, { useState, createContext, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

interface User {
  user_role: string;
  email: string;
  fullName: string;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  onLogin: (identity: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
  isLoading: boolean;
  isFirstTimeUser: boolean;
  setIsFirstTimeUser: (value: boolean) => void;
  setUser: (user: User | null) => void;
  errorMsg: string;
  setIsLoading: (loading: boolean) => void;
  setErrorMsg: (message: string) => void;
  checkUserSession: () => Promise<void>;
}

const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  user: null,
  onLogin: async () => {},
  onLogout: async () => {},
  isLoading: false,
  isFirstTimeUser: true,
  setIsFirstTimeUser: () => {},
  setUser: () => {},
  errorMsg: "",
  setIsLoading: () => {},
  setErrorMsg: () => {},
  checkUserSession: async () => {},
};

export const AuthenticationContext =
  createContext<AuthContextType>(defaultAuthContext);

export const AuthenticationContextProvider: React.FC<
  AuthContextProviderProps
> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);

  const checkUserSession = async () => {
    // AsyncStorage.clear();
    setIsLoading(true);
    try {
      const response = await AsyncStorage.getItem("fitnessX-FirstTimeUser");
      if (response !== null) {
        setIsFirstTimeUser(false);
      } else {
        setIsFirstTimeUser(true);
      }
    } catch (error: any) {
      if (error) {
        setErrorMsg("Error while checking user session.");
        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onLogin = async (identity: string, password: string) => {
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 60000);
    setIsLoading(true);
    try {
      let userData = {
        user_role: "User",
        email: "edoziemagdalene@gmail.com",
        fullName: "Princess Maggy",
      };
      setUser(userData);
      await AsyncStorage.setItem(
        "fitnessX-LoggedInUser",
        JSON.stringify(userData)
      );
    } catch (error: any) {
      if (error) {
        setErrorMsg("Login failed. Please put in a valid email/password");
        return;
      }
      setErrorMsg("Login failed. Please reach out to your administrator.");
    } finally {
      setIsLoading(false);
      clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    if (errorMsg) {
      const timeout = setTimeout(clearErrorMsg, 5000);
      return () => clearTimeout(timeout);
    }
  }, [errorMsg]);

  const clearErrorMsg = () => {
    setErrorMsg("");
  };

  const onLogout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem("fitnessX-user");
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: user?.email !== undefined,
        isLoading,
        onLogin,
        onLogout,
        isFirstTimeUser,
        setIsFirstTimeUser,
        setUser,
        user,
        errorMsg,
        setIsLoading,
        setErrorMsg,
        checkUserSession,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
