import { useQuery } from "@tanstack/react-query";
import { Item, itemService } from "../services/http-service";
import { CACHE_KEY_ITEM } from "./constants";

const useItem = () => useQuery<Item[]>({
    queryKey: CACHE_KEY_ITEM,
    queryFn: () => itemService.getAll(),
    staleTime: 10 * 1000,
})

export default useItem;