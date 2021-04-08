import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <div>
      <h1 className="auth__title">Registrar</h1>
      <form
        className="auth__form"
      >
        <input 
          autoComplete="off"
          className="input-field"
          name="name"
          placeholder="Nombre"
          type="text"
        />
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
        <input
          autoComplete="off"
          className="input-field"
          name="confirm-password"
          placeholder="Confirmar contraseña"
          type="password"
        />
        <button
          className="btn btn--block btn--login"
          type="submit"
        >
          Registrar
        </button>

        <hr className="auth__line" />

        <div>
          <p className="auth__text">Registrar con redes sociales</p>
          <button
            className="btn btn--block btn--google"
            type="button"
          >
            <img
              className="icon-google" 
              src="/assets/google.png" 
              alt="Icono de Google" />
            Registrar con Google
          </button>
        </div>

        <p    className="auth__links">
          <Link
            to="/auth/login"
            className="auth__link"
          >
            Tengo una cuenta
          </Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterScreen
