import TopLayout from '../TopLayout'
import ProductCard from './ProductCard'
import Categories from '../Categories';

function AllProducts(){
  return(
        <div>
            <TopLayout/>
            <Categories/>
            <ProductCard/>
        </div>
    );
}
export default AllProducts;

