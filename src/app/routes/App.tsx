import { Route, Routes } from "react-router-dom";
import { Admin } from "../../pages/Admin/Admin";
import { Home } from "../../pages/Home/Home";
import { Country } from "../../pages/Country/Country";
import { Layout } from "../../shared/components/Layout";
import AdminLogin from "../../pages/Admin/AdminLogin/AdminLogin";
import PrivateRoute from "../../shared/components/PrivateRoute";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/login" element={<AdminLogin />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Layout>
  );
}
