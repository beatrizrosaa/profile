import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projetos", "routes/projetos.tsx"),
  route("arquivos", "routes/arquivos.tsx"),
  route("contato", "routes/contato.tsx"),
] satisfies RouteConfig;