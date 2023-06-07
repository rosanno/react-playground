import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10">
      <h1 className="text-4xl font-semibold text-white my-5">Blogs</h1>
      <div className="bg-slate-700 rounded-md shadow p-4 my-5">
        <h1 className="capitalize text-3xl font-semibold border-b border-slate-300">
          {data?.title}
        </h1>
        <p className="mt-2 text-lg">{data?.body}</p>
      </div>
    </div>
  );
};

export default Blog;
