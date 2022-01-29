# Recoil

### Recoil이란?

ReactJS를 위한 state management 라이브러리이다.

컴포넌트가 어디에 있던지, Application이 특정 Value에 접근할 때 사용한다(Global State)

ex) Login/Logout시 다른 화면을 보이고 싶을 때 사용.

원래는 Router를 통해 사용하고자 하는 components 까지 props를 계층적으로 내리지만, Recoil의 Atom을 사용하면 이를 해결해준다.

> step1)

```
npm install recoil
```

> step2)

```typescript
<RecoilRoot>
...
<App/>
...
<RecoilRoot/>
```

> step3) make atom.ts

```typescript
import {atom} from "recoil";

export const YourAtom = atom({
    key: "Name";
    ...
});

```

> step4) Use Atom

```typescript
import { useRecoilValue } from "recoil";

const Atom = useRecoilValue(YourAtom);
```

> step5) modify Atom

```typescript
const setterFunc = useSetRecoilState(YourAtom);
const toggleAtom = () =>  setterFunc((prev) => !prev);

<button onClick={toggleAtom}></button>; --> Value가 boolean일 때 사용
```

# 공식문서(반드시 읽을 것)

### [Reacoil 공식문서](https://recoiljs.org/ko/)

### [useRecoilValue 레퍼런스](https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/)

### [useSetRecoilState 레퍼런스](https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState)
