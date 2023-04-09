import Head from "@/pages/Head";
import axios from "axios";
const Albums = ({ data }) => (
  <div>
    <Head title={"Albums"} desc={"Create and save your own albums"} author={"Neel"} />
    <div className="container">
      <h1>Albums Page</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item?.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  const data = response.data;

  return {
    props: { data },
  };
}

export default Albums;
