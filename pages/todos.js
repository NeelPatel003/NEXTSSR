import Head from "@/pages/Head";
import axios from "axios";

const Todos = ({ data }) => (
  <div>
    <Head title={"Todos"} desc={"Keep and update record of your day-to-day activity"} author={"Neel"} />
    <div className="container">
      <h1>Todos Page</h1>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item?.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const data = response.data;

  return {
    props: { data },
  };
}

export default Todos;
