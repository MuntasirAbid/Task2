Explaining below what I have done here:

This code is a React functional component named LoadingData, which is responsible for displaying a list of purchase orders as links, and a pop-up window that displays additional information related to each order when clicked.

The component uses React's useState hook to define two states: data and selectedOrder. data stores the response of the purchaseorders.json file fetched using the useEffect hook, which runs only once when the component mounts. selectedOrder stores the currently selected order, which is initially set to null.

The component renders a div element with a class name container, which wraps two fragments: the first fragment contains a list of purchase orders, where each order is rendered as a li element with a button element that displays the order abbreviation and number. The second fragment renders a pop-up window if an order is selected. The pop-up window is defined using two nested div elements with class names popup and popup-content. The popup-content div contains information related to the selected order, including its abbreviation and number, address, contact person, status, and a table with the details of the purchase order.

When an order button is clicked, the handleOrderClick function is called with the corresponding order object as an argument. This function sets the selectedOrder state to the clicked order, which triggers the rendering of the pop-up window.

The pop-up window is closed by clicking on the "close" button or outside the pop-up window. When the "close" button is clicked, the handleClosePopup function is called, which sets the selectedOrder state to null. The pop-up window is hidden when the selectedOrder state is null.

Finally, the LoadingData component is exported as the default export of the module.
 
