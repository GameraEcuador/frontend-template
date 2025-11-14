import { Routes, Route, Navigate } from "react-router-dom";

import { UserPage } from "@/Page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<UserPage />} path="/users" />
      <Route element={<Navigate replace to="/users" />} path="/*" />
    </Routes>
  );
};
