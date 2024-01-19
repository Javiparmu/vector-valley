'use client';

import { ConverterRunner, initializeWasm } from '@/lib/converter';
import { ArrowRight } from 'lucide-react';
import { DragEvent, useRef, useState } from 'react';

function deg2rad(deg: number) {
  return deg/180*3.141592654;
}

const Svgate = () => {
  const [canDownload, setCanDownload] = useState(false);
  const [imageName, setImageName] = useState<string>('');

  const svgRef = useRef(null);
  const imageCanvasRef = useRef(null);

  const handleDragOver = (e: DragEvent<HTMLCanvasElement>) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: DragEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const imageCanvas = imageCanvasRef.current as unknown as HTMLCanvasElement;
    const svg = svgRef.current as unknown as SVGElement;

    const imageCtx = imageCanvas.getContext('2d', {
      willReadFrequently: true,
    })

    const files = e.dataTransfer.files;

    setImageName(files[0].name.split('.')[0]);
    
    if (files.length > 0 && imageCanvas != null) {
      svg.innerHTML = '';

      const file = files[0];
      
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = async () => {
        const width = image.naturalWidth, height = image.naturalHeight;

        imageCanvas.width = width;
        imageCanvas.height = height;
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

        imageCtx?.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height);
        imageCtx?.getImageData(0, 0, imageCanvas.width, imageCanvas.height);


        const params = JSON.stringify({
          'canvas_id': imageCanvas.id,
          'svg_id': svg.id,
          'mode': 'spline',
          'clustering_mode': 'color',
          'hierarchical': 'stacked',
          'corner_threshold': deg2rad(60),
          'length_threshold': 4,
          'max_iterations': 10,
          'splice_threshold': deg2rad(45),
          'filter_speckle': 16,
          'color_precision': 2,
          'layer_difference': 16,
          'path_precision': 8,
        });

        await initializeWasm();

        const converter = new ConverterRunner(params)

        converter.run();

        setCanDownload(true);
      };
    }
  };
    
  const downloadSvg = () => {
    const svgElement = svgRef.current as unknown as SVGElement;
    const imageCanvas = imageCanvasRef.current as unknown as HTMLCanvasElement;
    const imageCtx = imageCanvas.getContext('2d', {
      willReadFrequently: true,
    })

    if (svgElement) {
      const svgContent = svgElement.outerHTML;

      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${imageName}.svg`;
      a.click();
    }
  };
  
  return (
    <main className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-6xl font-bold mt-5'>Convert your images to svgs.</h1>
        <p className='text-2xl mt-10 text-gray-700'>Specially designed for creating your own SVG icons and logos</p>
        <section className='flex flex-row items-center justify-center w-full h-full mt-20 gap-20'>
          <canvas ref={imageCanvasRef} onDragOver={handleDragOver} onDrop={handleDrop} className='w-[550px] h-[550px] bg-w5ite border-4 border-indigo-500 rounded-xl p-5' id='imageCanvas'></canvas>
          <ArrowRight size={64} className='text-gray-900'/>
          <svg ref={svgRef} id="svg" version="1.1" className='w-[550px] h-[550px] border-4 border-indigo-500 rounded-xl p-5 object-contain' xmlns="http://www.w3.org/2000/svg"></svg>
        </section>
        <button style={{ display: canDownload ? 'block' : 'none' }} className='bg-red-500 py-4 px-6 text-white rounded-lg' onClick={downloadSvg}>Descargar SVG</button>
    </main>
  )
}

export default Svgate