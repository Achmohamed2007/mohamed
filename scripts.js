document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalElement = document.querySelector(".total");
    const checkoutButton = document.querySelector(".checkout");
    const checkoutForm = document.querySelector(".checkout-form form");

    let cartItems = [];
    let total = 0;

    // إضافة المنتجات إلى السلة
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const product = this.closest(".product");
            const productName = product.querySelector("h2").innerText;
            const productPrice = parseFloat(product.querySelector(".price").innerText.replace("$", ""));

            const cartItem = {
                name: productName,
                price: productPrice
            };

            cartItems.push(cartItem);
            updateCart();
        });
    });

    // تحديث السلة
    function updateCart() {
        cartItemsContainer.innerHTML = "";
        total = 0;

        cartItems.forEach(item => {
            const cartItemElement = document.createElement("div");
            cartItemElement.classList.add("cart-item");

            const itemNameElement = document.createElement("p");
            itemNameElement.innerText = item.name;

            const itemPriceElement = document.createElement("p");
            itemPriceElement.innerText = `$${item.price.toFixed(2)}`;

            cartItemElement.appendChild(itemNameElement);
            cartItemElement.appendChild(itemPriceElement);

            cartItemsContainer.appendChild(cartItemElement);

            total += item.price;
        });

        totalElement.innerText = `الإجمالي: $${total.toFixed(2)}`;
    }

    // إتمام الشراء
    checkoutButton.addEventListener("click", function() {
        checkoutForm.style.display = "block";
    });

    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("تم تأكيد الطلب! شكراً لتسوقك معنا.");

        // إعادة تعيين السلة والنموذج
        cartItems = [];
        updateCart();
        checkoutForm.reset();
        checkoutForm.style.display = "none";
    });
});
