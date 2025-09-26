import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet, // Importe o Outlet
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

// Suas funções de links e a estilização podem continuar aqui
export const links: Route.LinksFunction = () => [
  // ... seus links para fontes
];

// O layout principal da sua aplicação
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <title>Beatriz Rosa - Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfólio de Beatriz Rosa - Engenharia da Computação e Ciência da Computação" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// O componente principal da aplicação que usa o Outlet
export default function App() {
  return <Outlet />; // O Layout já está sendo usado nas rotas individuais
}

// Sua função de ErrorBoundary pode continuar como está
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // ... seu código de tratamento de erro
}