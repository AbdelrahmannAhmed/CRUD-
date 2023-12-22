var productName = document.getElementById('productNAME')
var productPrice = document.getElementById('productPRICE')
var productCat = document.getElementById('productCAT')
var productDesc = document.getElementById('productDESC')
var productArray = []
if (localStorage.getItem('newProduct')) {
    productArray = JSON.parse(localStorage.getItem('newProduct'))
    showItems()
}

function mainFunction() {
    getItems()
    showItems()
    clearInputs()
}


function getItems() {

    var product = {
        name: productName.value,
        price: productPrice.value,
        Category: productCat.value,
        Description: productDesc.value
    }

    productArray.push(product)
    localStorage.setItem('newProduct', JSON.stringify(productArray))

}

function showItems() {
    cartona = ''
    for (i = 0; i < productArray.length; i++)
        cartona += ` <tr>
    <td>${productArray[i].name}</td>
    <td>${productArray[i].price}</td>
    <td>${productArray[i].Category}</td>
    <td>${productArray[i].Description}</td>
    <td><button class="btn btn-danger" onclick=" deleteItems(${[i]})"> Delete</button></td>
    <td><button class="btn btn-warning" onclick="updateItemsA(${[i]})"> update</button></td>
    </tr>`

    document.getElementById('demo').innerHTML = cartona
}
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
    productCat.value = ''
    productDesc.value = ''
}

function deleteItems(x) {
    productArray.splice(x, 1)
    localStorage.setItem('newProduct', JSON.stringify(productArray))
    showItems()
}
var updatedItem
function updateItemsA(item) {

    updatedItem = item
    document.getElementById('Updatebtn').style.display = 'inline'
    document.getElementById('Addbtn').style.display = 'none'
    productName.value = productArray[item].name
    productPrice.value = productArray[item].price
    productCat.value = productArray[item].Category
    productDesc.value = productArray[item].Description


}
function updateItemsB() {
    document.getElementById('Updatebtn').style.display = 'none'
    document.getElementById('Addbtn').style.display = 'inline'
    productArray[updatedItem].name = document.getElementById('productNAME').value
    productArray[updatedItem].price = document.getElementById('productPRICE').value
    productArray[updatedItem].Category = document.getElementById('productCAT').value
    productArray[updatedItem].Description = document.getElementById('productDESC').value
    localStorage.setItem('newProduct', JSON.stringify(productArray))
    showItems()
    clearInputs()


}

function searchitem(y) {
    cartona2 = ''
    for (i = 0; i < productArray.length; i++) {
        if (productArray[i].name.toLowerCase().includes(y.toLowerCase())) {
            cartona2 += `<tr>
            <td>${productArray[i].name.replace(y, `<span class="text-bg-warning" >${y}</span>`)}</td>
            <td>${productArray[i].price}</td>
            <td>${productArray[i].Category}</td>
            <td>${productArray[i].Description}</td>
            <td><button class="btn btn-danger" onclick=" deleteItems(${[i]})"> Delete</button></td>
            <td><button class="btn btn-warning" onclick="updateItemsA(${[i]})"> update</button></td>
            </tr>
        
            `
            document.getElementById('demo').innerHTML = cartona2
        }
    }
}


function check(x) {

    var regex = /^[A-Z][A-Za-z0-9 ]{0,20}$/
    if (regex.test(x)) {
        console.log('ok');
        document.getElementById('alert').style.display = 'none'

    }
    else {
        document.getElementById('alert').style.display = 'block'
    }
}


function check2(x) {
    var regex = /^[1-9][0-9]{0,8}$/
    if (regex.test(x)) {
        console.log('ok');
        document.getElementById('alert2').style.display = 'none'

    }
    else {
        document.getElementById('alert2').style.display = 'block'
    }
}


function check3(x) {
    var regex = /^[A-Za-z0-9 ]{0,20}$/
    if (regex.test(x)) {
        document.getElementById('alert3').style.display = 'none'

    }
    else {
        document.getElementById('alert3').style.display = 'block'
    }
}