import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function Landpage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <DollarSignIcon className="h-6 w-6" />
          <span className="sr-only">Planejador Financeiro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#sobre">
            Sobre
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#servicos">
            Serviços
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#depoimentos">
            Depoimentos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contato">
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Proteja seu futuro financeiro
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Trabalhe com um planejador financeiro confiável para atingir seus objetivos financeiros e proteger seu patrimônio.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Agende uma Consulta
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="https://media.licdn.com/dms/image/D4D03AQF1Q7D90ew5uA/profile-displayphoto-shrink_800_800/0/1704987750926?e=1723680000&v=beta&t=jDguB0FR7q9tRrrxRGzvdIf3Zno6AodZpe8THiGzJms"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="sobre">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="About"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="https://media.licdn.com/dms/image/D4D03AQF1Q7D90ew5uA/profile-displayphoto-shrink_800_800/0/1704987750926?e=1723680000&v=beta&t=jDguB0FR7q9tRrrxRGzvdIf3Zno6AodZpe8THiGzJms"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Sobre o seu planejador financeiro
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Com mais de 3 anos de experiência no setor financeiro, me dedico a ajudar indivíduos e famílias
                    a alcançar seus objetivos financeiros. Minha experiência abrange planejamento de investimentos,
                    planejamento de aposentadoria, otimização tributária e gestão de patrimônio.
                  </p>
                </div>
                <div className="space-y-2" id="servicos">
                  <h3 className="text-2xl font-bold">Nossos Serviços</h3>
                  <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Gestão de Orçamento
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Gestão de riscos
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Gestão financeira
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Planejamento sucessório
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Planejamento tributário
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Planejamento de aposentadoria
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="depoimentos">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">O que nossos clientes dizem</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ouça nossos clientes satisfeitos sobre o impacto que nossos serviços de planejamento financeiro tiveram em suas vidas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>IS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Iago Sauer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pequeno empresário</p>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Eu estava hesitante em trabalhar com um planejador financeiro, mas este tem sido um verdadeiro parceiro
                  para me ajudar a crescer e proteger meu negócio. Sua experiência em planejamento tributário e estratégias
                  de investimento tem sido inestimável.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contato">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em contato</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Preencha o formulário abaixo para agendar uma consulta e saber como
                  posso ajudá-lo a atingir seus objetivos financeiros.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input className="max-w-lg flex-1" placeholder="Name" type="text" />
                  <Input className="max-w-lg flex-1" placeholder="Email" type="email" />
                </div>
                <Input className="max-w-lg flex-1" placeholder="Subject" type="text" />
                <Textarea className="max-w-lg flex-1" placeholder="Message" />
                <Button className="w-full sm:w-auto" type="submit">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Alessandro Andrade  Planejador Financeiro. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            política de Privacidade
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de serviço
          </Link>
        </nav>
      </footer>
    </div>
  )
}

type Props = {
  className: string;
}


function CheckIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function DollarSignIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

export { Landpage }
