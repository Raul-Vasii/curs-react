import { Comment } from "./comment";

export default function UserItem({ name, email, comment }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
        <Comment text={comment} />
    </div>
  );
}
