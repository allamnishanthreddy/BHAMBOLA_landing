import React, { useEffect, useRef, useState } from 'react';

const TransparentLogo = ({ src, className = "", alt = "Logo" }) => {
    const [processedSrc, setProcessedSrc] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = img.width;
            tempCanvas.height = img.height;
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.drawImage(img, 0, 0);

            let imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
            let data = imageData.data;

            // Step 1: Make white/near-white transparent
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] > 248 && data[i + 1] > 248 && data[i + 2] > 248) {
                    data[i + 3] = 0;
                }
            }
            tempCtx.putImageData(imageData, 0, 0);

            // Step 2: Find bounds of non-transparent pixels (cropping)
            let minX = tempCanvas.width, minY = tempCanvas.height, maxX = 0, maxY = 0;
            let found = false;

            for (let y = 0; y < tempCanvas.height; y++) {
                for (let x = 0; x < tempCanvas.width; x++) {
                    const alpha = data[(y * tempCanvas.width + x) * 4 + 3];
                    if (alpha > 0) {
                        if (x < minX) minX = x;
                        if (y < minY) minY = y;
                        if (x > maxX) maxX = x;
                        if (y > maxY) maxY = y;
                        found = true;
                    }
                }
            }

            if (!found) {
                setProcessedSrc(src);
                return;
            }

            // Step 3: Create final cropped canvas
            const cropWidth = maxX - minX + 1;
            const cropHeight = maxY - minY + 1;
            const finalCanvas = document.createElement('canvas');
            finalCanvas.width = cropWidth;
            finalCanvas.height = cropHeight;
            const finalCtx = finalCanvas.getContext('2d');

            finalCtx.drawImage(tempCanvas, minX, minY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
            setProcessedSrc(finalCanvas.toDataURL());
        };
    }, [src]);

    return (
        <div className={`${className} flex items-center justify-start overflow-hidden`}>
            {processedSrc ? (
                <img
                    src={processedSrc}
                    alt={alt}
                    className="w-full h-full object-contain filter brightness-110 contrast-110"
                    style={{
                        imageRendering: 'auto',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                    }}
                />
            ) : (
                <div className="h-full w-20 bg-white/5 animate-pulse rounded"></div>
            )}
        </div>
    );
};

export default TransparentLogo;
