import React, { useState } from 'react'
import QRCode from "react-qr-code";
import './code.scss'

function Code() {
    const [state, setState] = useState({
        value: '',
        size: 256,
        bgColor: 'white',
        fgColor: 'black'
    })
  return (
      <div className='code'>
          <div className="inputs">
              <input type="text" value={state.value} onChange={(e) => setState({ value: e.target.value })} placeholder='Msg' />  
              {/* <input type="number" value={state.size} onChange={(e) => setState({ size: e.target.value })} placeholder='size of Qr code' />  
              <input type="color" value={state.bgColor} onChange={(e) => setState({ bgColor: e.target.value })} placeholder='BackGround Color' />  
              <input type="color" value={state.fgColor} onChange={(e) => setState({ fgColor: e.target.value })} placeholder='Text color' />   */}
          </div>
          <QRCode
              value={state.value}
              bgColor={state.bgColor}
              fgColor={state.fgColor}
              size={state.size}
          />
          
    </div>
  )
}

export default Code