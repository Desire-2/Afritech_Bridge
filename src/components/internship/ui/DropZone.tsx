'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File as FileIcon } from 'lucide-react';

interface DropZoneProps {
  onFileSelect: (file: File) => void;
  file?: File | null;
  accept?: string;
  maxSize?: number;
  error?: string;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onFileSelect,
  file,
  accept = '.pdf,.doc,.docx',
  maxSize = 5 * 1024 * 1024,
  error,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      if (rejectedFiles.length > 0) {
        const rejection = rejectedFiles[0];
        if (rejection.errors[0].code === 'file-too-large') {
          alert(`File is too large. Maximum size is ${maxSize / 1024 / 1024}MB`);
        } else if (rejection.errors[0].code === 'file-invalid-type') {
          alert('Invalid file type. Please upload PDF, DOC, or DOCX');
        }
      }
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect, maxSize]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize,
    maxFiles: 1,
  });

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full">
      {!file ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
            isDragActive
              ? 'border-teal-500 bg-teal-500/10 scale-105'
              : 'border-teal-500/30 bg-transparent hover:border-teal-500/50'
          } ${error ? 'border-red-400 bg-red-400/5' : ''}`}
        >
          <input {...getInputProps()} />
          <Upload
            className={`mx-auto mb-3 transition-all duration-200 ${
              isDragActive ? 'w-12 h-12 text-teal-400 animate-bounce' : 'w-8 h-8 text-teal-500/60'
            }`}
          />
          <p className="text-sm font-semibold text-white mb-1">
            {isDragActive ? 'Drop your CV here' : 'Drag your CV here or click to browse'}
          </p>
          <p className="text-xs text-white/40">PDF, DOC, DOCX • Max {maxSize / 1024 / 1024}MB</p>
        </div>
      ) : (
        <div className="border border-teal-500/30 rounded-lg p-4 bg-teal-500/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
              <FileIcon className="w-5 h-5 text-teal-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white truncate max-w-xs">{file.name}</p>
              <p className="text-xs text-white/40">{formatFileSize(file.size)}</p>
            </div>
          </div>
          <button
            onClick={() => onFileSelect(null as any)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-white/60 hover:text-white" />
          </button>
        </div>
      )}
      {error && (
        <p className="mt-2 text-xs text-red-400 animate-[fadeIn_0.2s_ease-in] flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
          {error}
        </p>
      )}
    </div>
  );
};
