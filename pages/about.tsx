import Layout from '../components/layouts/Layout'
import UserList from '../components/UserList'
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../server/schema'

const AboutPage = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) {
    return <p>loading...</p>;
  }

  // check for errors
  if (error) {
    console.log(error);

    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>;
      </div>
    )
  }


  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <UserList users={data.users} />
    </Layout>
  )
}

export default AboutPage
