import Navbar from "./Navbar";
import Contact from "./Contact";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
    </>
  );
}
export default Layout;
