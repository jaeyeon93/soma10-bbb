const userForm = (username) => {
    $.ajax({
        url: '../form',
        data: { username: username },
        type: 'POST',
        dataType: 'json',
        success: [function (result) {
            if(result.result) {
                location.href = url;
            } else {
                location.reload();
            }
        }]
    });
};

const userFormView = (username, boardId) => {
    $.get('../form/' + username,
        {
            boardId: boardId
        },
        function (data, status) {
            location.href = '../form/' + username;
        }

        //todo, Error 처리
    );
};