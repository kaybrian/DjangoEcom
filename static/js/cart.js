// we are getting the button once clicked on by a user 
var updateButton = document.getElementsByClassName('update-cart')


for (var i = 0; i < updateButton.length; i++){
    updateButton[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log("productId:",productId, 'action:',action)

        console.log('User :', user)
        if (user == 'AnonymousUser'){
            console.log('Not logged in')
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

// this is a function that is going to fetch the data using the fetch API
function updateUserOrder(productId, action){
    console.log('Sending the data ');
    url = '/update_item/';
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken
        },
        body:JSON.stringify({'productId':productId,'action':action})
    })
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log('data',data)
        location.reload()
    })
}