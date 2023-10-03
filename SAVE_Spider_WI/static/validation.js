function validateForm() {
    var inputField = document.getElementById("target_url");
    var inputValue = inputField.value;

    // URL 형식 검사
    var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlPattern.test(inputValue)) {
        alert("올바른 URL을 입력해주세요.");
        return false; // 전송을 막습니다.
    }

    return true; // 유효성 검사를 통과하면 전송을 허용합니다.
}

function submitForm() {
    // 이 함수는 유효성 검사 후에 호출됩니다.
    document.getElementById("puzzer").submit();
}
// 사이드 페이지 표시 여부를 추적하기 위한 변수
let sidePageVisible = false;

// 마우스 휠 이벤트 핸들러
function handleMouseWheel(event) {
    // 오른쪽으로 스와이프할 때 사이드 페이지 보이기
    if ((event.deltaX > 0 || event.deltaY < 0) && !sidePageVisible) {
        document.getElementById('sidePage').style.right = '0';
        sidePageVisible = true;
    }
    // 왼쪽으로 스와이프할 때 사이드 페이지 숨기기
    else if ((event.deltaX < 0 || event.deltaY > 0) && sidePageVisible) {
        document.getElementById('sidePage').style.right = '-100%';
        sidePageVisible = false;
    }
}

// 이벤트 리스너 등록
document.addEventListener('wheel', handleMouseWheel);
