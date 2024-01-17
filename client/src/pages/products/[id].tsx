

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { GetStaticPropsContext } from 'next';
import Sidebar from '@/HomeSections/Sidebar/index';
import axios from 'axios';
import { baseURL } from '@/lib/baseUrl';
import { Product } from '@/@types/product';
import MaylikeProductCard from '@/components/Cards/MaylikeProductCard';
import FetchError from '@/Errors/FetchError';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart } from '@/store/features/cartSlice';
import Image from 'next/image';


type staticPathsProps = {
  products: Product[]
}


interface ProductDetailsProps {
  product: Product;
  products: Product[];
  error?: any;
}


const ProductDetails = ({product, products,error}:ProductDetailsProps) => {


  const dispatch  = useAppDispatch() 

  const cart = useAppSelector(state=>state.cart)

    

    if (!product || !products) {
      return <FetchError/>
    }

    return (
      <div>
        <div className="container">
          <Sidebar product_detail={true}/>
        </div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <Image src={product.image} 
              alt={product.name}
              height={400}
              width={400}
              className="product-detail-image" />
            </div>
            {/* <div className="small-images-container">
              {images?.map((item, i) => (
                <img 
                  key={i}
                  src={item}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div> */}
          </div>
  
          <div className="product-detail-desc">
            <h1>{product.name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (20)
              </p>
            </div>
            <h4>Details: </h4>
            <p>{product.description}</p>
            <p className="price">Ksh. {product.price.toLocaleString()}</p>
            {/* <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus"><AiOutlineMinus /></span>
                <span className="num">{0}</span>
                <span className="plus"  ><AiOutlinePlus /></span>
              </p>
            </div> */}
            <div className="buttons">
              <button type="button" className="add-to-cart"  onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
              <button type="button" className="buy-now" >Buy Now</button>
            </div>
          </div>
        </div>
  
        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {products.map((item) => (
                  <MaylikeProductCard key={item.id} product={item} />
                ))}
                <h1>products</h1>
              </div>
            </div>
        </div>
      </div>
    )
  }




  export const getStaticPaths = async () => {
    try {
      const axiosConfig = {
        timeout: 10000,
      };
      const { data } = await axios.get<staticPathsProps>(`https://shop-ease-ian-msodoki.koyeb.app/products/?limit=30`,axiosConfig);
  
      const { products } = data;
      const paths = products.map(product => ({
        params: {
          id: product.id
        }
      }));
  

      return {
        paths,
        fallback: 'blocking'
      };
    } catch (error) {
      console.error('Error occurred while fetching product data:', error);
    
      return {
        paths: [],
        fallback: 'blocking'
      };
    }
  };



  
  export const getStaticProps = async (context: GetStaticPropsContext) => {
    try {
      const { params } = context;
      const { id } = params as { id: string };
      const { data: product } = await axios.get<Product>(`${baseURL}/products/${id}`);
      const { data: products } = await axios.get<Product[]>(`${baseURL}/products/?limit=30`);
  
      return {
        props: { product, products }
      };
    } catch (error) {
      console.error('Error occurred while fetching product data:', error);
    
      // Type check error before accessing message property
      let errorMessage = '';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    
      return {
        props: {
          error: errorMessage
        }
      };
    }
  }

  export default ProductDetails