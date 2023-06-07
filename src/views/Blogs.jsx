import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";

const Blogs = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10">
      <h1 className="text-4xl font-semibold text-white my-5">Blogs</h1>
      {data.map((blog) => (
        <div key={blog.id} className="bg-slate-700 rounded-md shadow p-4 my-3">
          <Link to={`/blog/${blog.id}`}>
            <h1 className="capitalize underline">{blog.title}</h1>
          </Link>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
