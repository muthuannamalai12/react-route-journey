
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Services = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="section pt-24 pb-16 md:py-32">
        <div className="container-center">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              OUR SERVICES
            </span>
            <h1 className="font-semibold leading-tight mb-6">
              Design solutions crafted with precision and purpose
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a range of services to help you create beautiful, functional digital experiences that connect with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section py-16 bg-secondary">
        <div className="container-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "UX/UI Design",
                description: "Creating intuitive, engaging interfaces that delight users while achieving business goals.",
                features: [
                  "User research & testing",
                  "Wireframing & prototyping",
                  "Visual design & branding",
                  "Interaction design"
                ]
              },
              {
                title: "Web Development",
                description: "Building responsive, performant websites and applications with clean, maintainable code.",
                features: [
                  "Frontend development",
                  "Responsive design",
                  "Performance optimization",
                  "CMS integration"
                ]
              },
              {
                title: "Digital Strategy",
                description: "Aligning your digital presence with business objectives for measurable results.",
                features: [
                  "Digital brand strategy",
                  "Content strategy",
                  "Analytics & optimization",
                  "User journey mapping"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="hover-card flex flex-col h-full">
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary hover:underline mt-auto"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section py-16">
        <div className="container-center">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              OUR PROCESS
            </span>
            <h2 className="mb-4">How we work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures we deliver exceptional results efficiently.
            </p>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by understanding your goals, audience, and challenges through in-depth research and consultation."
              },
              {
                number: "02",
                title: "Strategy",
                description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives."
              },
              {
                number: "03",
                title: "Design & Development",
                description: "Our team creates beautiful, functional solutions, refining through ongoing collaboration and feedback."
              },
              {
                number: "04",
                title: "Launch & Optimization",
                description: "After launch, we monitor performance and make data-driven improvements to ensure long-term success."
              }
            ].map((step, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xl mx-auto md:mx-0">
                    {step.number}
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-xl font-medium mb-2 text-center md:text-left">{step.title}</h3>
                  <p className="text-muted-foreground text-center md:text-left">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-16 bg-secondary">
        <div className="container-center">
          <div className="glass p-10 md:p-16 rounded-2xl bg-background/70">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Ready to start your project?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help you achieve your goals with our design and development expertise.
              </p>
              <Link to="/contact" className="btn-primary">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
