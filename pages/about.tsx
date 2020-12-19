import { Box, Button, Typography } from "@material-ui/core";
import Link from 'next/link';
import Head from "next/head";
import Layout from '../components/layouts/Layout';

const Home = () => (
  <Layout>
    <Head>
      <title>About Page</title>
    </Head>

    <Box my={4}>
      <Link href="/">Home</Link>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
        </Typography>
      <Link href="/">
        <Button variant="contained" color="primary">
          Go to the main page
        </Button>
      </Link>
    </Box>
  </Layout>
);

export default Home;

// import Head from 'next/head'
// import styles from '../public/styles/Home.module.css'
// import Hello from './components/Hello';



// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <Hello msg="1234" />
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
