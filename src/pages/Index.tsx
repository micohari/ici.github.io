import { Scrapbook } from "@/components/Scrapbook";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 fill-primary text-primary animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-handwritten text-foreground">
              My Cute Scrapbook
            </h1>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Scrapbook />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="font-handwritten text-lg text-muted-foreground">
          Di buat untuk Pristi Wulandari 💖✨🌸
        </p>
      </footer>
    </div>
  );
};

export default Index;
