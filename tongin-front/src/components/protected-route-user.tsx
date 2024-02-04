import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteUser({ children }: any) {
  const [userType, setUserType] = useState<"USER" | "ADMIN" | null>("ADMIN");
  if (userType === null) {
    return <Navigate to="/login"></Navigate>;
  } else if (userType === "ADMIN") {
    return <Navigate to="/admin"></Navigate>;
  } else if (userType === "USER") {
    return children;
  }
}
