import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  console.log(data);

  if (loading) return <Loader />;

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-36">
      <div className="grid grid-cols-4 gap-10">
        {data.map((product) => (
          <div className="bg-white rounded-md shadow p-6" key={product.id}>
            <div className="flex flex-col justify-center">
              <div className="h-[280px]">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4">
                <Link to={`/product/${product.id}`}>
                  <h4 className="truncate text-black" title={product.title}>
                    {product.title}
                  </h4>
                </Link>
                <p className="text-gray-400 mt-2">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
