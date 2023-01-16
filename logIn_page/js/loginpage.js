$(function(){
  let id='sonstar';
  let pw='1234';
  let memberId;
  let memberPw;

  let ercountPw = 1;
  let ercountId = 1;

  $('#member_id').change(function(){  
    memberId = $('#member_id').val();
  });
  $('#member_pw').change(function(){  
    memberPw = $('#member_pw').val();
  });

  $('.login_btn').click(function(){
    if(memberId==id) {
      if(memberPw==pw){
        alert(memberId + '님 환영합니다.');
        window.location='/index.html';
      }else {
        if(ercountPw>=5){
          alert('비밀번호가 5회 이상 틀렸습니다. 계정이 보호되었습니다.');
        }
        if(ercountPw < 5){
          alert('비밀번호가 ' + ercountPw + '회 틀렸습니다. ' + '비밀번호 찾기를 이용해주세요.' + ' 5회 실패시 계정보호조치가 됩니다.')
        } 
        ercountPw++;
      }
    }else{
      if(ercountId>=5) {
        alert('존재하지 않는 아이디입니다. 아이디찾기 혹은 회원가입을 이용해주세요.');
      }
      if(ercountId<5){
        alert('존재하지 않는 아이디 입니다.');
      }
      ercountId++;
    }
  })
})


//회원가입 동의페이지 연결
function openAgreementform (){
  location.href='agreement.html';
};
