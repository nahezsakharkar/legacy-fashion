import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

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
