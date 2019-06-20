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
        dataType: "json"                         // 서버에서 보내줄 데이터의 타입
    })

        .done(function (json) {
            // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
        })

        .fail(function (xhr, status, errorThrown) {
// HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
        })

        .always(function (xhr, status) {
            // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
        });
}