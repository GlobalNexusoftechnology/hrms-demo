import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Loading } from "../components/loading";
import { NotFound } from "../components/not-found";

const HomePage = lazy(() => import('../pages/home.page'))
const AttendancePage = lazy(() => import('../pages/attendance.page'))
const ReportsPage = lazy(() => import('../pages/reports.page'))
const ShiftManagementPage = lazy(() => import('../pages/shift-management.page'))
const EmployeeManagementPage = lazy(() => import('../pages/employee-management.page'))

export const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="dashboard" element={<App />}>
            <Route path="home" element={<HomePage />} />
            <Route path="attendance" element={<AttendancePage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="shift-management" element={<ShiftManagementPage />} />
            <Route path="employee-management" element={<EmployeeManagementPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense >
    </>
  );
};
