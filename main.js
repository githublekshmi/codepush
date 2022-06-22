let products=[
    {name:"apple",price:12},
    {name:"orange",price:13}
]
let cart=[]
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
        })
        items.append(item)
    });

}
load();
function addTocart(index){
    cart.push(index)
    localStorage.setItem('cart',JSON.stringify(cart))
    alert(`${products[index].name} added to cart`)
    
}
function localStoragegetItem(){
    for(i=0;i<cart.length;i++)
    console.log(i)

}
localStoragegetItem();
