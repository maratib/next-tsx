import Head from "next/head";
import Header from '../Header';
import Footer from "../Footer";
import { Container } from "@material-ui/core";
const contentStyle = {
  background: "green",
};

const Layout = props => (
  <Container maxWidth="md">
    <Header />

    <div className="Content">
      {props.children}
    </div>

    <Footer />

  </Container >

);

export default Layout;