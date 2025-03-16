// Chuyển dữ liệu sản phẩm sang trang đặt hàng
function redirectToOrderForm(name, price, image) {
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productImage", image);
    window.location.href = "order-form.html";
}

// Hiển thị dữ liệu sản phẩm trong form đặt hàng
function loadOrderDetails() {
    let name = localStorage.getItem("productName");
    let price = localStorage.getItem("productPrice");
    let image = localStorage.getItem("productImage");

    if (name && price && image) {
        document.getElementById("product-name").innerText = name;
        document.getElementById("product-price").innerText = `Giá: ${price}đ`;
        document.getElementById("product-img").src = image;
    }
}

// Xác nhận đặt hàng (có thể mở rộng để gửi dữ liệu)
function confirmOrder() {
    let quantity = document.getElementById("quantity").value;
    alert(`Bạn đã đặt ${quantity} ly ${localStorage.getItem("productName")}!`);
}
