/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['www.hostinger.co.id'], 
  },
  env: {
    browser: true,
    node: true,
  },
  extends: 'eslint:recommended',
};