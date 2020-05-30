// we are getting the button once clicked on by a user 
var updateButton = document.getElementsByClassName('update-cart')


for (var i = 0; i < updateButton.length; i++) {
    updateButton[i].addEventListener('click', function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log("productId:", productId, 'action:', action)

        console.log('User :', user)
        if (user === 'AnonymousUser') {
            addCookieItem(productId, action);
        }
        else {
            updateUserOrder(productId, action);
        }
    })
}

function addCookieItem(productId, action) {
     if (action == "add") {
        if (cart[productId] == undefined) {
            cart[productId] = { 'quantity': 1 };
        } else {
            cart[productId]['quantity'] += 1;
        }
    }

    if (action == "remove") {
        cart[productId]['quantity'] -= 1;

        if (cart[productId]['quantity'] <= 0) {
            console.log('remove the item')
            delete cart[productId]
        }
    }
    console.log('Cart :', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ';domain=;path=/';
   

}

// this is a function that is going to fetch the data using the fetch API
function updateUserOrder(productId, action) {
    console.log('Sending the data ');
    url = '/update_item/';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({ 'productId': productId, 'action': action })
    })
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log('data', data)
            location.reload()
        })
}


