import React from "react";

type GreetType = {
  name: string
  mesaggeCount: number
}

const Greet = (props: GreetType) => {
  return (
    <div>
      <h1>Merhaba {props.name} write {props.mesaggeCount}...</h1>
    </div>
  );
};

export default Greet;
