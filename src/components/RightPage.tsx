import { Star, Sparkles } from "lucide-react";

interface RightPageProps {
  photos: string[];
}

export const RightPage = ({ photos }: RightPageProps) => {
  return (
    <div className="relative w-full aspect-[3/4] bg-card rounded-r-3xl md:rounded-l-none rounded-l-3xl shadow-paper overflow-hidden">
      {/* Washi Tape Decoration */}
      <div className="absolute top-0 right-1/4 w-24 h-6 bg-secondary/30 rotate-3 backdrop-blur-sm" />
      
      <div className="relative h-full p-8 md:p-12">
        {/* Photo Grid */}
        <div className="h-full flex flex-col gap-4 justify-center items-center">
          {/* Top Photo - Rotated */}
          <div className="transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white p-3 shadow-paper rounded-lg">
              <img
                src={photos[0]}
                alt="Memory"
                className="w-48 h-48 object-cover rounded"
              />
            </div>
          </div>

          {/* Bottom Two Photos */}
          <div className="flex gap-4">
            <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 shadow-paper rounded-lg">
                <img
                  src={photos[1]}
                  alt="Memory"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </div>
            <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-3 shadow-paper rounded-lg">
                <img
                  src={photos[2]}
                  alt="Memory"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-12 right-8 animate-bounce">
          <Star className="w-6 h-6 fill-accent text-accent" />
        </div>
        <div className="absolute bottom-12 left-8 animate-pulse">
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>

        {/* Cute Stickers */}
        <div className="absolute bottom-8 right-8">
          <div className="flex gap-2">
            <span className="text-2xl animate-bounce" style={{ animationDelay: "0.1s" }}>
              ✨
            </span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              💖
            </span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: "0.3s" }}>
              🌸
            </span>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-accent/40 rounded-tr-3xl" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-primary/40 rounded-br-3xl" />
      </div>
    </div>
  );
};
