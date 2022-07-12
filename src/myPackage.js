//@ts-check : 타입스크립트 체크 좀 해주세요!
//js에 당장 ts 를 쓰지 않더라도 코멘트로 체크 가능. 코드를 완전히 타입스크립트 코드로 바꿀 필요없음
//ts에서 코멘트를 띄워줌
//tsconfig,js에서 allowJS true
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */

export function exit(code) {
  return code + 1;
}
