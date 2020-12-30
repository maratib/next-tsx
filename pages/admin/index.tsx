import AdminLayout from '../../components/admin/AdminLayout'
import Greeting from '../../components/Greetings'

const IndexPage = () => (
  <AdminLayout title="Admin">
    <h1>Admin Page 👋</h1>
    <Greeting />
  </AdminLayout>
)

export default IndexPage
