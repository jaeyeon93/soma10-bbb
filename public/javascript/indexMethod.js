
function userListClick(username) {
    $("#loginId").html(username);
    $("#loginModal").modal('show');
}

function clickLogin() {
    let id = $('#loginId').text();
    let password = $('#loginPassword').val();

    $.ajax({
        url: "http://localhost:3000/user/login", // 클라이언트가 요청을 보낼 서버의 URL 주소
        data: {
            id: id,
            password: password,
        },               // HTTP 요청과 함께 서버로 보낼 데이터
        type: "POST",                             // HTTP 요청 방식(GET, POST)
        dataType: "json",                         // 서버에서 보내줄 데이터의 타입
        success : [function (result) {
            console.log(result.result);
            if(result.result === true){
                const url = "http://localhost:3000/user/:"+id+".html";
                location.href= url;
            }else{
                location.href="http://localhost:3000";
            }
        }]
    })
}

function clickRegister() {
    let id = $("#registerId").val();
    let username = $("#registerUsername").val();
    let password = $("#registerPassword").val();

    $.ajax({
        url: "http://localhost:3000/user/register", // 클라이언트가 요청을 보낼 서버의 URL 주소
        data: {
            id: id,
            username: username,
            password: password,
        },               // HTTP 요청과 함께 서버로 보낼 데이터
        type: "GET",                             // HTTP 요청 방식(GET, POST)
        dataType: "json"                      // 서버에서 보내줄 데이터의 타입

    });
}

