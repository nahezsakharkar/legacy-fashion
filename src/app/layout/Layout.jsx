import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
