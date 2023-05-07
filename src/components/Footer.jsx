import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <h2 className="font-bold text-lg mb-4">Contacto</h2>
            <p className="mb-2">Dirección: 123 Calle Principal</p>
            <p className="mb-2">Teléfono: (123) 456-7890</p>
            <p>Email: contacto@noticiaslocales.com</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Categorías</h2>
            <ul className="mb-2">
              <li><a href="#">Política</a></li>
              <li><a href="#">Economía</a></li>
              <li><a href="#">Deportes</a></li>
            </ul>
            <ul>
              <li><a href="#">Cultura</a></li>
              <li><a href="#">Ciencia y Tecnología</a></li>
              <li><a href="#">Salud</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Síguenos</h2>
            <ul className="mb-2">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
            <ul>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Noticias Locales</h2>
            <p className="mb-2">Noticias locales es un medio de comunicación digital que tiene como objetivo informar a la comunidad sobre los acontecimientos más relevantes de nuestra región.</p>
            <p>&copy; {new Date().getFullYear()} Noticias Locales. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
