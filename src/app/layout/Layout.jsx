import Header from "../components/layout/header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <footer style={{ textAlign: "center", padding: "1rem", color: "#666" }}>
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
