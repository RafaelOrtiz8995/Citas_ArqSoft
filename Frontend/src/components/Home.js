import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      {/* Bienvenida y breve descripción del servicio */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4">Bienvenido a Cita Perfecta</h1>
            <p className="lead mb-4">Encuentra y planifica tu cita perfecta con nosotros. Explora una variedad de opciones y registra tu negocio para ser parte de esta experiencia única.</p>
          </div>
        </div>
      </section>

      {/* Banner o sección destacada */}
      <section className="bg-light py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 mb-4">Descubre la Cita Perfecta</h2>
            <p className="lead mb-4">Explora una variedad de negocios y servicios disponibles para crear la cita ideal. Registra tu negocio y permite que los usuarios te encuentren fácilmente.</p>
            <Link to="/registro-comercio" className="btn btn-primary btn-lg">Registrar Negocio</Link>
          </div>
        </div>
      </section>

      {/* Sección de Registro de Negocios */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Registra tu Negocio</h2>
            <p>Completa el siguiente formulario para registrar tu negocio y hacerlo visible para los usuarios que buscan una cita perfecta.</p>
            {/* Aquí va el formulario detallado de registro de negocios */}
            {/* Instrucciones claras sobre cómo registrarse */}
            <p className="mt-4">¿Necesitas ayuda? Contacta con nuestro equipo de soporte para obtener asistencia.</p>
          </div>
        </div>
      </section>

      {/* Sección de Búsqueda de Citas */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Encuentra tu Cita Perfecta</h2>
            {/* Motor de búsqueda y opciones de filtro */}
            <p>Encuentra negocios según tu ubicación, tipo de servicio y más. Refina tus búsquedas para encontrar la cita perfecta.</p>
          </div>
        </div>
      </section>

      {/* Páginas de Perfil de Negocios */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Explora Nuestros Negocios</h2>
            {/* Listado de perfiles de negocios */}
            <p>Descubre más sobre cada negocio registrado, incluyendo servicios, imágenes, reseñas de usuarios y más detalles relevantes.</p>
          </div>
        </div>
      </section>

      {/* Blog o Sección de Consejos */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Consejos y Recomendaciones</h2>
            {/* Artículos útiles relacionados con la planificación de citas */}
            <p>Lee nuestros artículos para inspirarte y planificar la cita perfecta con nuestras recomendaciones y sugerencias.</p>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios y Reseñas */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Testimonios de Usuarios</h2>
            {/* Testimonios y reseñas de usuarios */}
            <p>Lee las experiencias de otros usuarios y sus opiniones sobre los negocios registrados. Encuentra confianza y recomendaciones adicionales.</p>
          </div>
        </div>
      </section>

      {/* Contacto y Soporte */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Contacto y Soporte</h2>
            {/* Información de contacto y formulario de contacto */}
            <p>¿Tienes preguntas o necesitas ayuda? Contáctanos a través de nuestro correo electrónico o número de teléfono para soporte.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark">
        <div className="container text-center text-white">
          <p className="mb-0">Enlaces útiles | Términos y Condiciones | Política de Privacidad | Redes Sociales</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
