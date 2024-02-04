import React from "react";

export default function TabComponent(props: any) {
  // const userId = props.userId;
  // const onLogin = props.onLogin;
  const { onLogin, userId } = props;
  return (
    <>
      <h1 onClick={onLogin}>탭 컴포넌트 : {userId}</h1>
    </>
  );
}
