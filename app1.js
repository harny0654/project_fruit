// Function to handle product orders
function orderProduct(productName, productPrice) {
    const confirmOrder = confirm(`คุณต้องการสั่งซื้อ ${productName} ในราคา $${productPrice} ใช่หรือไม่?`);
    
    if (confirmOrder) {
        addToOrderList(productName, productPrice);
    }
}

// Function to add the ordered product to the order list
function addToOrderList(productName, productPrice) {
    const orderList = document.getElementById('order-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - $${productPrice}`;
    orderList.appendChild(listItem);
}

// Function to handle payment confirmation
function confirmPayment() {
    const confirmPayment = confirm('คุณต้องการชำระใช่หรือไม่?');
    
    if (confirmPayment) {
        alert('การชำระเงินสำเร็จ!');
        // Clear the order list after payment
        document.getElementById('order-list').innerHTML = '';
    }
}
