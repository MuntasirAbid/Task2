import "./LoadingData.css"
import React, { useEffect, useState } from 'react';

const LoadingData = () => {

 const [data, setData] = useState()
 const [selectedOrder, setSelectedOrder] = useState(null);

 useEffect(() => {
  fetch('purchaseorders.json')
   .then(res => res.json())
   .then(data => setData(data
   ))
   .catch(error => console.log(error))

 }, [])

 const handleOrderClick = (order) => {
  setSelectedOrder(order);
 };

 const handleClosePopup = () => {
  setSelectedOrder(null);
 };

 return (

  <div className='container'>
   <>
    {data?.mvPurchaseOrders.map(order => (
     <li key={order.PurchaseOrderNo}>
      <button onClick={() => handleOrderClick(order)}>
       {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo}
      </button>
     </li>
    ))}
   </>
   {selectedOrder && (
    <div className="popup">
     <div className="popup-content">
      <span className="closeBtn" onClick={handleClosePopup}>
       close
      </span>
      <h2 className="order">{selectedOrder.PurchaseOrderTypeAbbreviation} - {selectedOrder.PurchaseOrderNo}</h2>
      <p>Purchase Order Address: {selectedOrder.PurchaseOrderAddress}</p>
      <p>Purchase Order Contact Person: {selectedOrder.PurchaseOrderContactPerson}</p>
      <p>Purchase Order Status: {selectedOrder.PurchaseOrderStatus}</p>
      <table>
       <thead>
        <tr>
         <th>Product SKU</th>
         <th>Quantity Ordered</th>
         <th>Unit Price</th>
         <th>Total Amount</th>
        </tr>
       </thead>
       <tbody>
        {selectedOrder.PurchaseOrderDetails.map((detail) => (
         <tr key={detail.PurchaseOrderRowDetailID}>
          <td>{detail.PurchaseOrderRowProductSKU}</td>
          <td>{detail.PurchaseOrderRowQuantity}</td>
          <td>{detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
          <td>{detail.PurchaseOrderRowTotalAmount}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </div>
   )}
  </div>
 );
};

export default LoadingData;