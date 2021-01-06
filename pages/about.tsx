import Layout from '../components/layouts/Layout'
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../server/gql'

const AboutPage = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) {
    return <p>loading...</p>;
  }

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }


  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <div>
        {data.users.map((user: any) => (
          <div key={user.id}>
            {user.id} -
            {user.firstName}&nbsp;
            {user.lastName}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default AboutPage
