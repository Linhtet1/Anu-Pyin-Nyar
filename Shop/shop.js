const product=[
    {
        id: 0,
        image: 'thekiss.jpeg',
        title: 'The Kiss- Gustav Klimt',
        price: 200

    },
    {
        id: 1,
        image: 'setbrush.jpeg',
        title: 'Set brush',
        price: 40
    },
    {
        id: 2,
        image: 'thinbrush.webp',
        title: 'Thin brush',
        price: 6
    },
    {
        id: 3,
        image: 'canvaspaintingboard.jpeg',
        title: '12 Canvas Panels',
        price: 99
    },
    {
        id: 4,
        image: 'paletteknife.jpg',
        title: 'Palette Knife',
        price: 2

    },
    {
        id: 5,
        image: 'canvasdropcloth.jpeg',
        title: 'Canvas Drop Cloth',
        price: 7
    },
    {
        id: 6,
        image: 'boardstand.jpeg',
        title: 'Board Stand',
        price: 8
    },
    {
        id: 7,
        image: 'diyframe.jpeg',
        title: 'Diy frame',
        price: 9
    },
    {
        id: 8,
        image: 'colourpencil.jpeg',
        title: 'Colour Pencil',
        price: 12
    },
    {
        id: 9,
        image: 'brushwash.jpeg',
        title: 'The brush wash',
        price: 11

    },
    {
        id: 10,
        image: 'colorbook.jpg',
        title: 'Color book',
        price: 8
    },
    {
        id: 11,
        image: 'pallete.jpg',
        title: 'Pallete',
        price: 8
    }
];
const categories =[...new Set(product.map((item)=>{
    return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title,price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )

}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j =0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                     <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>` +
                "<i class ='fas fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

