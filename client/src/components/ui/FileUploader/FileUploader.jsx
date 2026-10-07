import React, { useRef } from 'react';
import { UploadCloud } from 'lucide-react';

export function FileUploader({ onFileSelect, accept = '*', label = 'Upload Document or Image' }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 dark:bg-slate-900/30"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
        <UploadCloud className="w-5 h-5" />
      </div>
      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</p>
      <p className="text-xs text-slate-400 mt-1">PNG, JPG, PDF up to 10MB</p>
    </div>
  );
}

export default FileUploader;
