import { Heart, Music } from "lucide-react";

interface LeftPageProps {
  content: {
    title: string;
    lines: string[];
  };
}

export const LeftPage = ({ content }: LeftPageProps) => {
  return (
    <div className="relative w-full aspect-[3/4] bg-card rounded-l-3xl md:rounded-r-none rounded-r-3xl shadow-paper overflow-hidden border-r-4 border-dashed border-border/50">
      {/* Washi Tape Decoration */}
      <div className="absolute top-0 left-1/4 w-24 h-6 bg-primary/30 -rotate-3 backdrop-blur-sm" />
      
      <div className="relative h-full p-8 md:p-12 flex flex-col">
        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <Music className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-handwritten text-foreground">
            {content.title}
          </h2>
        </div>

        {/* Lyrics/Text Content */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          {content.lines.map((line, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl font-handwritten text-foreground/80 leading-relaxed animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Decorative Hearts */}
        <div className="absolute bottom-8 left-8">
          <Heart className="w-6 h-6 fill-primary text-primary animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-8">
          <span className="text-2xl animate-bounce">🎵</span>
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-primary/40 rounded-tl-3xl" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-secondary/40 rounded-bl-3xl" />
      </div>
    </div>
  );
};
