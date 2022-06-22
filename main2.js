let products=[
    {name:"Tshirt",price:50},
    {name:"Mask",price:150},
    {name:"Shoe",price:50},

];
let cart=[]

saveCart();
function load(){
    products.forEach((i,index)=>{
        let item=document.createElement('div');
    item.innerHTML=`
    <div class="product">
    <p class="name">${i.name}</p>
    <p class="price">${i.price}</p>
    <button class="add">Add to Cart</button>
    </div>`

    const items=document.getElementById('items');
    item.getElementsByClassName('add')[0].addEventListener('click',()=>{
        addTocart(index)
        console.log(index)
        

    });
    items.append(item)

    });
    
}
load();
var Item=function(name,price){
    this.name=name
    this.price=price
};
function addItemTocart(name,price){
    for (var i in cart){
    if (cart[i].name=name)
    if(cart[i].price=price)
    return;
    }

}
var item=new Items(name,price);


function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cart))

}
function loadCart(){
    cart=JSON.parse(localStorage.getItem('cart'))
 
}
