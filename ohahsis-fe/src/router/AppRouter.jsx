import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { getEnvVariables } from "../helpers";

export const AppRouter = () => {
  const authStatus = "not authenticaded";

  console.log(getEnvVariables());

  return (
    <Routes>
      {authStatus === "not authenticaded" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
