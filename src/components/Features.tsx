import React from 'react';
import { RocketIcon, ShieldCheckIcon, CodeIcon } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
    <div className="flex items-center mb-5">
      <Icon className="h-8 w-8 text-indigo-600 mr-4" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-700 text-lg">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recursos que impulsionam seu sucesso
          </h2>
          <p className="text-lg text-gray-700">
            Nossa plataforma oferece soluções inovadoras para atender às suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Desempenho Otimizado"
            description="Maximize a eficiência com nossa infraestrutura de alto desempenho."
            icon={RocketIcon}
          />
          <FeatureCard
            title="Segurança Avançada"
            description="Proteja seus dados com nossas soluções de segurança de última geração."
            icon={ShieldCheckIcon}
          />
          <FeatureCard
            title="Desenvolvimento Ágil"
            description="Acelere o desenvolvimento com nossas ferramentas e APIs intuitivas."
            icon={CodeIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
