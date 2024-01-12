

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useEffect, useState } from 'react';
import { GetStaticPropsContext } from 'next';
import Sidebar from '@/HomeSections/Sidebar/index';
import axios from 'axios';
import { baseURL } from '@/lib/baseUrl';
import { Product } from '@/@types/product';
import MaylikeProductCard from '@/components/Cards/MaylikeProductCard';


type staticPathsProps = {
  products: Product[]
}


interface ProductDetailsProps {
  product: Product;
  products: Product[];
}


const ProductDetails = ({product, products}:ProductDetailsProps) => {

    const [index, setIndex] = useState(0);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
      if (product) {
        setImages([product.image,product.image,product.image,product.image]);
      }

    }, [product]);


    return (
      <div>
        <div className="container">
          <Sidebar product_detail={true}/>
        </div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img src={product.image && images[index]} className="product-detail-image" />
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
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus"><AiOutlineMinus /></span>
                <span className="num">{0}</span>
                <span className="plus"  ><AiOutlinePlus /></span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart"  >Add to Cart</button>
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
      const { data } = await axios.get<staticPathsProps>(`${process.env.baseURL}/products`);
  
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
      // Return an empty paths array if there's an error
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
    const { data: products } = await axios.get<Product[]>(`${baseURL}/products`);

    console.log(product);

    return {
      props: { product, products }
    };
  } catch (error) {
    console.error('Error occurred while fetching product data:', error);

    // Return empty props if there's an error
    return {
      props: {}
    };
  }
};

  export default ProductDetails