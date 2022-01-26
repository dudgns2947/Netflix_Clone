# Styled Components

- styled-Components 란 설정 변경이 가능한 style을 제공해준다.
- 중복된 styled들을 처리해주기 위함

> #### step1 (Terminal)

```
npm i styled-components
```

> #### step2 (Top of the code)

```
import styled from "styled-components";
```

> #### step3 (In your code)

```javascript
const Mydiv = styled.div`    --> 사용법
  display: flex;
  background-color: tomato;
  width: 100px;
  height: 100px;
  ...
  {every I want styled}
`;

const myText = styled.text`
  color: white;
  ...
`;

>>> using
<Mydiv>
  <myText>Hello</myText>
</Mydiv>
```

- Styled-Components를 사용하지 않는 코드.

```javascript
<div style={{display: 'flex'}}>
  <div style={{width: 100px, height: 100px, background-color: tomato}}></div>
  <div style={{width: 100px, height: 100px, background-color: tomato}}></div>
</div>
```

## Styled Components - Extends

- Styled Components에 Props를 만들어 사용할 수 있다.

> ex1) props적용

```javascript
const Box = styled.div`
  background-color: ${(props) => props.BgColor};  --> props 적용
  width: 100px;
  height: 100px;
`;
----------------------------------
<Mydiv>
  <Box BgColor="tomato">
  <Box BgColor="black">
</Mydiv>
```

> ex2) 만들어놓은 components 확장

```javascript
const Box = styled.div`
  background-color: ${(props) => props.BgColor};
  width: 100px;
  height: 100px;
`;
----------------------------------
const Circle = styled(Box)`   --> 확장
  border-radius: 50px;
`;
```

## Styled Components - As

- 컴포넌트의 태그를 바꾸고 싶은데 style은 유지하고싶을 경우에 사용

> ex) button이지만, a tag로 변경하는 코드(버튼을 누르면 다른 링크로 이동가능)

```javascript
const Btn = styled.button`
  Backgrond-color: tomato;
`;
=============================
<Mydiv>
  <Btn as="a" href="#"></Btn>  --> as 적용
</Mydiv>
```

## Styled Components - HTML attributes

- HTML에서 원하는 attribute를 적용시켜줄 수 있다.

> ex) Input - attrs

```javascript
const Input = styled.input.attrs({ required: true, ..., ... })`
  background-color: tomato;
`;
================================================================
<Mydiv>
  <Input />   --> required attribute 적용
  <Input />   --> required attribute 적용
</Mydiv>

```

## Styled Components - Animation

- 애니메이션 또한 comonents화 시킬 수 있다!

> #### step1) importing keyframes

```javascript
import styled, { keyframes } from "styled-components";
```

> #### step2) make keyframes-components

```javascript
const MyAnimation = keyframes`   --> Keyframes 적용
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;
```

> #### step3) Adding the Animation

```javascript
const Box = styled.div`
  background-color: ${(props) => props.BgColor};
  width: 100px;
  height: 100px;
  animation: ${MyAnimation} 1s linear infinite;  --> Animation 적용
`;
```

## Styled Components - Pseudo Seletors

- Styled Components에서 pseudo selector를 사용할 수 있다

> #### step1) 부모 componets에 적용

```javascript
const Box = styled.div`
  background-color: ${(props) => props.BgColor};
  width: 100px;
  height: 100px;
  animation: ${MyAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {         --> & === span
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
```

> #### step2) Using

```javascript
<Box>
  <span>DoiT!</span> --> span에 hover, active가 적용됨
</Box>
```

### Styled Components안의 element를 선택하는 방법

위의 코드를 살펴보았을 때, span이라는 tag에만 적용된다.(한 tag에만 의존한다)
따라서 새로운 Componetns를 만들어 사용할 수 있게한다.

### ex)

> #### step1

```javascript
const mySpan = styled.span`
  font-size: 36px;
  &:hover {
    color: black;
  }
`;
```

> #### step2

```javascript
const Box = styled.div`
  background-color: ${(props) => props.BgColor};
  width: 100px;
  height: 100px;
  animation: ${MyAnimation} 1s linear infinite;
  ${mySpan}:hover {     --> tag에 관계없이 적용됨
    font-size: 98px;
  }
`;
```

> #### step3

```javascript
<Box>
  <mySpan>DoiT!</mySpan> --> span components 적용
</Box>
```

## Styled Components - Themes

- 다크모드, 화이트모드와 같이 테마를 설정할 수 있다.

> #### step1) importing ThemeProvider

```javascript
import { ThemeProvider } from "styled-components";
```

> #### step2) make Themes

```javascript
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};
```

> #### step3) Export Themes

```javascript
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

> #### step4) Access the theme components

```javascript
const Title = styled.h1`
  color: ${(props) => props.theme.textColor}; --> theme 적용
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
  background-color: ${(props) => props.theme.backgroundColor}; --> theme 적용
`;
```

### [참고사이트 (Click!)](https://styled-components.com/docs/advanced)

# Reset CSS

> step1)

```typescript
import { createGlobalStyle } from "styled-components";
```

> step2)

```typescript
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
```

### [Reset CSS 참고사이트(Link1)](https://cssdeck.com/blog/scripts/eric-meyer-reset-css/)

### [Reset CSS 참고사이트(Link2)](https://github.com/zacanger/styled-reset/blob/master/src/index.ts)

### [Font Import 사이트(Link3)](https://fonts.google.com/)

### [Flat UI Color (Link4)](https://flatuicolors.com/palette/gb)
