import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Layout } from "../../shared/components/Layout";
import Poland from "../../pages/Country/Poland";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poland" element={<Poland />} />
      </Routes>
    </Layout>
  );
}
