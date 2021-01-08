import { Prop, User } from "../interfaces";

type UserListProps = { users: [User] };

const UserList = ({ users }: UserListProps) => (
  <div>
    <div>
      {users?.map((user: User) => (
        <div key={user.id}>
          {user.id} -
          {user.name} -
          {user.email} -
          {user.role} -

          {user.props?.map((prop: Prop) => (
            <p key="{prop.id}">
              {prop.id} -
              {prop.title} -
              {prop.slug} -
              {prop.desc} -
              {prop.published ? 'true' : 'false'}
            </p>
          ))}




        </div>
      ))}
    </div>
  </div>
);
export default UserList;