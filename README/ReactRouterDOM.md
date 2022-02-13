# React Router DOM

# React Hook Form

-상태관리를 편리하게 해주는 라이브러리

- Validation 또한 편리하게 해줌.

### [React-hook-Form-Docs](https://react-hook-form.com/)

#### install

```
npm install react-hook-form
```

### Use react-hook-form

```typescript
import { useForm } from "react-hook-form";

function Apps() {
  const { register } = useForm();  --> register function
}
```

#### register function

- 이벤트 핸들러 X
- SetState() X
- Props free

1. onBlur(focused)
2. onChange
3. ref

#### watch function

- form의 입력값들의 변화를 볼 수 있게 해주는 함수

#### handlesubmit function

- validation을 담당
- preventDefault() X

## example

```typescript
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} /> // register 함수가 반환하는 객체를 input의 props로 준다.
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
```
