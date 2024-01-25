import { useDispatch, useSelector } from 'react-redux';
import Carousel from './Carousel';
import Footer from './Footer';
import { addTooCart } from '../features/CartSlice';
import SliderItems from './SliderItems';

const Home = ({ searchdatasvar, clicksearch }) => {
  const items = useSelector((state) => state.allCart.itemss);
  const dispatch = useDispatch();
  return (
    <div className='homeHoleBox'>
      <Carousel />
      <SliderItems />
      <div className="maping">
        <div className='boxfirsts'><img src='https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=996&t=st=1693168870~exp=1693169470~hmac=21cf6df0eafe299d4b7152c3b2e2add806654a98efe4bc4a54529d64092b93c2' alt='loading' /></div>
        <div className='heading-container'>
          <h4 className='heading'>Inspired by your shopping trends</h4>
        </div>
        {items.filter((item) =>
          item.name.toLowerCase().includes(searchdatasvar || clicksearch)
        ).map((value, id) => {
          value.name.toLowerCase();
          return (
            <div className="item-card" key={id} >
              <div className="item-card-row">
                <div>
                  <img
                    src={value.image}
                    alt="loding"
                  />
                </div>
                <div>
                  {value.name},  {value.price},
                </div>
                <div><button type="button" className="btn btn-warning" onClick={() => dispatch(addTooCart(value))}>Add To Cart</button></div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Home