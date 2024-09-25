import css from "./App.module.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
