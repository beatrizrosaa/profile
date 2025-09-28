import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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

// O layout principal da sua aplicação
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

// O componente principal da aplicação que usa o Outlet
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-rose-200 shadow-lg sticky top-0 z-50">
        {/* ... seu código de navegação ... */}
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