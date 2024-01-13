export type Product = {
    id: string;
    category_rel: {
      id: string;
      name: string;
    };
    created_at: string;
    description: string;
    gender: string;
    name: string;
    price: number;
    rating: number;
    updated_at: string;
    image:string;
  };


  export type CategoryType = {
    endpoint: string;
    actionType: string;
  };


  export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
    image:string;
  };