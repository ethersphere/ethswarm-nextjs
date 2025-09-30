import React, { useState, useRef } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { cx } from "../../utils";

type VideoProps = {
  url: string;
  thumbnail?: string;
  autoplay?: boolean;
  inline?: boolean;
  className?: string;
};

const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const Video: React.FC<VideoProps> = ({
  url,
  thumbnail,
  autoplay = false,
  inline = true,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const inlineVideoRef = useRef<HTMLVideoElement>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);

    // Use setTimeout to wait for modal to render
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.play().catch((error) => {
          console.log("Modal video play prevented:", error);
        });
      }
    }, 50);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }

    setIsModalOpen(false);
  };

  const handlePlayInline = () => {
    if (inlineVideoRef.current) {
      inlineVideoRef.current.play().catch((error) => {
        console.log("Inline video play prevented:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div
        className={cx("relative w-full rounded-lg overflow-hidden", className)}
      >
        {autoplay || inline ? (
          <>
            <video
              ref={inlineVideoRef}
              className="w-full h-auto"
              controls={isPlaying || !thumbnail}
              muted={autoplay}
              autoPlay={autoplay}
              loop={autoplay}
              playsInline
              preload={autoplay ? "auto" : "metadata"}
              poster={thumbnail}
            >
              <source src={url} type="video/mp4" />
            </video>

            {inline && thumbnail && !autoplay && !isPlaying && (
              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={handlePlayInline}
              >
                <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-5 h-5 text-white" />
                </div>
              </button>
            )}
          </>
        ) : (
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-auto"
          />
        )}

        {!inline && (
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleOpenModal}
          >
            <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center">
              <PlayIcon className="w-5 h-5 text-white" />
            </div>
          </button>
        )}
      </div>

      {!inline && (
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/95 backdrop-blur-sm" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="relative w-full max-w-7xl">
              <button
                onClick={handleCloseModal}
                className="absolute -top-10 right-0 md:-top-12 md:-right-12 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close video"
              >
                <CloseIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="relative w-full overflow-hidden bg-black">
                <video
                  ref={modalVideoRef}
                  className="w-full h-auto max-h-[85vh] object-contain"
                  controls
                  controlsList="nodownload"
                  playsInline
                >
                  <source src={url} type="video/mp4" />
                </video>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Video;
