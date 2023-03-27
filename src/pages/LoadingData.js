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

 console.log(data);

 return (

  <div>
   <ul>
    {data?.mvPurchaseOrders.map((order) => (
     <li key={order.PurchaseOrderID}>
      <button onClick={() => handleOrderClick(order)}>
       {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo}
      </button>
     </li>
    ))}
   </ul>
   {selectedOrder && (
    <div className="popup">
     <div className="popup-content">
      <span className="close" onClick={handleClosePopup}>
       &times;
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

   {/* <h1>Total data: {data?.length}</h1>
   {
    data.map(d => <p>{d.PurchaseOrderTypeAbbreviation}{d.PurchaseOrderNo}</p>)
   } */}
  </div>
 );
};

export default LoadingData;