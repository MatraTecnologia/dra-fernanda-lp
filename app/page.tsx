"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Gem,
  HandHeart,
  Award,
  ChevronDown,
  Star,
  Check,
  ArrowRight,
  Quote,
} from "lucide-react";

const benefitIcons = [Sparkles, HandHeart, Gem, Heart, Award];

const benefits = [
  {
    title: "Resultados Naturais",
    description:
      "Ultrapasse os padrões. Aqui, você conquista harmonia sem excessos, valorizando traços únicos e beleza autêntica.",
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Do diagnóstico à recuperação, a Dra. Fernanda lidera cada etapa com delicadeza, respeito e empatia.",
  },
  {
    title: "Exclusividade e Privacidade",
    description:
      "Ambiente reservado e atmosfera confortável para proporcionar momentos de relaxamento e bem-estar total.",
  },
  {
    title: "Acompanhamento Humanizado",
    description:
      "Pós-tratamento diferenciado e suporte completo, garantindo tranquilidade e satisfação em toda a sua experiência.",
  },
  {
    title: "Reconhecimento e Autoridade",
    description:
      "Especialista em procedimentos de alto padrão, referência entre pacientes exigentes e de bom gosto em Londrina.",
  },
];

const pains = [
  "Insegurança com resultados artificiais e padronizados",
  "Experiências impessoais em clínicas sem acompanhamento",
  "Dúvidas sobre segurança e naturalidade dos tratamentos",
  "Dificuldade em encontrar profissionais de referência que entendam seu perfil",
  "Falta de privacidade e conforto em espaços tradicionais",
  "Sentir-se apenas mais uma paciente, sem atenção dedicada ao seu caso",
];

const solutionBullets = [
  "Harmonização facial e corporal orientada pelo equilíbrio e naturalidade",
  "Atenção integral: consulta personalizada, planejamento detalhado e acompanhamento dedicado",
  "Ambiente sofisticado, confortável e totalmente reservado para você",
  "Tecnologias avançadas e técnicas seguras para resultados superiores",
  "Protocolo premium com opções de facilidades no pagamento",
  "Resultados reais: antes e depois comprovados por pacientes satisfeitas",
];

const steps = [
  {
    step: "01",
    title: "Agende sua consulta personalizada",
    description:
      "Escolha seu melhor horário e receba uma avaliação detalhada e exclusiva diretamente com a Dra. Fernanda.",
  },
  {
    step: "02",
    title: "Plano de tratamento sob medida",
    description:
      "Juntos, desenharemos uma estratégia focada nos seus objetivos, respeitando suas características naturais.",
  },
  {
    step: "03",
    title: "Procedimento com total conforto",
    description:
      "Em um ambiente chique e reservado, você recebe todo cuidado e atenção, com técnicas seguras e resultados superiores.",
  },
  {
    step: "04",
    title: "Acompanhamento premium",
    description:
      "Após o procedimento, você conta com acompanhamento personalizado para garantir resultado e tranquilidade.",
  },
];

const stats = [
  { value: "98%", label: "Índice de satisfação nos tratamentos" },
  { value: "500+", label: "Pacientes atendidas com exclusividade" },
  { value: "5★", label: "Avaliação média em plataformas de saúde" },
];

const testimonials = [
  {
    name: "Juliana P.",
    role: "Empresária",
    quote:
      "A Dra. Fernanda transformou minha autoestima. Tudo foi feito de maneira tão personalizada que me senti única. Recomendo a todas que buscam naturalidade e elegância.",
    result:
      "Resultados visíveis já na primeira semana, com aparência rejuvenescida e natural.",
  },
  {
    name: "Renata M.",
    role: "Advogada",
    quote:
      "Nunca fui tão bem cuidada. O conforto do ambiente e o atendimento fizeram toda diferença no meu pós-operatório.",
    result:
      "Minhas linhas de expressão suavizaram, me sinto mais segura e confiante todos os dias.",
  },
  {
    name: "Caroline T.",
    role: "Arquiteta",
    quote:
      "O acompanhamento da Dra. Fernanda me deu muita tranquilidade. O resultado do preenchimento ficou sutil e sofisticado, exatamente como desejava.",
    result:
      "Traços delicados, sem exageros. Recebo elogios constantemente pelo aspecto natural.",
  },
];

