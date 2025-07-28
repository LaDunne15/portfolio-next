// next.config.ts
import { NextConfig } from 'next';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.ts',
      },
    },
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
