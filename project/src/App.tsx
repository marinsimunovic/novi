import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Layout from "./components/layout";
import "./styles/styles.scss";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
      <Layout>
        <Header />{" "}
       <Outlet> <Routes>
          <Route path="/" element={<Layout children={undefined} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={< />} />
          </Route>
        </Routes></Outlet>
        <Header />
      </Layout>
    </>
  );
};

export default App;
