import React from 'react'
import logo from '../assets/images/pic4.png'
import logo1 from '../assets/images/pic3.png'
import logo2 from '../assets/images/pic2.png'
import logo3 from '../assets/images/pic.png'
import './MyComponent.css'

function MyComponent() {
  return (
    <div className="className='flex-item'"
        style={{
            display:'flex', 
            flexDirection:'row',
            marginTop: '5px',
            marginBottom: '5px',
            padding: '1.2rem',
        }}>
        
        <div className="pic"
            style={{
            }}
        >
            <img src={logo} alt="" width="100" height="100"/>
        </div>

        <div className="pic"
        style={{
        }}>
            <img src={logo1} alt="" width="100" height="100"/>
        </div>
        <div className="pic"
        style={{
        }}>
            <img src={logo2} alt="" width="100" height="100"/>
        </div>
        <div className="pic"
        style={{
           
        }}>
            <img src={logo3} alt="" width="100" height="100"
            />
            <div
                style={{
                color:'white'
            }}
            >KEBBI STATE</div>
        </div>
    </div>
  )
}

export default MyComponent