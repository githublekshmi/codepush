let products=[
    {name:"Tshirt",price:50},
    {name:"Mask",price:150},
    {name:"Shoe",price:50},

];

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
function addTocart(index){
    cart.push(index)
    localStorage.setItem('cart',JSON.stringify(cart))
    alert(`${products[index].name} added to cart`)

}
