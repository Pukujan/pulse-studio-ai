import { useRef, useState } from 'react';
import { Upload, Check } from 'lucide-react';

interface LogoUploadProps {
  onUpload: (file: File) => void;
  uploadedLogo: string | null;
}

export function LogoUpload({ onUpload, uploadedLogo }: LogoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/svg+xml"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-blue-500 bg-blue-500/10'
            : uploadedLogo
            ? 'border-green-500 bg-green-500/10'
            : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
        }`}
      >
        {uploadedLogo ? (
          <div className="flex items-center gap-3">
            <img src={uploadedLogo} alt="Logo" className="w-12 h-12 object-contain rounded-lg bg-white p-1" />
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <p className="text-sm text-green-400">Logo uploaded</p>
              </div>
              <p className="text-xs text-slate-500 mt-1">Click to change</p>
            </div>
          </div>
        ) : (
          <div>
            <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p className="text-sm text-slate-300 mb-1">Upload your logo</p>
            <p className="text-xs text-slate-500">PNG, JPG, or SVG</p>
          </div>
        )}
      </div>
    </div>
  );
}
