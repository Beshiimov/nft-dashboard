const width = 1980

export const adaptiveValue =
  (property: string, minSize: number, endSize: number, type: number): string => {
  const addSize = endSize - minSize;

  if (type === 1) {
    //Только если меньше контейнера
    return `${property}: ${endSize}px;
      @media (max-width: ${width}px) {
        ${property}: calc(
          ${minSize}px + ${addSize} *
          ((100vw - 320px) / ${width - 320})
        );
      }
    `
  }
};



