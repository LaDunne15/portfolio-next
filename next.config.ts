// next.config.ts
import { NextConfig } from 'next';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
    prependData: `@import "@/styles/variables.scss";`,
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
