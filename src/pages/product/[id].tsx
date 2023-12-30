

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import Sidebar from '@/HomeSections/Sidebar/index';





const ProductDetails = () => {

    const [index, setIndex] = useState(0);


    return (
      <div>
        <div className="container">
          <Sidebar product_detail={true}/>
        </div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              {/* <img src={imageUrl} className="product-detail-image" /> */}
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
            <h1>name</h1>
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem porro animi at quaerat excepturi, quisquam facilis minima nobis unde beatae inventore quasi quod in error nisi corrupti, dolore totam, libero soluta dignissimos numquam molestiae laudantium nostrum! Adipisci asperiores iure incidunt eos rem inventore ducimus itae ipsam sunt nobis architecto facere repellat? Esse architecto odio reprehenderit pariatur.</p>
            <p className="price">$price</p>
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
                {/* {products.map((item) => (
                  <Product key={item._id} product={item} />
                ))} */}
                <h1>products</h1>
              </div>
            </div>
        </div>
      </div>
    )
  }




  // export const getStaticPaths = async()=>{
  //   // const {data} = await axios.get<ResponseDataAllProducts>(`${process.env.baseURL}products`)

  //   // const {products } = data
  //   // const paths = products.map(product=>({
  //   //   params:{
  //   //     id:product._id
  //   //   }
  //   // }))

  //   // return {
  //   //   paths,
  //   //   fallback: 'blocking'
  //   // }
  // }

  



  // export const getStaticProps = async(context: GetStaticPropsContext)=>{
  //   const { params } = context;
  //   const { id } = params as { id: string };
  //   // const {data:product} = await axios.get<ResponseDataSingleProduct>(`${process.env.baseURL}products/${id}`)


  //   // const { data:AllProducts} = await axios.get<ResponseDataAllProducts>(`${process.env.baseURL}products`)

  //   // const {products} = AllProducts

  //   return{
  //     props: {}
  //   }
  // }


  export default ProductDetails