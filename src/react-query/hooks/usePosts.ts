import axios from "axios"
import { useInfiniteQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

interface PostQuery {
  pageSize: number,
}

const usePosts = (query: PostQuery) => useInfiniteQuery<Post[], Error>({
  queryKey: ['posts', query],
  queryFn: ({ pageParam = 1 }) =>
    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data),
  staleTime: 1 * 60 * 1000, //1m
  keepPreviousData: true, // when re-render, you will see page where you were
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.length > 0 ? allPages.length + 1 : undefined;
  },
});

export default usePosts;
