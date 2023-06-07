import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

const Product = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  console.log(data);

  if (loading) return <Loader />;

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-36">
      <div className="flex gap-8">
        <div className="bg-white p-6 rounded-md">
          <img src={data.image} alt="" className="h-[370px]" />
        </div>
        <div>
          <h1 className="text-4xl font-semibold">{data.title}</h1>
          <p className="text-lg mt-6">{data.description}</p>
          <hr className="mt-3 mb-4" />
          <p>{data.category}</p>
          <hr className="mt-3 mb-4" />
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
