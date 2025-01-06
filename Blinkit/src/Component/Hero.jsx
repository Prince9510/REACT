import '../CSS/Hero.css'
import { useNavigate } from 'react-router'

export default function Hero() {

    const navigate = useNavigate();

      const handelRedirect = () =>{
        navigate("/category")
      }
  return (
    <>
      <div className="main-hero mt-28 w-full flex justify-center">
        <div className="inner-hero w-[85%] h-[fit-content]"> 


            <div onClick={handelRedirect} className="paan_corner w-full bg-green-400">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="" />
            </div>
            
            <div className='w-[full] flex'>

            <div onClick={handelRedirect} className="pharmacy ml-5">
                <img className='h-[200px]' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
            </div>

            <div onClick={handelRedirect} className="pet_care ml-5">
                <img className='h-[200px]' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
            </div>

            <div onClick={handelRedirect} className="diaper ml-5">
                <img className='h-[200px]' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
            </div>
            </div>

            
        </div>
      </div>
    </>
  )
}
