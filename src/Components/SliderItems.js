import { useNavigate } from 'react-router-dom'
import './SliderItems.css'

const SliderItems = () => {
    const navigate = useNavigate()
    return (
        <div className='box'>
            <div className="heading-container">
                <h4 className='heading'>For you and your family</h4>
            </div>
            <div className='bigbox'>
                <div className='mainbox' onClick={() => { navigate("/all-data", { state: "Phone" }) }}>
                    <img src='https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg' alt='loding' />
                    <div className='discount'>50% off</div>
                </div>
                <div className='mainbox' onClick={() => { navigate("/all-data", { state: "T-shirt" }) }}>
                    <img src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80' alt='loding' />
                    <div className='discount'>34% off</div>
                </div>
                <div className='mainbox' onClick={() => { navigate("/all-data", { state: "Shoes" }) }}>
                    <img src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80' alt='loding' />
                    <div className='discount'>28% off</div>
                </div>
                <div className='mainbox' onClick={() => { navigate("/all-data", { state: "Jeanse" }) }}>
                    <img src='https://www.shutterstock.com/shutterstock/photos/744673549/display_1500/stock-photo-close-up-of-man-s-legs-in-jeans-and-boots-on-wooden-floor-free-space-for-text-744673549.jpg' alt='loding' />
                    <div className='discount'>20% off</div>
                </div>
            </div>
        </div>
    )
}

export default SliderItems
