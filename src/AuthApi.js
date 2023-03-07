import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { API_ENDPOINT } from "./config";

export const AuthApi = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    console.log("Clear session");
    setUser(null);
    setAuth(false);
    Cookies.remove("token");
  };

  const readCookie = async () => {
    const token = Cookies.get("token");
    if (token) {
      setLoading(true);
      const User = await getUser(token);
      if (User) {
        setAuth(true);
        setUser(User);
      } else {
        handleLogout();
      }
      setLoading(false);
    }
  };

  const getUser = async (token) => {
    try {
      const res = await axios.get(`${API_ENDPOINT}user`, {
        headers: {
          token: token,
        },
      });
      if (
        res.data.name == "TokenExpiredError" ||
        res.data.name == "JsonWebTokenError"
      ) {
        throw res.data;
      }
      return res.data;
    } catch (err) {
      console.log("err : " + err);
      return null;
    }
  };

  const deleteAccount = async () => {
    try {
      const token = Cookies.get("token");
      const res = await axios.delete(
        `${API_ENDPOINT}user`,
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(res.data);
      if (
        res.data.name == "TokenExpiredError" ||
        res.data.name == "JsonWebTokenError"
      ) {
        alert("Try to login again. 😕");
        window.location.reload();
        throw res.data;
      }
      handleLogout();
      console.log("delete account");
    } catch (err) {
      console.log("err : " + err);
      return null;
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <AuthApi.Provider
      value={{
        user,
        setUser,
        getUser,
        auth,
        setAuth,
        handleLogout,
        loading,
        readCookie,
        deleteAccount,
      }}
    >
      {children}
    </AuthApi.Provider>
  );
};
