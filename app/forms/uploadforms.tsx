'use client';

import { useState } from 'react';

export default function MultiUpload() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });

    setUploading(true);
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const blobs = await res.json();
    setUrls(blobs.map((b: any) => b.url));
    setUploading(false);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {urls.length > 0 && (
        <ul>
          {urls.map((url, idx) => (
            <li key={idx}>
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
