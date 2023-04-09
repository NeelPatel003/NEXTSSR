import Head from "@/pages/Head";
import axios from "axios";
const Comment = ({ data }) => (
  <div>
    <Head title={"Comment"} desc={"You can also see the comments on your activity by others"} author={"Neel"} />
    <div className="container">
      <h1>Comments Page</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item?.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const data = response.data;

  return {
    props: { data },
  };
}

export default Comment;
