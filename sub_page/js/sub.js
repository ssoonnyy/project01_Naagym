import painList from "./data.js";

const container = document.querySelector('.container')

for(let i=0; i<painList.length; i++){
  let painBox = document.createElement('div')
  painBox.setAttribute('class','category_sub_item')

  let painImgBox = document.createElement('a')
  painImgBox.setAttribute('class','category_sub_item_img')
  let painImg = document.createElement('img')
  painImg.setAttribute('src',painList[i].src)

  let painInfoBox = document.createElement('div')
  painInfoBox.setAttribute('class','category_sub_item_info')
  let painInfoName = document.createElement('p')
  let painInfoNameText = document.createTextNode(painList[i].name)
  painInfoName.setAttribute('class','category_sub_item_name')
  painInfoName.appendChild(painInfoNameText)

  let painInfoPrice = document.createElement('p')
  let painInfoPriceText = document.createTextNode(painList[i].price)
  painInfoPrice.setAttribute('class','category_sub_item_price')
 

  let painInfoDelPrice = document.createElement('del')
  let painInfoDelPriceText = document.createTextNode(painList[i].delprice)
  painInfoDelPrice.appendChild(painInfoDelPriceText)

  let basketBox = document.createElement('div')
  basketBox.setAttribute('class','basket_box')
  let jjimBtn = document.createElement('button')
  let jjimBtnText = document.createTextNode(' 찜하기')
  jjimBtn.setAttribute('class','jjim_btn')
  let cartBtn = document.createElement('button')
  let cartBtnText = document.createTextNode(' 장바구니')
  cartBtn.setAttribute('class','cart_btn')
  
  let jjimIcon = document.createElement('i')
  jjimIcon.setAttribute('class','fa-regular fa-heart')
  let cartIcon = document.createElement('i')
  cartIcon.setAttribute('class','fa-solid fa-cart-shopping')
  
  basketBox.appendChild(cartBtn)
  basketBox.appendChild(jjimBtn)
  cartBtn.appendChild(cartIcon)
  cartBtn.appendChild(cartBtnText)
  jjimBtn.appendChild(jjimIcon)
  jjimBtn.appendChild(jjimBtnText)

  painInfoBox.appendChild(painInfoName)
  painInfoBox.appendChild(painInfoPrice)

  painInfoPrice.appendChild(painInfoDelPrice)
  painInfoPrice.appendChild(painInfoPriceText)

  painBox.appendChild(painImgBox)
  painImgBox.appendChild(painImg)
  painBox.appendChild(painInfoBox)
  painBox.appendChild(basketBox)
  container.appendChild(painBox)
}


document.addEventListener("DOMContentLoaded",()=>{
  let jjimBtns = document.querySelectorAll('.jjim_btn')
  let cartBtns = document.querySelectorAll('.cart_btn')
  let state = false

  cartBtns.forEach(cartBtn =>{
    cartBtn.addEventListener('click',function(){
      if(!state){
        this.style.color = '#BF1F1F'
        this.children[0].style.color = '#BF1F1F'
        console.log('장바구니 담기')
        state = true
      } else {
        this.style.color = 'black'
        this.children[0].style.color = '#b5b5b5'
        console.log('장바구니 빼기')
        state = false
      }
    })
  })

  jjimBtns.forEach(jjimBtn =>{
    jjimBtn.addEventListener('click',function(){
      
      if(!state){
        this.style.color = '#BF1F1F'
        this.children[0].style.color = '#BF1F1F'
        console.log('찜목록 추가하기')
        state = true
      } else {
        this.style.color = 'black'
        this.children[0].style.color = '#b5b5b5'
        console.log('찜목록 삭제하기')
        state = false
      }
    })
  })

  let painBoxs = document.querySelectorAll('.category_sub_item')

  painBoxs.forEach(()=>{
    painBoxs[0].firstChild.setAttribute('href','./detail_page/detail_index.html')
  })
})

