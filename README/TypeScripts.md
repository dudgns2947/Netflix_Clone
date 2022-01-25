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

# interfaces

- object 형태(타입)를 TypeScript에게 설명해주는 것(단순히 object 설명)

### 사용법

> #### step1)

```typescript
interface myDivProps {
  bgColor: string;
}

const myDiv = styled.div<myDivProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

interface Props {
  bgColor: string;
}
```

> #### step2)

```typescript
function Circle({ bgColor }: Props) {  --> bgColor의 type은 Props의 object이다.
  return <myDiv />;
}
```

- 잘못된 props를 보내거나, interface에 없는 object를 다루게 된다면 오류가 발생하게 된다.(장점!)
