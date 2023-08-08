import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const CustomerAuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const [change, setOnChange] = useState(false);

  // login
  const login = (email,password) => {
    fetch("http://127.0.0.1:3000/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(email);
     
        setOnChange(!change);
        if (response.error) {
          // console.log(response.error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else if (response) {
          setUser(response);
          localStorage.setItem("jwt", JSON.stringify(response));
          localStorage.setItem("user", JSON.stringify(response));
          sessionStorage.setItem("user", JSON.stringify(response));
          sessionStorage.setItem("jwtToken", response.jwt);
          document.cookie = `jwt=${response.jwt}; path=/`;
          document.cookie = `user=${JSON.stringify(response)}; path=/`;
          
          Swal.fire({
            position: "center",
            icon: "success",
            title: "LoggedIn successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");

        } 
      });
  };
  

  // Register
  const register = (name, email, password) => {
    fetch("http://127.0.0.1:3000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!change);
        if (response.error) {
          // console.log(response.error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          // setUser(response)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registered successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
         
        }
      });
  };

  // Logout
 
  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
     // Clear cookies by expiring them
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, _] = cookie.split("=");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
    navigate("/login");
  };



  const contextData = {
    user,
    login,
    register,
    logout,
  };

  return (
    <>
      <CustomerAuthContext.Provider value={contextData}>
        {children}
      </CustomerAuthContext.Provider>
    </>
  );
}

