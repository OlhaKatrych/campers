import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
      </Layout>
    </div>
  );
}

export default App;
