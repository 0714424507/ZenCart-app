import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const SellerAuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState();

  const [change, setOnChange] = useState(false);

  // login
  const SignIn = (email, password) => {
    fetch("http://localhost:3000/seller/login", {
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
          setAdmin(response);
          localStorage.setItem("jwt", JSON.stringify(response));
          localStorage.setItem("admin", JSON.stringify(response));
          sessionStorage.setItem("admin", JSON.stringify(response));
          sessionStorage.setItem("jwtToken", response.jwt);
          document.cookie = `jwt=${response.jwt}; path=/`;
          document.cookie = `admin=${JSON.stringify(response)}; path=/`;

          Swal.fire({
            position: "center",
            icon: "success",
            title: "LoggedIn successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/seller/dashboard");

        }
      });
  };


  // Register
  const register = (name, email, password, shop_name) => {
    fetch("http://localhost:3000/sellers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        shop_name
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
          navigate("/SignIn");

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
    navigate("/SignIn");
  };



  const contextData = {
    admin,
    SignIn,
    register,
    logout,
  };

  return (
    <>
      <SellerAuthContext.Provider value={contextData}>
        {children}
      </SellerAuthContext.Provider>
    </>
  );
}


