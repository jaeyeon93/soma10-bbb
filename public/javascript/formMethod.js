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

const todoUpdate = (boardId, username) => {
  $.ajax({
    url: './',
    data:
      {
        boardId: boardId,
        username: username,
      },
    type: 'PUT',
    dataType: 'json',
    success: [function(result) {
      if (result.result) {
        location.href = `./update/${boardId}`;
      } else {
        location.href = './';
        alert('삭제실패.');
      }
    }],
  });
};
