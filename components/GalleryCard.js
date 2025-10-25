import { useState, useRef } from 'react';

export default function GalleryCard() {
  const [images, setImages] = useState([
    '/assets/gallery-1.jpg',
    '/assets/gallery-2.jpg',
    '/assets/gallery-3.jpg',
  ]);

  const fileRef = useRef();

  function onAdd(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages((prev) => [url, ...prev].slice(0, 9));
  }

  return (
    <div className="glass p-6 rounded-2xl w-full max-w-xl mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="pill bg-gray-800">Gallery</div>

        <div className="flex items-center gap-3">
          <label className="pill bg-gray-700 cursor-pointer">
            + Add Image
            <input
              ref={fileRef}
              onChange={onAdd}
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>

          <div className="h-10 w-10 rounded-full glass flex items-center justify-center">◀</div>
          <div className="h-10 w-10 rounded-full glass flex items-center justify-center">▶</div>
        </div>
      </div>

      {/* Gallery Grid (note gallery-grid class) */}
      <div className="grid grid-cols-3 gap-4 gallery-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className="gallery-item h-28 w-full rounded-2xl overflow-visible border border-white/6"
            tabIndex={0}
          >
            <div className="gallery-inner h-full w-full rounded-2xl overflow-hidden">
              <img
                src={src}
                alt={'image-' + i}
                className="h-full w-full object-cover block"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
