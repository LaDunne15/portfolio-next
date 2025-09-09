import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
    prependData: `@import "@/styles/variables.scss";`,
    includePaths: [path.join(__dirname, 'styles')],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
