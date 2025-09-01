import useItem from './hooks/useItem'

function ItemList() {
  const { data: items } = useItem();

  return (
    <div>
      <ul>
        {items?.map(item => <li key={item._id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default ItemList