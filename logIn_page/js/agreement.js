document.addEventListener("DOMContentLoaded",()=>{

  let allAgree = document.getElementById('agree_allConditions') 
  let agrees = document.querySelectorAll('.condition')
  let agree01 = document.getElementById('condition01')
  let agree02 = document.getElementById('condition02')

  allAgree.addEventListener('click', allCheck)
  agree01.addEventListener('click', agreesCheck)
  agree02.addEventListener('click', agreesCheck)

  function allCheck(){
    if(allAgree.checked == true) {
      agrees.forEach((condition)=>{
        condition.checked = true
      })
    }else {
      agrees.forEach((condition)=>{
        condition.checked = false
      }) 
    }
  } // 전체 동의

  function agreesCheck(){
    if(agree01.checked && agree02.checked){
      allAgree.checked = true
    } else {
      allAgree.checked = false
    }
  } // 개별 전부 동의시 전체동의
})

// 회원가입 양식 작성으로 연결
function openJoinform (){
  location.href='joinform.html';
};


