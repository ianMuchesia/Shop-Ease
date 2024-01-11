import ProductMinimalCard from "@/components/Cards/ProductMinimalCard";

const productsPerContainer = 4;

const returnTotalContainers = (totalProducts: number) => {
  return Math.ceil(totalProducts / productsPerContainer);
};



const renderShowcaseContainers =(products:[])=>
{

    const containers = []


    for (let i = 0; i < returnTotalContainers(products.length); i++) {
        containers.push(
          <div className="showcase-container"
            key={i}
          >
            {renderProductsInContainer(i, products)}
            </div>
        );
      }


      return containers

}



const renderProductsInContainer = (containerIndex:number, products:[]) => {
    const productsInContainer = [];
  
    for (let i =0; i <productsPerContainer; i++) 
    {
      const productIndex = containerIndex * productsPerContainer + i;
  
    if (productIndex < returnTotalContainers(products.length)) {
        productsInContainer.push(
         <ProductMinimalCard key={productIndex} />
        );
      }
    }
  
    return productsInContainer;
  }