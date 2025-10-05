import { useState, useRef, useEffect } from "react";
import { LeftPage } from "./LeftPage";
import { RightPage } from "./RightPage";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

export const Scrapbook = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 5 spreads = 10 pages total
  const spreads = [
    {
      id: 1,
      leftContent: {
        title: "Jadi Kekasihku Saja ♡",
        lines: [
          "Jadilah kekasihku saja",
        ],
      },
      rightPhotos: [
        "/photo-1.jpg",
        "/src/assets/photo-2.jpg",
        "/src/assets/photo-3.jpg",
      ],
    },
    {
      id: 2,
      leftContent: {
        title: "Jadi Kekasihku Saja ✨",
        lines: [
          "Katakan (Cinta bila kau cinta) cinta",
        ],
      },
      rightPhotos: [
        "/src/assets/photo-4.jpg",
        "/src/assets/photo-5.jpg",
        "/src/assets/photo-6.jpg",
      ],
    },
    {
      id: 3,
      leftContent: {
        title: "Jadi Kekasihku Saja 🌸",
        lines: [
          "Hati ini meminta",
        ],
      },
      rightPhotos: [
        "/src/assets/photo-7.jpeg",
        "/src/assets/photo-8.jpeg",
        "/src/assets/photo-9.jpeg",
      ],
    },
    {
      id: 4,
      leftContent: {
        title: "Jadi Kekasihku Saja 💖",
        lines: [
          "Kau lebih dari teman berbagi",
        ],
      },
      rightPhotos: [
        "/src/assets/photo-10.jpg",
        "/src/assets/photo-1.jpg",
        "/src/assets/photo-2.jpg",
      ],
    },
    {
      id: 5,
      leftContent: {
        title: "Jadi Kekasihku Saja 🎀",
        lines: [
          "Jadi kekasihku saja",
        ],
      },
      rightPhotos: [
        "/src/assets/photo-3.jpg",
        "/src/assets/photo-4.jpg",
        "/src/assets/photo-5.jpg",
      ],
    },
  ];


  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
    }
  };

  const nextSpread = () => {
    if (currentSpread < spreads.length - 1 && !isFlipping) {
      // Play audio when next is clicked
      if (audioRef.current && !isMuted) {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
      
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  const prevSpread = () => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  return (
    <div className="relative min-h-screen gradient-soft flex items-center justify-center p-4">
      {/* Audio Element */}
      <audio ref={audioRef} loop className="hidden" src="/music/song1.mp3" />

      {/* Mute Button */}
      <Button
        onClick={toggleMute}
        variant="secondary"
        size="icon"
        className="fixed top-24 right-4 z-50 rounded-full shadow-soft hover:scale-110 transition-transform"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </Button>

      <div className="w-full max-w-7xl">
        <div className="relative perspective-[2000px]">
          <div
            className={`relative w-full grid grid-cols-1 md:grid-cols-2 gap-0 ${
              isFlipping ? "page-flip flipped" : "page-flip"
            }`}
          >
            <LeftPage content={spreads[currentSpread].leftContent} />
            <RightPage photos={spreads[currentSpread].rightPhotos} />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={prevSpread}
            disabled={currentSpread === 0 || isFlipping}
            variant="secondary"
            size="lg"
            className="rounded-full shadow-soft hover:scale-105 transition-transform"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {spreads.map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-full transition-all ${
                  index === currentSpread
                    ? "w-8 bg-primary"
                    : "w-3 bg-primary/30"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSpread}
            disabled={currentSpread === spreads.length - 1 || isFlipping}
            variant="secondary"
            size="lg"
            className="rounded-full shadow-soft hover:scale-105 transition-transform"
          >
            Next
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-center mt-4 text-sm text-muted-foreground font-handwritten">
          Page {currentSpread * 2 + 1} & {currentSpread * 2 + 2} of 10
        </p>
      </div>
    </div>
  );
};
