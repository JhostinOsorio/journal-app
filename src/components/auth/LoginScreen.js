import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div>
      <h1 className="auth__title">Login</h1>
      <form
        className="auth__form"
      >
        <input 
          autoComplete="off"
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
        />
        <input
          autoComplete="off"
          className="input-field"
          name="password"
          placeholder="Contraseña"
          type="password"
        />
        <button
          className="btn btn--block btn--login"
          type="submit"
        >
          Ingresar
        </button>

        <hr className="auth__line" />

        <div>
          <p className="auth__text">Ingresa con redes sociales</p>
          <button
            className="btn btn--block btn--google"
            type="button"
          >
            <img
              className="icon-google" 
              src="/assets/google.png" 
              alt="Icono de Google" />
            Ingresa con Google
          </button>
        </div>

        <p    className="auth__links">
          <Link
            to="/auth/register"
            className="auth__link"
          >
            Crear una cuenta
          </Link>
        </p>
      </form>
    </div>
  )
}

export default LoginScreen
