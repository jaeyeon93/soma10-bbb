const userListClick = username => {
    $("#loginId").html(username);
    $("#loginModal").modal('show');
}

const deleteClick = userId => {
    $.ajax({
        url: "http://localhost:3000/user/delete",
        data: {
            id: userId,
        },
        type: "DELETE",
        dataType: "json",
        success: [function (result) {
            console.log(result.result);
            if (result.result === true) {
                location.href = "http://localhost:3000";
            } else {
                location.href = "http://localhost:3000";
                alert("비밀번호가 틀렸습니다.");
            }
        }]
    })
}

const clickLogin = () => {
    const id = $('#loginId').text();
    const password = $('#loginPassword').val();

    $.ajax({
        url: "http://localhost:3000/user/login",
        data: {
            id: id,
            password: password,
        },
        type: "POST",
        dataType: "json",
        success: [function (result) {
            console.log(result.result);
            if (result.result === true) {
                const url = "http://localhost:3000/user/:" + id + ".html";
                location.href = url;
            } else {
                location.href = "http://localhost:3000";
                alert("비밀번호가 틀렸습니다.");
            }
        }]
    })
}

const clickRegister = () => {
    let id = $("#registerId").val();
    let username = $("#registerUsername").val();
    let password = $("#registerPassword").val();

    $.ajax({
        url: "http://localhost:3000/user/register",
        data: {
            id: id,
            username: username,
            password: password,
        },
        type: "POST",
        dataType: "json",
        success: [function (result) {
            console.log(result.result);
            if (result.result === true) {
                location.href = "http://localhost:3000";
                alert("회원가입 되었습니다.");
            } else {
                //TODO: 회원가입이 안된 경우, 아이디 중첩확인, db 에러 확인 . 사용자 알려줌
                location.href = "http://localhost:3000";
            }
        }]
    });
}