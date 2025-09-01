import { useRef } from 'react';
import useAddItem from './hooks/useAddItem';

const ItemForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addItem = useAddItem();

  return (
    <>
      {addItem.isError && <div className='alert alert-danger'>{addItem.error.message}</div>}

      <form className="row mb-3" onSubmit={event => {
        event.preventDefault();

        if (ref.current && ref.current.value)
          addItem.mutate({
            name: ref.current?.value,
          })
      }}>
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={addItem.isLoading} className="btn btn-primary">
            {addItem.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ItemForm;
