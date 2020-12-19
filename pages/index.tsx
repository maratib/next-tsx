import Head from "next/head";
import Link from 'next/link';
import React from "react";
import Greeting from "../components/Greeting";
import Headline from "../components/Headline";
import Hello from '../components/Hello';
import Layout from '../components/layouts/Layout';
import Timer from '../components/Timer';

type HomeProps = {};

const Element = (props) => (
  <div>
    <h1>My Element</h1>
  </div>
);



const Home = (props: HomeProps) => (
  <Layout>
    <Head>
      <title>Home Page</title>
      <meta name="description" content="Here goes the description"></meta>
    </Head>
    <Greeting />
    <Link href="/about">About</Link>
    <Hello msg="Layouts" />
    <Headline />
    <Timer />
    <Element />
  </Layout>
);
export default Home;

