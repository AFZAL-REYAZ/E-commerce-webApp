import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Items } from "./Items"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTooCart } from '../features/CartSlice';
import './FilteredData.css'

const FilteredData = () => {
  const [showAllData, setShowAllData] = useState(null)
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    setShowAllData(Items.filter((value) => value.type === location.state));
  }, [null]);

  return (
    <div className='mapping'>
      {showAllData != null ?
        showAllData.map((value,id) => {
          return (
            <div className="item-card" key={id}>
              <div className="item-card-row">
                <div >
                  <img
                    src={value.image}
                    alt="loding"
                  />
                </div>
                <div>
                  {value.name},  {value.price},
                </div>
                <div className="btn"><button type="button" className="btn btn-warning" onClick={() => dispatch(addTooCart(value))}>Add To Cart</button></div>
              </div>
            </div>
          )
        })
        : "no data"}
    </div>
  )

}

export default FilteredData
