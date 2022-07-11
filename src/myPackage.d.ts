//모듈 선언
//만약 자바스크립트 패키지를 써야 할 경우 이렇게 타입 선언을 해줘야 에러 없이 사용 가능
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