const faqs = [
  {
    q: "Os resultados ficam naturais mesmo?",
    a: "Sim. O compromisso da Dra. Fernanda é realçar sua beleza sem excessos, garantindo aspecto natural e elegante, alinhado ao seu perfil.",
  },
  {
    q: "Quais procedimentos são realizados na clínica?",
    a: "Harmonização facial (toxina, preenchimento, bioestimuladores), definição corporal, tratamento de diástase, preenchimento de glúteos, rejuvenescimento facial e muito mais.",
  },
  {
    q: "Como funciona o acompanhamento pós-procedimento?",
    a: "O pós é minuciosamente acompanhado pela Dra. Fernanda, proporcionando segurança, conforto e suporte em cada etapa da sua recuperação.",
  },
  {
    q: "Existe parcelamento dos tratamentos?",
    a: "Sim, oferecemos flexibilidade de pagamento para tornar sua experiência ainda mais conveniente e acessível.",
  },
  {
    q: "Como agendar uma consulta exclusiva?",
    a: "Clique no botão de agendamento, escolha o melhor horário e preencha seus dados que nossa equipe entrará em contato para confirmar.",
  },
  {
    q: "Os procedimentos são doloridos?",
    a: "A Dra. Fernanda utiliza técnicas modernas e anestesia tópica, tornando o procedimento confortável e tranquilo para você.",
  },
  {
    q: "A clínica é reservada?",
    a: "Sim, nosso ambiente é privativo, sofisticado e pensado para sua total comodidade e discrição.",
  },
  {
    q: "Quem pode realizar os procedimentos?",
    a: "Mulheres de diferentes idades, que prezam pelo autocuidado, bem-estar e desejam resultados diferenciados com experiência premium.",
  },
];

const results = [
  { title: "Harmonização Facial", category: "Facial" },
  { title: "Preenchimento Labial", category: "Lábios" },
  { title: "Preenchimento de Glúteos", category: "Corporal" },
  { title: "Definição Corporal", category: "Corporal" },
  { title: "Bioestimulador de Glúteos", category: "Corporal" },
  { title: "Toxina Botulínica", category: "Rejuvenescimento" },
];

const WHATSAPP_URL =
  "https://wa.me/5543996786101?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Fernanda.";

