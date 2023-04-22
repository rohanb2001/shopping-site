import Footer from "../footer/footer";
import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
