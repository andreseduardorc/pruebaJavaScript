const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuBurguer = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const menuMobile = document.querySelector('.mobile-menu')
const productDetailContainer = document.querySelector('#productDetail')



menuEmail.addEventListener('click', toggleDestopMenu)

function toggleDestopMenu(){

    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive')

    }

 desktopMenu.classList.toggle('inactive')
}





menuBurguer.addEventListener('click', togglemenuBurguer)

function togglemenuBurguer(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive')

    }
    menuMobile.classList.toggle('inactive')


    closeProductDetailAside()
    }



const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')

menuCarritoIcon.addEventListener('click',togglemenuCarritoIcon )

function togglemenuCarritoIcon(){

    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    if (!isMobileMenuClosed){
        menuMobile.classList.add('inactive')
          

    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
          

    }
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    } 
    shoppingCartContainer.classList.toggle('inactive')
}

const cardsContainer = document.querySelector('.cards-container')
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
    
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}


const productList = []
productList.push({
    name: 'bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name: 'ruedas',
    price: 20,
    Image: 'https://w7.pngwing.com/pngs/388/905/png-transparent-bicycle-wheels-spoke-the-bicycle-wheel-bicycle-bicycle-frame-motorcycle-vector-bicycle-thumbnail.png'

})
productList.push({
    name: 'casco',
    price: 30,
    Image: 'https://pedalia.cc/wp-content/uploads/2016/08/BikeHelmetWhiteBackground1600-770x513.jpg'

})


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
     
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.Image)
        productImg.addEventListener('click', openProductDetailAside)
     
        const productInfo = document.createElement('div')
     productInfo.classList.add('product-info')
     
     const productInfoDiv = document.createElement('div')
     
     const productPrice = document.createElement('p')
     productPrice.innerText = '$' + product.price;
     
     const productName = document.createElement('p')
     productName.innerText = product.name;
     
     productInfoDiv.appendChild(productPrice)
     productInfoDiv.appendChild(productName)
     
     const productInfoFigure = document.createElement('figure')
     const productImgCart = document.createElement('img')
     productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
     productInfoFigure.appendChild(productImgCart)
     
     productInfo.appendChild(productInfoDiv)
     productInfo.appendChild(productInfoFigure)
     
     productCard.appendChild(productImg)
     productCard.appendChild(productInfo)
     
     cardsContainer.appendChild(productCard)
     
     }

}
renderProducts(productList)









