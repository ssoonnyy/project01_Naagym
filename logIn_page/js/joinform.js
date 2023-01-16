// 아이디 중복검사
$(function(){
  let idData = new Array('greencomputer', 'redcomputer','bluecomputer','yellowcomputer','blackcomputer');
  let = userId;

  $('#userId').change(function(){  
    userId = $('#userId').val();
  });

  $('.userId_check').click(function(){
    
    for(let i = 0; i <= idData.length; i++){
      if(idData[i] == userId){
        alert('이미 사용중인 아이디 입니다.')
        break;
      }else{
        if(userId != idData[1] && userId != idData[2] && userId != idData[3] && userId != idData[4]){
          if(userId.length>=6 && userId.length<=20) {
            alert('사용가능한 아이디입니다.'); break;
          }
        } 
        if(userId.length<6){
          alert('아이디는 영문 숫자 6~20자로 입력해주세요.'); break;
        }
        if($('#userId').val() =='') {
          alert('아이디를 입력해주세요.'); break;
        }
      }
    }
  });
});

//로그인폼 서비스

document.addEventListener("DOMContentLoaded",()=>{
  let userId = document.getElementById('userId')
  let userTellMid = document.getElementById('userTell_mid')
  let userTellLast = document.getElementById('userTell_last')
  
  userId.addEventListener('change',resultId)
  userTellMid.addEventListener('keyup',moveTell)

  function moveTell(){
    if(userTellMid.value.length>=4){
      userTellLast.focus()
    };
  }
})


// 비밀번호 확인
$(function(){
  $('#userPw').keyup(function(){
    $('.userPw_result').text('');
  });

  let pw01;
  let pw02;

  $('#userPw').change(function(){
    pw01 = $('#userPw').val();
  });
  $('#userPw_re').change(function(){
    pw02 = $('#userPw_re').val();
  });
  
  $('#userPw_re').keyup(function(){

    if($('#userPw').val() != $('#userPw_re').val()){
      $('.userPw_result').text('비밀번호가 일치하지 않습니다.');
      $('.userPw_result').css('color','red');
    }else {
      $('.userPw_result').text('사용가능한 비밀번호입니다.');
      $('.userPw_result').css('color','green');
      $('#userName').focus()
    }
  });
});

