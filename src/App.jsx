import { useState } from 'react';
import img from './assets/react.svg'

import './styles.css'

const [login, setLogin] = useState("")
const [senha, setSenha] = useState("")


function App() {

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title">
              <img src={img} alt="" />
            </span>
            <div className="wrap-input">
              <input className={login !== "" ? 'has-val input' : 'input'} type="login"
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Login"></span>
            </div>

            <div className="wrap-input">
              <input className={senha !== "" ? 'has-val input' : 'input'}
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a href="#" className="txt2">Criar conta</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App