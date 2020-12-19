
interface Props {
  msg: string;
}

const Hello = ({ msg }: Props) => {

  function doSomething() {
    alert('Hello')
  }

  return <h1 onClick={doSomething}>Hello,  {msg}</h1>
}



export default Hello;

