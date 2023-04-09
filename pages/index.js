import axios from "axios";
import Head from "@/pages/Head";
const Home = ({ data }) => (
  <div>
    <Head title={"Home"} desc={"Want to stick to your schedule? Come join us to keep track of your activity"} author={"Neel"} />
    <div className="container">
      <h1>Home Page</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item?.id}</td>
              <td>{item.title}</td>
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
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = response.data;

  return {
    props: { data },
  };
}

export default Home;
