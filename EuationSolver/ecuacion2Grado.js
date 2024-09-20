/* Reseteo básico de márgenes y padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos generales */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fafafa;
}

/* Encabezado */
header {
    background-color: #000000; /* Azul */
    color: #fff;
    padding: 1rem 0;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

header h1 {
    font-size: 2rem;
    font-family: 'Georgia', serif;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

header nav ul li a:hover {
    color: #ffd700; /* Amarillo dorado */
}

/* Sección de Bienvenida con animación */
.welcome-section {
    position: relative;
    background-image: url('imagen-bar.jpg');
    background-size: cover;
    background-position: center;
    padding: 100px 0;
    text-align: center;
    color: #fff;
}

/* Overlay grisáceo para mejorar la legibilidad del texto */
.welcome-section .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Superposición grisácea */
}

.welcome-section .container {
    position: relative;
    z-index: 1;
}

.welcome-section h2 {
    font-size: 3rem;
    font-family: 'Georgia', serif;
    margin-bottom: 1rem;
}

.welcome-section p {
    font-size: 1.3rem;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.7); /* Fondo claro detrás del texto */
    padding: 20px;
    border-radius: 8px;
    color: #333;
}

/* Animación para el texto de bienvenida */
.animate-welcome {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1.5s ease-in-out forwards;
}

/* Definición de la animación */
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Sección de Menú con imagen de fondo */
.menu-section {
    padding: 50px 20px;
    background-image: url('Captura\ de\ pantalla\ 2024-09-20\ 235035.jpg'); /* Imagen de fondo */
    background-size: cover;
    background-position: center; 
    color: #fff; /* Cambiamos el color del texto a blanco para mejor legibilidad */
    text-align: center;
    position: relative;
}

/* Overlay para mejorar legibilidad del menú */
.menu-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Overlay oscuro */
    z-index: 1;
}

.menu-section h2, .menu-column h3, .menu-column ul li {
    position: relative;
    z-index: 2;
}

.menu-section h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #ffd700; /* Amarillo dorado */
}

.menu-categories {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.menu-column {
    flex: 1;
    padding: 0 20px;
}

.menu-column h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #ff5722; /* Naranja */
}

.menu-column ul {
    list-style: none;
    padding: 0;
}

.menu-column ul li {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

/* Sección de Ubicación */
.location-section {
    padding: 50px 20px;
    background-color: #f0f0f0;
    text-align: center;
}

/* Sección de Contacto */
.contact-section {
    padding: 50px 20px;
    background-color: #fff;
    text-align: center;
}

/* Footer estilizado */
footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

footer .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

footer p {
    font-size: 1rem;
    margin: 10px 0;
}

footer a {
    color: #007BFF; /* Azul claro para enlaces */
    text-decoration: none;
    transition: color 0.3s ease;
}

footer a:hover {
    color: #ffd700; /* Amarillo dorado */
}

/* --- Responsive Design --- */
/* Ajustes para pantallas pequeñas (600px o menos) */
@media (max-width: 600px) {
    header .container {
        flex-direction: column;
        text-align: center;
    }

    header nav ul {
        flex-direction: column;
        margin-top: 10px;
    }

    header nav ul li {
        margin: 10px 0;
    }

    .welcome-section h2 {
        font-size: 2.2rem;
    }

    .welcome-section p {
        font-size: 1.1rem;
    }

    /* Ajuste de la sección de menú */
    .menu-categories {
        flex-direction: column; /* Cambia las columnas a una disposición vertical */
    }

    .menu-column {
        padding: 10px 0;
    }

    .menu-column h3 {
        font-size: 1.5rem;
    }

    .menu-column ul li {
        font-size: 1.1rem;
    }

    /* Ajustes en la ubicación */
    .location-section {
        padding: 30px 10px;
    }

    /* Footer */
    footer p {
        font-size: 0.9rem;
    }
}

/* Ajustes adicionales para pantallas muy pequeñas (300px o menos) */
@media (max-width: 300px) {
    header h1 {
        font-size: 1.5rem;
    }

    header nav ul li a {
        font-size: 0.9rem;
    }

    .welcome-section h2 {
        font-size: 1.8rem;
    }

    .welcome-section p {
        font-size: 1rem;
    }

    .menu-section h2 {
        font-size: 2rem;
    }

    .menu-column h3 {
        font-size: 1.3rem;
    }

    .menu-column ul li {
        font-size: 1rem;
    }
}
