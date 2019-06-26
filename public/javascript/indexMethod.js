// eslint-disable-next-line no-unused-vars
const userListClick = (username) => {
  $('#loginId').html(username);
  $('#loginModal').modal('show');
};

// eslint-disable-next-line no-unused-vars
const deleteClick = (userId) => {
  $.ajax({
    url: './user/delete',
    data: {
      id: userId,
    },
    type: 'DELETE',
    dataType: 'json',
    success: [function(result) {
      if (result.result) {
        location.href = './';
      } else {
        location.href = './';
        alert('비밀번호가 틀렸습니다.');
      }
    }],
  });
};

// eslint-disable-next-line no-unused-vars
const clickLogin = () => {
  const id = $('#loginId').text();
  const password = $('#loginPassword').val();

  $.ajax({
    url: './user/login',
    data:
      {
        id: id,
        password: password,
      },
    type: 'POST',
    dataType: 'json',
    success: [function(result) {
      if (result.result) {
        const url = './todos/' + id;
        location.href = url;
      } else {
        location.href = './';
        alert('비밀번호가 틀렸습니다.');
      }
    }],
  });
};

// eslint-disable-next-line no-unused-vars
const clickRegister = () => {
  const id = $('#registerId').val();
  const username = $('#registerUsername').val();
  const password = $('#registerPassword').val();

  $.ajax({
    url: './user/register',
    data:
      {
        id: id,
        username: username,
        password: password,
      },
    type: 'POST',
    dataType: 'json',
    success: [function(result) {
      console.log(result.result);
      if (result.result === true) {
        location.href = './';
        alert('회원가입 되었습니다.');
      } else {
        // TODO: 회원가입이 안된 경우, 아이디 중첩확인, db 에러 확인 . 사용자 알려줌
        location.href = './';
      }
    }],
  });
};
