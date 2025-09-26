import Layout from "../components/Layout";

export default function ArquivosPage() {
  return (
    <Layout>
      <div className="w-full max-w-4xl">
        <section className="bg-rose-100 rounded-xl shadow-lg p-8 mb-10">
          <h1 className="text-3xl font-bold text-rose-900 mb-4 text-center">
            Explorando a teoria na prática!
          </h1>
          <p className="text-rose-700 mb-8 text-center">
            Aqui você encontrará projetos acadêmicos que traduzem conceitos em soluções reais. 
            Cada trabalho representa um capítulo da minha jornada em ciência e engenharia.
          </p>
          
          <div className="space-y-8">
            {/* Projeto 1: Artigo */}
            <div className="bg-nude-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-pink-500 mb-4">
                Projeto 1: Artigo - ENFRENTANDO A CARÊNCIA TECNOLÓGICA PARA ALCANÇAR UM DESENVOLVIMENTO INDUSTRIAL LIMPO
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                <a 
                  href="/files/Artigo.pdf" 
                  download 
                  className="text-pink-600 font-semibold hover:underline"
                >
                  Download do Artigo - PDF
                </a>
              </div>
              <p className="text-rose-800">
                Este artigo foi elaborado por mim e meus colegas com a seguinte tese: "Enfrentando a Carência 
                Tecnológica para Alcançar um Desenvolvimento Industrial Limpo". Realizamos uma pesquisa aprofundada 
                em artigos previamente publicados e exploramos a trajetória da Natura, uma empresa que integra 
                sustentabilidade e crescimento de marca ao agregar valor através de seu posicionamento.
              </p>
            </div>

            {/* Projeto 2: Protótipo de Dispenser */}
            <div className="bg-nude-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-pink-500 mb-4">
                Projeto 2: Protótipo de Dispenser
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <img 
                  src="/images/prototipovirtual.jpg" 
                  alt="Protótipo Virtual" 
                  className="w-full h-48 object-cover rounded-lg" 
                />
                <video controls className="w-full h-48 rounded-lg">
                  <source src="/videos/smartdispenser.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              <p className="text-rose-800">
                A proposta busca minimizar erros de medicação, reduzir desperdícios, melhorar a rastreabilidade 
                e o gerenciamento de estoque, além de aumentar a satisfação dos pacientes por meio de um atendimento 
                personalizado e pontual. Com auxílio de um microcontrolador ESP32, células de carga, servo motor e 
                um buzzer, faremos um dispositivo que atrelado a uma planilha excel será programado para entrega de 
                remédios de forma personalizada seguindo os horários corretos.
              </p>
            </div>

            {/* Projeto 3: E-commerce */}
            <div className="bg-nude-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-pink-500 mb-4">
                Projeto 3: E-commerce
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <img 
                  src="/images/pag1.jpg" 
                  alt="E-commerce Página 1" 
                  className="w-full h-32 object-cover rounded-lg" 
                />
                <img 
                  src="/images/pag2.jpg" 
                  alt="E-commerce Página 2" 
                  className="w-full h-32 object-cover rounded-lg" 
                />
                <img 
                  src="/images/pag3.jpg" 
                  alt="E-commerce Página 3" 
                  className="w-full h-32 object-cover rounded-lg" 
                />
              </div>
              <p className="text-rose-800">
                Neste projeto de e-commerce, eu fui a responsável por todo o back-end, utilizando Node.js, SQLite e Prisma. 
                A integração com o front-end em React e o gerenciamento de conteúdo por meio do Prismic garantiram uma 
                experiência de compra eficiente e escalável. Testes de API foram realizados com Insomnia, enquanto 
                Beekeeper facilitou a manipulação do banco de dados.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
