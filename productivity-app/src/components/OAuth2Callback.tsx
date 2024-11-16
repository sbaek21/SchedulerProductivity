import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OAuth2Callback = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      // Exchange the authorization code for an access token
      fetch("http://localhost:8081/getAccessToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Access Token:", data.access_token);
          // Save the token or use it for subsequent requests
        })
        .catch((err) => console.error("Error exchanging code:", err));
    }
  }, [location]);

  return <div>Processing OAuth callback...</div>;
};

export default OAuth2Callback;
