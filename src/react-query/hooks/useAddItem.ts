import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { Item, ItemForm, itemService } from '../services/http-service';
import { CACHE_KEY_ITEM } from './constants';

interface AddItemContext {
  previousItem: ItemForm[]
}

const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Item, AxiosError<{ message: string }>, ItemForm, AddItemContext>({
    mutationFn: async (data: ItemForm) => itemService.post(data),
    // onMutate manage the cache before onSuccess
    onMutate: async (data) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: CACHE_KEY_ITEM })

      // Snapshot the previous value
      const previousItem = queryClient.getQueryData<Item[]>(CACHE_KEY_ITEM) || [];

      // Optimistically Update: update the add-data to the cache before onSuccess
      queryClient.setQueryData<Item[]>(CACHE_KEY_ITEM, (old = []) => [...old, { _id: "mock", ...data }])

      // Return a context object with the snapshotted value
      return { previousItem }
    },
    // Always refetch after error or success:
    // onSettled: () => queryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS }),
    onSuccess: (saveType, newType) => {
      // Will invalidate the catch, so that reactQuery will refatch data from the backend
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ITEM })
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData(CACHE_KEY_ITEM, context?.previousItem)
    },
  });
}

export default useAddItem;