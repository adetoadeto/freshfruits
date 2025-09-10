import { Link, Outlet } from 'react-router-dom'
import Button from '../components/Buttons/Button'


const Checkout = () => {
  return (
    <section id="checkout">
      <Button><Link to="/freshfruits/products">Back to shopping</Link></Button>
      <Outlet />
    </section>
  )
}

export default Checkout
