# TypeScript

- 자바스크립트는 Type이 없다 (String, Integer, Char 등등...)

#### ex)

```javascript
function plus = (a,b) => a+b;   --> plus(2,3) = 5 : O
                                --> plus(1,'hello') = '1hello' : X
```

위처럼 코드에 오류가 있을 경우 tpyescript가 미리 알려준다.(protecting)

#### typescript 적용

```typescript
function plus = (a:number, b:number) => a+b;   --> plus(2,3) = 5 : O
                                               --> plus(1,'hello') : 빨간줄 생김
```

## 사용법

[참고사이트](https://create-react-app.dev/docs/adding-typescript#installation)

> install: project를 만들 때 사용 : 추천하는 방법

```
npx create-react-app my-app --template typescript
```

> install : 이미 프로젝트를 만들었을 때 사용 : version 충돌 가능성 높음

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

> 필요한 모듈 다운로드

```
npm i --save-dev @types/styled-components
```
