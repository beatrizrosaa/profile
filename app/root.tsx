import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useLocation,
} from "react-router";
import type { LinksFunction } from "react-router";
import "./app.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfólio de Beatriz Rosa - Engenharia da Computação" />
        <title>Beatriz Rosa - Portfólio</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-rose-50">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-rose-200 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <Link to="/" className="text-rose-900 text-xl font-bold">
              Beatriz Rosa
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    location.pathname === '/' 
                      ? 'bg-rose-300 text-rose-900' 
                      : 'text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/projetos"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    location.pathname === '/projetos' 
                      ? 'bg-rose-300 text-rose-900' 
                      : 'text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  Projetos
                </Link>
                <Link
                  to="/arquivos"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    location.pathname === '/arquivos' 
                      ? 'bg-rose-300 text-rose-900' 
                      : 'text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  Arquivos
                </Link>
                <Link
                  to="/contato"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    location.pathname === '/contato' 
                      ? 'bg-rose-300 text-rose-900' 
                      : 'text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  Contato
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/beatrizrosaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rose-700 hover:text-rose-900 transition"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/beatriz-rosa-de-almeida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rose-700 hover:text-rose-900 transition"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:beatrizrosa.almeida@gmail.com"
                className="text-rose-700 hover:text-rose-900 transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 flex justify-center">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-rose-200 text-rose-800 py-4 text-center">
        <p>&copy; 2024 Beatriz Rosa de Almeida. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}