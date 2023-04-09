import axios from "axios";
import Head from "@/pages/Head";
const User = ({ data }) => (
  <div>
    <Head title={"Users"} desc={"We connect all the users together"} author={"Neel"} />
    <div className="container">
      <h1>User Page</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item?.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = response.data;

  return {
    props: { data },
  };
}

export default User;
