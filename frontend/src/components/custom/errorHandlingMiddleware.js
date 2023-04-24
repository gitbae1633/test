export const errorHandlingMiddleware = (error) => {
  // 에러 처리 로직 작성
  console.error("통신 중 에러가 발생하였습니다:", error);
  // 추가적인 에러 처리 로직을 이곳에 작성 가능
  // 예를 들어, 사용자에게 에러 메시지를 표시하거나 로깅 등을 수행할 수 있음
  localStorage.clear();
  window.location.href = "/";
};
