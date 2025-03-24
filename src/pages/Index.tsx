
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="section pt-24 pb-20 md:py-32">
        <div className="container-center">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              MINIMAL DESIGN PHILOSOPHY
            </span>
            <h1 className="font-semibold leading-tight mb-6">
              Beautiful design through simplicity and precision
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Embrace the perfect balance of form and function, where every detail serves a purpose and nothing is superfluous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-primary"
              >
                Learn more about us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-secondary py-20">
        <div className="container-center">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Design Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe that good design is as little design as possible. Less, but better – because it concentrates on the essential aspects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity",
                description: "Removing the unnecessary to focus on what matters most, creating clarity and purpose."
              },
              {
                title: "Precision",
                description: "Meticulous attention to detail ensures every element is perfectly placed and proportioned."
              },
              {
                title: "Usability",
                description: "Design should serve the user with intuitive interactions and clear navigation."
              }
            ].map((feature, index) => (
              <div key={index} className="hover-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-primary font-medium">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-center md:text-left">{feature.title}</h3>
                <p className="text-muted-foreground text-center md:text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-center">
          <div className="glass p-10 md:p-16 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Ready to transform your digital experience?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create something beautiful together that perfectly balances form and function.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
