/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from 'react-redux'
import '../CSS/Product.css'
import { useEffect, useRef, useState } from 'react';
import { fetchapi, addToCart, increment, decrement } from '../Slice/Slice';

export default function Product() {
    const [position, setPosition] = useState(0)
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const apiData = useSelector((data) => data.cart.data);

    const categories = ["milk", "pav", "flakes", "energy", "honey"];

    console.log(cart)

    useEffect(() => {
        dispatch(fetchapi())
    }, [dispatch]);

    const ItemWidth = 1000;

    const handelClick = (scrollAmount, refContainer) => {
        const newScrollPosition = position + scrollAmount
        setPosition(newScrollPosition);
        refContainer.current.scrollLeft = newScrollPosition;
    }

    const handleAddToCart = (id) => {
        dispatch(addToCart(id));
    };

    const handleIncrement = (id) => {
        dispatch(increment(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrement(id));
    };
    
    return (
        <>
            {categories.map((category, index) => {
                const refContainer = useRef();
                return (
                    <div key={index} className='w-full mt-5 flex justify-center relative'>
                        <div className="action_button absolute w-[85%] top-[50%] h-[fit-content] flex justify-between">
                            <div onClick={() => { handelClick(-ItemWidth, refContainer) }} className="previous_button w-[30px] relative right-5 cursor-pointer z-40 flex justify-center items-center h-[30px] border rounded-full"><i className="ri-arrow-left-s-line"></i></div>
                            <div onClick={() => { handelClick(ItemWidth, refContainer) }} className="next_button w-[30px] z-40 relative left-5 cursor-pointer flex justify-center items-center h-[30px] border rounded-full"><i className="ri-arrow-right-s-line"></i></div>
                        </div>
                        <div className="main-product flex-col w-[85%] h-[fit-content] flex justify-center">
                            <div className="category_title w-full h-[10%]">
                                <h1 className='text-[21px] font-bold'>{category.toUpperCase()}</h1>
                            </div>
                            <div ref={refContainer} className="inner-field overflow-x-scroll h-[fit-content]">
                                <div className="temps w-[fit-content] h-[fit-content] flex gap-5 "> 
                                    {apiData.filter(e => e.category === category).map((e, i) => (
                                        <div key={i} className="card w-[180px] pb-3 rounded-md flex flex-col h-[fit-content]">
                                            <div className="image w-full flex justify-center">
                                                <img src={e.image} className='h-[150px]' alt={e.title} />
                                            </div>
                                            <div className="product_detail pl-2">
                                                <div className="product_title h-[50px]">
                                                    <span className='text-[13px]'>{e.name}</span>
                                                </div>
                                                <div className="weight">
                                                    <span className='text-[13px] text-[#868686]'>{e.weight}</span>
                                                </div>
                                            </div>
                                            <div className="price_cart flex justify-between pr-2 pl-2 w-full h-[fit-content] mt-3">
                                                <div className="price">
                                                    <span>₹{e.price}</span>
                                                </div>
                                                <div className="cart">
                                                    {cart[e.id] ? (
                                                        <div className='cart-add border items-center border-[#318616] flex bg-[#368512] rounded-md h-[30px] w-[55px] justify-around text-[14px] text-[#318616]'>
                                                            <div onClick={() => handleDecrement(e.id)} className="cursor-pointer text-[16px] decrement text-white bg-pink-00">-</div>
                                                            <div className="text-[14px] count text-white bg-slate-70">{cart[e.id]}</div>
                                                            <div onClick={() => handleIncrement(e.id)} className="cursor-pointer text-[16px] increment text-white bg-orane-800">+</div>
                                                        </div>
                                                    ) : (
                                                        <button onClick={() => handleAddToCart(e.id)} className='normal-add border border-[#318616] rounded-md h-[30px] w-[55px] text-[14px] text-[#318616]'>ADD</button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
