const shoppingCart = []

const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    shoppingCart.forEach((product, idx) => {

            cartEl.innerHTML +=
            `
            <section class="shoppingCart__item">
            <div>${product.name}</div>
            <div class="shoppingCart__quantity">qty: ${product.qty}</div>
            <div>${(product.price * product.qty).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>

            <button id="removeAll${idx}" class="cart_removeAllButton">Remove</button>
            <button id="removeOne${idx}" class="cart_removeOneButton">-</button>
            </section>
            `

            grandTotal += (product.price * product.qty)
            
    })

    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `

    const allRemoveAllButtons = document.querySelectorAll(".cart_removeAllButton")
    const allRemoveOneButtons = document.querySelectorAll(".cart_removeOneButton")

    // Add a click event listener to each button
    for (const allbutton of allRemoveAllButtons) {
        allbutton.addEventListener(
            "click",
            (event) => {
                const indexToRemove = parseInt(event.target.id)
                shoppingCart.splice(indexToRemove, 1)
                displayShoppingCart()
            }
        )

    }
    for (const onebutton of allRemoveOneButtons) {
        onebutton.addEventListener(
            "click",
            (event) => {
                let prodIndex = event.target.id.replace("removeOne", "")
                shoppingCart[prodIndex].qty--
                displayShoppingCart()
            }
        )
        }}