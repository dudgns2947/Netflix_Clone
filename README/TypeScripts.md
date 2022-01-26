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

### [참고사이트(Link)](https://create-react-app.dev/docs/adding-typescript#installation)

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

- object 형태(타입)를 TypeScript에게 설명해주는 것(단순히 object를 설명)

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
  return <myDiv bgColor={bgColor} />;
}
```

- 잘못된 props를 보내거나, interface에 없는 object를 다루게 된다면 오류가 발생하게 된다.(장점!)

## Optional Props

```typescript
interface myDivProps {
  bgColor: string;
}
```

-> 위의 경우에는 bgColor라는 props는 **반드시** 있어야 한다는 점이다.(없으면 오류 발생)

따라서 필수적으로 사용하지 않아도 되는 props는 아래와 같이 사용하며 이를 Optional Props라고 한다.

```typescript
interface myDivProps {
  bgColor?: string; --> ?를 붙임
}

function Circle({ bgColor }: Props) {
  return <myDiv bgColor={bgColor ?? "black"} />; --> props가 없을경우 default 값으로 balck을 가진다
```

# Ts & React: events

- events에도 type을 부여할 수 있다.

```typescript
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");   --> stast 부여
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {  --> event는 기본적으로 any type이지만 typescript로 type을 부여했다
    const {
      currentTarget: { value },  --> React에선 target이 아니라 currentTarget을 사용함
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {  --> HTMLFromElemet에 사용됨.
    event.preventDefault();
    console.log("hello", value);
  };

    return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
```

### [React Event 참고사이트(Link)](https://reactjs.org/docs/events.html)

# Themes

### [참고사이트(Link)](https://styled-components.com/docs/api#typescript)

> step1) make file "styled.d.ts" then pasted

```typescript
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {   --> DefaultTheme을 제공해준다.
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
```
