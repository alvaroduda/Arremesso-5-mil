import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Play,
  Download,
  BookOpen,
  Target,
  Calendar,
  Lock,
  CheckCircle,
  User,
  LogOut,
  ShoppingCart,
  Menu
} from "lucide-react";
import { COURSE_ACCESS_CODES } from "@/data/courseCodes";
import logoImage from "/icone/logo.png";


const courseContent = {
  aquecimento: {
    title: "Aquecimento",
    description: "Vídeo de aquecimento para iniciar o curso.",
    videos: [
      { title: "Aquecimento", src: "/videos/Aquecimento .mp4" },
    ],
    materials: "",
  },
  semana1: {
    title: "Semana 1",
    description: "Volume",
    videos: [
      { title: "Semana 1", src: "/videos/Semana 1 -volume .mp4" },
    ],
    materials: "",
  },
  semana2: {
    title: "Semana 2",
    description: "Volume.",
    videos: [
      { title: "Semana 2", src: "/videos/Semana 2 -volume.mp4" },
    ],
    materials: "",
  },
  semana3: {
    title: "Semana 3",
    description: "Sequência de acerto.",
    videos: [
      { title: "Semana 3", src: "/videos/Semana 3 sequência de acertos.mp4" },
    ],
    materials: "",
  },
  semana4: {
    title: "Semana 4",
    description: "Situações de jogo.",
    videos: [
      { title: "Semana 4", src: "/videos/Semana 4 situações de jogo.mp4" },
    ],
    materials: "",
  },
  semanaBonus: {
    title: "Semana Bônus",
    description: "Situações de jogo.",
    videos: [
      { title: "Semana Bônus", src: "/videos/Semana bônus .mp4" },
    ],
    materials: "ebookfinal.pdf",
  },
  encerramento: {
    title: "Aula de Encerramento",
    description: "Encerramento do curso e material para download.",
    videos: [
      { title: "Aula de Encerramento", src: "/videos/Aula de encerramento .mp4" },
    ],
    materials: "",
  },
};


const Course = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeWeek, setActiveWeek] = useState("aquecimento");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("courseAuthenticated");
    if (saved === "true") setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    setActiveVideoIndex(0);
  }, [activeWeek]);

  const handleLogin = () => {
    if (COURSE_ACCESS_CODES.includes(password.toUpperCase())) {
      setIsAuthenticated(true);
      localStorage.setItem("courseAuthenticated", "true");
    } else {
      alert("Código inválido!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    localStorage.removeItem("courseAuthenticated");
  };

  const handlePurchase = () => {
    window.open("https://pag.ae/7_NDsD8Qu", "_blank");
  };

  const videos = courseContent[activeWeek]?.videos || [];
  const activeVideo = videos[activeVideoIndex];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white p-6">
        <Card className="max-w-md w-full shadow-2xl border-none bg-white rounded-xl">
          <CardHeader className="text-center space-y-3">
            <img
              src={logoImage}
              alt="Logo"
              className="w-16 h-16 mx-auto rounded-full object-cover border-2 border-orange-400 shadow"
            />
            <CardTitle className="text-2xl font-bold text-gray-800">Acesse o Curso</CardTitle>
            <p className="text-sm text-gray-500">Digite o código enviado por e-mail após a compra</p>
          </CardHeader>

          <CardContent className="space-y-4 px-6 pb-6">
            <Input
              type="text"
              placeholder="Digite seu código"
              className="focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />

            <Button
              onClick={handleLogin}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all shadow"
            >
              Acessar
            </Button>

            <div className="pt-4 border-t text-center">
              <Button
                onClick={handlePurchase}
                variant="outline"
                className="mt-2 hover:border-orange-500 hover:text-orange-600"
              >
                <ShoppingCart className="mr-2" />
                Compre Agora!
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                Após a <strong>confirmação da compra</strong>, o código será <br />enviado por e-mail em até <strong>48 horas</strong>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white rounded-full shadow p-2 border border-orange-200"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
      >
        <Menu className="w-6 h-6 text-orange-600" />
      </button>
      
      <aside
        className={`fixed md:static top-0 left-0 h-full z-40 transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-72 bg-white shadow-md border-r flex flex-col justify-between`}
      >
        
        <div>
          <div className="p-6 border-b flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h1 className="font-bold">Arremesso 5 Mil</h1>
                <p className="text-sm text-gray-500">Área do aluno</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="ghost" size="sm">
              <LogOut className="text-gray-500" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            {Object.entries(courseContent).map(([key, c]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveWeek(key);
                  setSidebarOpen(false); 
                }}
                className={`flex items-center p-3 rounded-lg w-full transition ${
                  activeWeek === key
                    ? "bg-orange-600 text-white shadow"
                    : "hover:bg-orange-100 text-gray-700"
                }`}
              >
                {key === "aquecimento" ? <BookOpen /> : <Calendar />}
                <span className="ml-3">{c.title}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t bg-gray-50 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <User className="text-orange-500" />
            <div>
              <p className="font-semibold">Status</p>
              <p className="text-xs text-gray-500">Curso Ativo</p>
            </div>
          </div>
          <CheckCircle className="text-green-500" />
        </div>
      </aside>
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <main className="flex-1 p-2 sm:p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-2xl md:max-w-4xl mx-auto space-y-8">
          <header>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{courseContent[activeWeek]?.title}</h2>
            <p className="text-gray-600">{courseContent[activeWeek]?.description}</p>
          </header>
          <Card className="shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg text-orange-700">
                <Play />
                <span>Vídeo da Aula</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeVideo && activeVideo.src ? (
                <div className="w-full aspect-video bg-black rounded-md overflow-hidden flex items-center justify-center">
                  <video
                    key={activeVideo.src}
                    src={activeVideo.src}
                    controls
                    className="w-full h-full object-contain max-h-[60vh]"
                  />
                </div>
              ) : (
                <p className="text-gray-500">Vídeo não disponível.</p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {videos.map((video, idx) => (
                  <button
                    key={video.src}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                      idx === activeVideoIndex
                        ? "bg-orange-600 text-white shadow"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {video.title}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg text-blue-700">
                <Download />
                <span>Materiais</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {courseContent[activeWeek]?.materials ? (
                <a
                  href={`/materiais/${courseContent[activeWeek].materials}`}
                  download
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
                >
                  <Download className="mr-2" />
                  Download
                </a>
              ) : (
                <p className="text-gray-500">Nenhum material disponível.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Course;
