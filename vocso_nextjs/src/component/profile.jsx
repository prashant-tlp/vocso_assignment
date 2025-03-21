"use client";

import { apiReq } from "@/lib/api_service";
import { useUser } from "@auth0/nextjs-auth0/client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function UserProfile({ idToken }) {
  const { user, error, isLoading } = useUser();
  const [sessionToken, setSessionToken] = useState(null);
  useEffect(() => {
    if (user && idToken) {
      Cookies.set("sessionToken", idToken);
      setSessionToken(idToken);

      apiReq({ url: "auth/callback", method: "POST", data: { user } })
        .then((response) => console.log("API response:", response))
        .catch((err) => console.error("API error:", err));
    }
  }, [user, idToken]);

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
      Cookies.remove("sessionToken");
      setSessionToken(null);
    };
  }, []);

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 w-1/3 bg-white shadow-lg rounded-xl text-center">
        {user ? (
          <>
            <img
              src={user.picture}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 shadow-md"
            />
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <a
              href="/api/auth/logout"
              className="block mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
              onClick={() => {
                Cookies.remove("sessionToken");
                setSessionToken(null);
              }}
            >
              Logout
            </a>
          </>
        ) : (
          <a
            href="/api/auth/login"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login with Auth0
          </a>
        )}
      </div>
    </div>
  );
}
