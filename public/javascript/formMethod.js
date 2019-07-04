// eslint-disable-next-line no-unused-vars
const formCancel = () => {
  history.back();
};

// eslint-disable-next-line no-unused-vars
const todoDelete = (id) => {
  console.log(id);
  $.ajax({
    url: './',
    data:
      {
        id: id,
      },
    type: 'DELETE',
    dataType: 'json',
    success: [function(result) {
      if (result.result) {
        location.reload();
      } else {
        location.href = './';
        alert('삭제실패.');
      }
    }],
  });
};

// eslint-disable-next-line no-unused-vars
const todoUpdate = (id, username) => {
  console.log(id);
  console.log(username);

  $.ajax({
    url: './',
    data:
      {
        id: id,
        username: username,
      },
    type: 'PUT',
    dataType: 'json',
    success: [function(result) {
      if (result.result) {
        location.href = `./update/${id}`;
      } else {
        location.href = './';
        alert('삭제실패.');
      }
    }],
  });
};
