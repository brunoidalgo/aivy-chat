import { Brain, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "IA Machine Learning",
    description: "Aproveite o poder do aprendizado de máquina para obter insights acionáveis ​​a partir de seus testes.",
    icon: Brain,
  },
  {
    name: "Cloud Native Architecture",
    description: "Utilizável em multiplos ambientes para otimizar e trazer resultados rápidos para o seu negócio.",
    icon: Cloud,
  },
  {
    name: "Enterprise Grade Security",
    description: "Medidas de segurança de última geração para proteger seus ativos mais valiosos.",
    icon: Shield,
  },
  {
    name: "High Performance Systems",
    description: "Otimizadas para velocidade e eficiência, nossas soluções oferecem desempenho incomparável.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Nossas Soluções</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Veja como o Aivy Chat pode transformar o seu negócio com as nossas tecnologias inovadoras.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

