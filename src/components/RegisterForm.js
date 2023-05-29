import React, {useEffect} from 'react';
import styles from './register.module.css';

const handleFinalizarRegistroClick = () => {
	window.location.href = '/';
};

const handleVolverClick = () => {
	window.location.href = '/login';
};

const RegisterForm = () => {
	useEffect(() =>
	{
		const form = document.querySelector('form');
		const inputs = document.querySelectorAll('input');
		const botonRegistro = document.getElementById('btn-registro');

// Función para validar el campo de nombre y apellido
		function validarNombreApellido(input) {
			const regex = /^[a-zA-Z\s]*$/;
			if (!regex.test(input.value.trim()) || input.value.trim() === '') {
				input.classList.add('invalido');
				input.nextElementSibling.style.display = 'block';
				console.log("False");
				return false;
			} else {
				input.classList.remove('invalido');
				console.log("True");
				return true;
			}
		}

// Función para validar el campo de número de teléfono
		function validarTelefono(input) {
			const regex = /^[0-9]*$/;
			if (!regex.test(input.value)) {
				input.classList.add('invalido');
				input.nextElementSibling.style.display = 'block';
				console.log("False");
				return false;
			} else {
				input.classList.remove('invalido');
				console.log("True");
				return true;
			}
		}

// Función para validar el campo de correo electrónico
		function validarCorreo(input) {
			const regex = /\S+@\S+\.\S+/;
			if (!regex.test(input.value)) {
				input.classList.add('invalido');
				input.nextElementSibling.style.display = 'block';
				console.log("False");
				return false;
			} else {
				input.classList.remove('invalido');
				console.log("True");
				return true;
			}
		}

// Validar los campos en tiempo real
		inputs.forEach((input) => {
			input.addEventListener('input', (e) => {
				if (input.type === 'text') {
					validarNombreApellido(input);
				} else if (input.type === 'number') {
					validarTelefono(input);
				} else if (input.type === 'email') {
					validarCorreo(input);
				}
				if (validarNombreApellido(inputs[0]) && validarNombreApellido(inputs[1]) && validarTelefono(inputs[2]) && validarCorreo(inputs[3])) {
					botonRegistro.disabled = false;
				} else {
					botonRegistro.disabled = true;
				}
			});
		});

	}, [])

	return (
		<div>
			<div className={styles.containerRegister}>
				<div className={styles.registerForm}>
					<h1>Registrarse</h1>
					<form action="" className={styles.registerFormulario}>
						<label htmlFor="nombre">Nombre</label>
						<input type="text" id="nombre" name="nombre" required />
						<label htmlFor="apellido">Apellido</label>
						<input type="text" id="apellido" name="apellido" required />
						<label htmlFor="telefono">Número de teléfono</label>
						<input type="text" id="telefono" name="telefono" required />
						<label htmlFor="correo">Correo electrónico</label>
						<input type="email" id="correo" name="correo" required />
						<button onClick={handleFinalizarRegistroClick} id="btn-registro" className={styles.btnRegistro} disabled>Finalizar Registro</button>
						<button onClick={handleVolverClick} type="button">Volver</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;