function GoldButton({
  children,
  variant = "solid",
  href = WHATSAPP_URL,
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  href?: string;
}) {
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className="group inline-flex items-center gap-2 px-7 py-4 text-sm tracking-wider uppercase text-foreground border border-foreground/20 hover:border-primary hover:text-primary transition-all duration-500"
      >
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase text-primary-foreground bg-primary hover:opacity-90 transition-all duration-500"
      style={{ boxShadow: "var(--shadow-gold)" }}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-primary">
      <span className="gold-divider" />
      <span className="hairline">{children}</span>
    </div>
  );
}

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Dra. Fernanda Oliveira"
              width={160}
              height={56}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase">
            <a href="#tratamentos" className="hover:text-primary transition">Tratamentos</a>
            <a href="#metodo" className="hover:text-primary transition">Método</a>
            <a href="#resultados" className="hover:text-primary transition">Resultados</a>
            <a href="#depoimentos" className="hover:text-primary transition">Pacientes</a>
            <a href="#agendar" className="hover:text-primary transition">Agendar</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-xs tracking-widest uppercase border-b border-primary text-primary pb-1 hover:opacity-80"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative min-h-[100vh] grid lg:grid-cols-2 items-center"
        style={{ background: "var(--gradient-luxe)" }}
      >
        <div className="px-6 lg:px-16 xl:px-24 pt-32 pb-16 lg:py-32 max-w-2xl animate-fade-up">
          <SectionLabel>Beleza Natural · Sofisticação Real</SectionLabel>
          <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance text-secondary-foreground">
            Sua melhor versão, com a{" "}
            <em className="text-primary not-italic font-normal">exclusividade</em>{" "}
            que você merece
          </h1>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl">
            Harmonização facial e corporal com resultados autênticos,
            atendimento premium e o olhar personalizado da Dra. Fernanda Oliveira.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <GoldButton>Agende sua consulta exclusiva</GoldButton>
            <GoldButton variant="ghost" href="#tratamentos">Conheça os tratamentos</GoldButton>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs tracking-wider uppercase text-foreground/60">
            <span className="gold-divider" />
            Atendimento individualizado de referência em Londrina
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-screen w-full">
          <Image
            src="/hero.jpg"
            alt="Retrato de beleza natural representando a estética premium da Dra. Fernanda"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent lg:from-background/30" />
          <div className="absolute bottom-8 right-8 hidden lg:block">
            <div
              className="bg-background/90 backdrop-blur px-6 py-5 max-w-xs"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 font-display italic text-sm leading-relaxed">
                &quot;Uma experiência verdadeiramente transformadora.&quot;
              </p>
              <p className="mt-2 text-xs tracking-wider uppercase opacity-60">— Juliana P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>O Cenário</SectionLabel>
          <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl">
            Seus desejos de autocuidado merecem{" "}
            <em className="text-primary not-italic">mais</em> do que procedimentos comuns
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-6">
            {pains.map((pain, i) => (
              <div key={i} className="flex gap-4 py-4 border-t border-border">
                <span className="font-display text-primary text-sm pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground/80 leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section
        id="metodo"
        className="py-24 lg:py-32 px-6 lg:px-12"
        style={{ background: "var(--gradient-luxe)" }}
      >
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div
              className="relative w-full h-[600px]"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Image
                src="/doctor.jpg"
                alt="Dra. Fernanda Oliveira"
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-background px-8 py-6 border border-primary/20">
              <div className="font-display text-4xl text-primary">Dra. Fernanda</div>
              <div className="hairline mt-1 text-foreground/60">Especialista CRM</div>
            </div>
          </div>
          <div>
            <SectionLabel>O Método</SectionLabel>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-tight">
              A beleza natural realçada com{" "}
              <em className="text-primary not-italic">sofisticação</em>
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              A Dra. Fernanda Oliveira oferece uma jornada de transformação com foco em
              elegância, exclusividade e verdadeira valorização do seu perfil. Cada tratamento
              é desenhado pensando em você, respeitando sua individualidade.
            </p>
            <ul className="mt-10 space-y-4">
              {solutionBullets.map((b, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground/85 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="tratamentos" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-tight">
              Uma experiência cuidadosamente desenhada para você
            </h2>
          </div>
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div
                  key={i}
                  className="bg-background p-10 hover:bg-secondary transition-colors duration-500 group"
                >
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.2} />
                  <h3 className="mt-8 font-display text-2xl">{b.title}</h3>
                  <p className="mt-4 text-foreground/70 leading-relaxed text-sm">
                    {b.description}
                  </p>
                </div>
              );
            })}
            <div className="relative p-10 min-h-[260px] flex items-end overflow-hidden">
              <Image
                src="/ambient.jpg"
                alt="Ambiente da clínica"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative text-background font-display text-xl italic drop-shadow-lg">
                Ambiente projetado para acolher você.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center">
              <SectionLabel>Sua Jornada</SectionLabel>
            </div>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-tight">
              Quatro passos para uma transformação verdadeira
            </h2>
          </div>
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="font-display text-6xl text-primary/30">{s.step}</div>
                <div className="mt-6 h-px w-12 bg-primary" />
                <h3 className="mt-6 font-display text-xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / testimonials */}
      <section id="depoimentos" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-20 pb-20 border-b border-border">
            {stats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="font-display text-6xl lg:text-7xl text-primary">
                  {s.value}
                </div>
                <div className="mt-3 hairline text-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mb-16">
            <SectionLabel>Depoimentos</SectionLabel>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-tight">
              O que dizem as pacientes da Dra. Fernanda
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-secondary p-10 relative flex flex-col">
                <Quote className="w-8 h-8 text-primary/40 mb-6" strokeWidth={1} />
                <p className="font-display italic text-lg leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
                <p className="mt-6 text-xs text-foreground/70 leading-relaxed border-l-2 border-primary pl-4">
                  {t.result}
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="font-display text-base">{t.name}</div>
                  <div className="hairline mt-1 text-foreground/60">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados / Galeria */}
      <section id="resultados" className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>Antes &amp; Depois</SectionLabel>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-tight">
              Resultados reais, beleza{" "}
              <em className="text-primary not-italic">autêntica</em>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Uma seleção de transformações conduzidas pela Dra. Fernanda — cada
              imagem reflete o compromisso com naturalidade, equilíbrio e elegância.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {results.map((r, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden bg-background aspect-[3/4] flex flex-col items-center justify-center text-center px-4 border border-dashed border-primary/40"
              >
                <Gem className="w-6 h-6 text-primary/60" strokeWidth={1.2} />
                <span className="mt-3 hairline text-foreground/50">{r.title}</span>
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <div className="hairline text-primary">{r.category}</div>
                  <div className="font-display text-base mt-1">{r.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12 text-xs tracking-wider uppercase text-foreground/50 text-center">
            Imagens divulgadas com autorização das pacientes
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Dúvidas Frequentes</SectionLabel>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-tight">
            Tudo o que você precisa saber
          </h2>
          <div className="mt-16">
            {faqs.map((f, i) => (
              <div key={i} className="border-t border-border last:border-b">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-lg md:text-xl group-hover:text-primary transition-colors">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-6 pr-12 text-foreground/75 leading-relaxed animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="agendar"
        className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/85 to-foreground/40" />
        <div className="relative mx-auto max-w-3xl text-center text-background">
          <div className="flex justify-center text-primary">
            <span className="gold-divider" />
          </div>
          <div className="hairline mt-4 text-primary">Reserve sua Experiência</div>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-tight text-balance">
            Redescubra sua autoestima com{" "}
            <em className="text-primary not-italic">exclusividade</em>
          </h2>
          <p className="mt-6 text-background/80 leading-relaxed text-lg max-w-2xl mx-auto">
            Agende um atendimento personalizado com a Dra. Fernanda e viva a
            experiência de uma verdadeira transformação.
          </p>
          <div className="mt-12 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:opacity-90 transition"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Reservar minha consulta premium
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 hairline text-background/60">
            Vagas limitadas para atendimento individualizado
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-12 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <Image
            src="/logo.png"
            alt="Dra. Fernanda Oliveira"
            width={160}
            height={56}
            className="h-14 w-auto object-contain"
          />
          <div className="text-foreground/60 text-xs tracking-wider uppercase">
            Londrina · PR · Atendimento sob agendamento
          </div>
          <div className="text-foreground/60 text-xs">
            © {new Date().getFullYear()} Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
