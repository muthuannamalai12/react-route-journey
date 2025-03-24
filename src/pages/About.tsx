
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="section pt-24 pb-16 md:py-32">
        <div className="container-center">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              ABOUT US
            </span>
            <h1 className="font-semibold leading-tight mb-6">
              Our passion for minimal design drives everything we do
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in creating digital experiences that are both beautiful and functional, where every element serves a purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section py-16 bg-secondary">
        <div className="container-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
                OUR STORY
              </span>
              <h2 className="mb-6">From concept to reality</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, our studio was born from a shared belief that digital design should be both beautiful and functional. We saw too many websites sacrificing usability for aesthetics, or vice versa.
              </p>
              <p className="text-muted-foreground">
                Our team brings together expertise from various disciplines – design, development, user experience, and strategy – all unified by a commitment to minimalist principles and user-centered design.
              </p>
            </div>
            <div className="aspect-video rounded-lg bg-muted overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                alt="Our team collaborating" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section py-16">
        <div className="container-center">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              OUR VALUES
            </span>
            <h2 className="mb-4">Guiding principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide every project we undertake and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity First",
                description: "We believe in removing the unnecessary so the necessary may speak. Simplicity is not about sacrifice, but about focusing on what truly matters."
              },
              {
                title: "User-Centered",
                description: "Every design decision we make is based on how it serves the user. We obsess over usability, accessibility, and intuitive interactions."
              },
              {
                title: "Attention to Detail",
                description: "We believe the difference between good and great lies in the details. We meticulously craft every pixel, animation, and interaction."
              }
            ].map((value, index) => (
              <div key={index} className="hover-card">
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section py-16 bg-secondary">
        <div className="container-center">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              OUR TEAM
            </span>
            <h2 className="mb-4">The people behind our work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse group of passionate designers and developers committed to creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop"
              },
              {
                name: "Samantha Lee",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop"
              },
              {
                name: "David Chen",
                role: "Senior Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop"
              },
              {
                name: "Emily Taylor",
                role: "UX Strategist",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3698&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[240px]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
