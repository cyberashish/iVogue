/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    reactStrictMode:true,
      sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
};

export default nextConfig;