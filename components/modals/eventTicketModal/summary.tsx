/** @jsxImportSource @emotion/react */
import React from 'react'

const Summary = () => {
    const price = 100000
    const quantity = 2
    const subTotal = price * quantity
    const VAT = 12300
    const grandTotal = subTotal + VAT
  return (
    <div css = {{
        width:"95%",
        marginTop:"1.5rem"
    }}>
        <div css = {{display:"grid", gridTemplateColumns:"1fr 1fr", marginBottom:"0.8rem"}}>
            <div>Ticket Price</div>
            <div css = {{color:"#707070"}}>N {price.toLocaleString()}.00</div>
        </div>
        <div css = {{display:"grid", gridTemplateColumns:"1fr 1fr", marginBottom:"0.8rem"}}>
            <div>Quantity</div>
            <div css = {{color:"#707070"}}>{quantity}</div>
        </div>
        <div css = {{display:"grid", gridTemplateColumns:"1fr 1fr", marginBottom:"0.8rem", paddingBottom:"0.8rem", borderBottom:"1px solid #00000029"}}>
            <div>Sub Total</div>
            <div css = {{color:"#707070"}}>N {subTotal.toLocaleString()}.00</div>
        </div>
        <div css = {{display:"grid", gridTemplateColumns:"1fr 1fr", marginBottom:"0.8rem", paddingBottom:"0.8rem", borderBottom:"1px solid #00000029"}}>
            <div>VAT</div>
            <div css = {{color:"#707070"}}>N {VAT.toLocaleString()}.00</div>
        </div>
        <div css = {{display:"grid", gridTemplateColumns:"1fr 1fr", marginBottom:"0.8rem"}}>
            <div>Grand Total</div>
            <div css = {{color:"#707070"}}>N {grandTotal.toLocaleString()}.00</div>
        </div>
    </div>
  )
}

export default Summary