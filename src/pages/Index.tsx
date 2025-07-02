import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play, Users, Calendar, Award, Star, Target, TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import apresentacaoVideo from '/videos/APRESENTACAO.mp4';
import logoImage from "/icone/logo.png";

const Index = () => {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate("/curso");
  };

  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/FKA3CKjg1Zd03RftKtOhlG?mode=ac_c", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 font-sans">
      
      
      <header className="bg-white/90 backdrop-blur-md shadow-md py-4 fixed w-full z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-orange-600">Arremesso 5 Mil</span>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition-all"
          >
            <Users className="w-4 h-4 mr-2" />
            Fale Conosco
          </Button>
        </div>
      </header>

      <main className="pt-24">
        
        <section className="text-center py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            Domine o seu <span className="text-orange-600">ARREMESSO</span>
           <br />através dos 4 pilares de desenvolvimento, volume, repetição, constância e situações de jogo.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Aprenda técnicas profissionais de arremesso e melhore seu desempenho nas quadras.
            </p>

            
            <div className="bg-white rounded-3xl shadow-xl p-6 mt-10 hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conheça o Projeto</h3>
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <video
                  src={apresentacaoVideo}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
              <Button
                onClick={handleStartCourse}
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-4 text-lg rounded-full shadow-md"
              >
                <Award className="w-5 h-5 mr-2" />
                Inscreva-se Agora
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 text-lg rounded-full transition"
              >
                <Users className="w-5 h-5 mr-2" />
                Grupo do WhatsApp
              </Button>
            </div>
          </div>
        </section>

        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">O que você vai aprender</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-12 h-12 mx-auto mb-4 text-orange-600" />,
                  title: "Técnica Perfeita",
                  desc: "Aprimore seu arremesso com fundamentos sólidos e exercícios práticos.",
                },
                {
                  icon: <TrendingUp className="w-12 h-12 mx-auto mb-4 text-orange-600" />,
                  title: "Aumento da Precisão",
                  desc: "Melhore sua taxa de acerto com exercícios focados em precisão e controle.",
                },
                {
                  icon: <Award className="w-12 h-12 mx-auto mb-4 text-orange-600" />,
                  title: "Mentalidade Vencedora",
                  desc: "Desenvolva a confiança e a mentalidade necessária para se destacar nas quadras.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 text-center hover:shadow-xl transition-all">
                  <CardContent>
                    {item.icon}
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Estrutura do Curso</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { week: "Aquecimento", title: "Preparação" },
                { week: "Semana 1", title: "Volume" },
                { week: "Semana 2", title: "Volume" },
                { week: "Semana 3", title: "Sequência de acerto"},
                { week: "Semana 4", title: "Situações de jogo"},
                { week: "Semana Bônus", title: "Situações de jogo" }
              ].map((item, index) => (
                <Card key={index} className="p-5 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center">
                      {index}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.week}: {item.title}</h4>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Live Exclusiva de Encerramento</h2>
<p className="max-w-xl mx-auto text-lg mb-8">
  Ao final do curso, participe de uma live exclusiva <strong>no Instagram</strong> para tirar dúvidas, 
  receber feedback personalizado e celebrar sua evolução!<br />
  Acompanhe pelo nosso perfil: {""}
  <a
    href="https://instagram.com/abltpe"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-white hover:text-orange-200"
  >
    @abltpe
  </a>
</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["✓ Feedback Individual", "✓ Sessão de Q&A", "✓ Dicas Avançadas"].map((text, i) => (
              <span key={i} className="bg-white/20 px-5 py-2 rounded-full">{text}</span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
        <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-xl font-semibold">Arremesso 5 Mil</span>
        </div>
        <p className="text-gray-400 mb-6">Transformando jogadores em campeões, um arremesso de cada vez.</p>
        <Button
          onClick={handleStartCourse}
          className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 rounded-full"
        >
          Acessar Curso
        </Button>
      </footer>
    </div>
  );
};

export default Index;
