import React from 'react';
import styles from './login.module.css';

const handleRegisterClick = () => {
	window.location.href = '/register';
};

const handleLoginClick = () => {
	window.location.href = '/mapRegular';
};

const LoginForm = () => {
	return (
		<div className={styles.containerForm}>
			<div className={styles.loginForm}>
				<h1>Iniciar sesión</h1>
				<form action="">
					<label htmlFor="username">Nombre de usuario</label>
					<input type="text" id="username" name="username" required />
					<label htmlFor="password">Contraseña</label>
					<input type="password" id="password" name="password" required />
					<button onClick={handleLoginClick} type="submit">Iniciar sesión</button>
					<button onClick={handleRegisterClick}>Registrarse</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;