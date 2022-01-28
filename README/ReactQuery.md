# React Query

React 어플리케이션에서 서버 state를 fetching, caching, synchronizing, updating할 수 있도록 도와주는 라이브러리 이다.
[참고사이트1 (Link)](https://react-query.tanstack.com/reference/useQuery#_top)

> step1) install react-query

```typescript
npm i react-query
```

> step2) importing react-query and settings

```typescript
// Create a CLient
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
```

> step3) Use the Provider

```typescript
function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
```

> step4) create fetcher function

- 반드시 fetch promise를 return

```typescript
export async function fetchItem() {
  const response = await fetch("API-Link");
  const json = await response.json();
  return json;
}

=> 다음과 같이 변경
export function fetchfun(){
    retrun fetch("API-Link").then((response)=>
    response.json()
    );
}

```

> step5) Use Query

```typescript
import { useQuery } from "react-query";

const { isLoading, data } = useQuery("query-key", fetchfun);
```

1. useQuery는 fetcher 함수를 호출한다
2. fetcher함수가 끝나면 fetcher함수는 json을 return한다.
3. return된 data를 저장한다

# Query Key

React Query는 Query Key를 기반으로 쿼리 캐싱을 관리한다.
[참고사이트2 (Link)](https://react-query.tanstack.com/guides/query-keys)
