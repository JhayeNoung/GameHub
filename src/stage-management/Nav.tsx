import useAuthStore from './auth/store';
import useCounterStore from './counter/store';

function Nav() {
  const counter = useCounterStore(selector => selector.counter);
  const { user } = useAuthStore();

  console.log("Render Nav")

  return (
    <div className='d-flex justify-content-between w-100 h-100 p-3 bg-primary'>
      <p>{counter}</p>
      <p>{user}</p>
    </div>
  )
}

export default Nav