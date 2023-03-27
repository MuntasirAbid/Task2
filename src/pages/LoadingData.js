import "./LoadingData.css"
import React, { useEffect, useState } from 'react';

const LoadingData = () => {

 const [selectedOrder, setSelectedOrder] = useState(null);
 const [data, setData] = useState()

 const handleOrderClick = (order) => {
  setSelectedOrder(order);
 };

 const handleClosePopup = () => {
  setSelectedOrder(null);
 };

 useEffect(() => {
  fetch('purchaseorders.json')
   .then(res => res.json())
   .then(data => setData(data
   ))
   .catch(error => console.log(error))

 }, [])

 return (

  <div className='container'>
   <>
    {data?.mvPurchaseOrders.map((order) => (
     <li key={order.PurchaseOrderID}>
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
       X
      </span>
      <h2>{selectedOrder.PurchaseOrderTypeAbbreviation} - {selectedOrder.PurchaseOrderNo}</h2>
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
         <tr key={detail.PurchaseOrderRowID}>
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