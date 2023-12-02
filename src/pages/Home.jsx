import { useEffect } from "react";
import { useFakestoreApi } from "../hooks/usefakestoreApi";
import ProductItem from "../components/ProductItem";


const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products)

  return (
    <div className="text-blue">
      <h1>Home</h1>
      {loading ? <span>Cargando...</span> : null}
      {error ? <span>Hubo un error</span> : null}
      {products ? (
        <ul className="grid grid-cols-5 gap-4 ">
          {products.map((product) => (
            <ProductItem product={product} key={product.id}/>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;