import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { CACHE_KEY_TODOS } from "./constants";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export function useTodo() {
  // react query func contain, retry, caching, error handling features
  const fetchTodoList = () => {
    return axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.data)
  }

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: fetchTodoList,
    staleTime: 10 * 1000,
  })
}