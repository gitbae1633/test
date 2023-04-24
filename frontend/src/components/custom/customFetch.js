import { errorHandlingMiddleware } from "./errorHandlingMiddleware";

// customFetch 함수는 fetch를 확장한 함수로, 에러 발생 시 errorHandlingMiddleware 함수를 호출합니다.
export const customFetch = (url, obj) => {
  return fetch(url, {
    ...obj,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => {
      // 응답 처리
      if (!response.ok) {
        throw new Error("응답이 실패하였습니다.");
      }
      return response;
    })
    .catch((error) => {
      // 에러 처리
      errorHandlingMiddleware(error); // 공통 에러 처리 로직 호출
      throw error; // 다시 에러를 던져서 이후의 catch 블록에서도 에러 처리 가능하도록 함
    });
};
