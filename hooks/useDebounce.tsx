import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState<T>();
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      setDebounceValue(value);
      setIsLoading(false);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debounceValue, isloading };
}
export default useDebounce;
