import './App.css'
import React from 'react';
import CustomInput from './componente/My';


const App: React.FC = () => {
  return (
    <div>
      <form>
        <p>Entre em contato</p>
        <div>
          <label htmlFor="name">Nome:</label>
          <CustomInput type="text" defaultValue="" placeholder="Digite seu nome" />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <CustomInput type="email" defaultValue="" placeholder="Digite seu e-mail" />
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <CustomInput type="text" defaultValue="" placeholder="Digite seu telefone" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
