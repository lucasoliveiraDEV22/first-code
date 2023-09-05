import React, { useState, useRef } from "react";
import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  // const [name, setName] = useState ();
  // const [age, setAge] = useState ();   //USO AQUI PARA HOOK DE ESTADO
  function addNewUser() {
    // console.log (inputName.current.value)
    // console.log (inputAge.current.value)
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  function deleteUser (userId) {
    // console.log (userId)
    const newUsers = users.filter (user => user.id !== userId)
    setUsers (newUsers)
  }
  /*function changeInputName (event)  {   //USO AQUI PARA HOOK DE ESTADO
    // console.log (event.target.value)
    setName (event.target.value)
  }

  function changeInputAge (event)  {
    // console.log (event.target.value)
    setAge (event.target.value)
  }*/
  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-do-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default App;
