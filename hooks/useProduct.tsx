import { ProductType } from "@/types/product";
import { useState } from "react";

export default function useProduct(isRefreshing?: false) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [offSet, setOffSet] = useState<number>(0);
  const limit = 10;
  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const currentOffset = isRefreshing ? 0 : offSet;
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${currentOffset}&limit=${limit}`,
      );
      const data = await response.json();
      data.length < 10 ? setHasMore(false) : setHasMore(true);
      if (isRefreshing) {
        setData((prev) => [ ...prev, ...data ]);
        setOffSet((prev) => prev + limit)
      }else{
        setData(data);
        setOffSet((prev) => prev + limit)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {isLoading, hasMore, fetchProduct, data}
}
