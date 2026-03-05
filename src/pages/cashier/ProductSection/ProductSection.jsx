import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Barcode } from 'lucide-react';
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByStore } from '@/Redux Toolkit/features/Product/productThunk';

const products = [{
  id: 1,
  image: "https://images.pexels.com/photos/10952730/pexels-photo-10952730.jpeg",
  name: "Product Name",
  sku: "SKU12345",
  sellingPrice: "899",
  category: "men shirt"
},
{
  id: 1,
  image: "https://images.pexels.com/photos/10952730/pexels-photo-10952730.jpeg",
  name: "Product Name",
  sku: "SKU12345",
  sellingPrice: "899",
  category: "men shirt"
},
{
  id: 1,
  image: "https://images.pexels.com/photos/10952730/pexels-photo-10952730.jpeg",
  name: "Product Name",
  sku: "SKU12345",
  sellingPrice: "899",
  category: "men shirt"
},
];


const ProductSection = () => {

  const [searchTerm, setSearchTerm] = React.useState("");


  const { branch } = useSelector(state => state.branch)
  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    if (branch?.storeId) {
      dispatch(getProductsByStore(branch.storeId))
    }
  }, [branch])
  const handleSearchChange = (e) => {
    setSearchTerm(e.terget.value);
  };
  console.log("products", products, products.length)

  return (
    <div className='w-2/5 flex flex-col bg-card border-r '>

      <div className='p-4 border-b bg-muted'>

        <div>

          <Input className={"py-5"} placeholder="Search product..."
            value={searchTerm} type={"text"} onChange={handleSearchChange}></Input>
        </div>


        <div className='flex items-center justify-between p-2'>
          <span>{2} product founds</span>
          <Button variant='outline' size='sm' className="text-xs "> <Barcode></Barcode></Button>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5 p-5 '>

        {products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))
        }

      </div>


    </div>
  );
};

export default ProductSection;