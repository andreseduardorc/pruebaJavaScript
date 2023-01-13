const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')


menuEmail.addEventListener('click', toggleDestopMenu)

function toggleDestopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive')

    }

 desktopMenu.classList.toggle('inactive')
}

const menuBurguer = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu')



menuBurguer.addEventListener('click', togglemenuBurguer)

function togglemenuBurguer(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive')

    }
    menuMobile.classList.toggle('inactive')
    }



const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuCarritoIcon.addEventListener('click',togglemenuCarritoIcon )

function togglemenuCarritoIcon(){

    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    if (!isMobileMenuClosed){
        menuMobile.classList.add('inactive')
          

    }
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    } 
    aside.classList.toggle('inactive')
}

const cardsContainer = document.querySelector('.cards-container')


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

for (product of productList){
   const productCard = document.createElement('div')
   productCard.classList.add('product-card')

   const productImg = document.createElement('img')
   productImg.setAttribute('src', product.Image)

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





