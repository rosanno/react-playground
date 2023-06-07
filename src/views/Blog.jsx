import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);

  const getBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();

      setBlog(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10">
      <h1 className="text-4xl font-semibold text-white my-5">Blogs</h1>
      <div className="bg-slate-700 rounded-md shadow p-4 my-5">
        <h1 className="capitalize text-3xl font-semibold border-b border-slate-300">
          {blog?.title}
        </h1>
        <p className="mt-2 text-lg">{blog?.body}</p>
      </div>
    </div>
  );
};

export default Blog;
