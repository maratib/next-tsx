import Layout from '../components/layouts/Layout'
import Greeting from '../components/theme/Greeting'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Home Page 👋</h1>
    <Greeting name="Maratib" />
  </Layout>
)

export default IndexPage
