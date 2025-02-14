import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Pronto para revolucionar seu negócio ?
        </h2>
        <p className="max-w-[48rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          Junte-se a empresas líderes que confiam no Aivy Chat para impulsionar sua transformação digital e ficar à frente no
          cenário tecnológico em rápida evolução.
        </p>
        <Button size="lg" className="mt-4">
          <Link href={"/chat"}>
            Começe a utilizar hoje!
          </Link>
        </Button>
      </div>
    </section>
  )
}

