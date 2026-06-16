const loaded = new Set();

export function preloadImage(src) {
  if (!src || loaded.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      loaded.add(src);
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
}

export function preloadVideo(src) {
  if (!src || loaded.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;

    const finish = () => {
      loaded.add(src);
      resolve();
    };

    video.addEventListener("loadeddata", finish, { once: true });
    video.addEventListener("error", finish, { once: true });
    video.src = src;
    video.load();
  });
}

export function preloadAssets(sources = []) {
  return Promise.allSettled(
    sources.map((src) =>
      src.endsWith(".mp4") || src.endsWith(".webm")
        ? preloadVideo(src)
        : preloadImage(src)
    )
  );
}

export const CRITICAL_ASSETS = [
  "/computer.png",
  "/video1.mp4",
  "/png1.svg",
  "/png2.svg",
  "/png3.svg",
  "/png4.svg",
  "/png5.svg",
  "/png6.svg",
  "/png7.svg",
];
