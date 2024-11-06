import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sellcrea8api.nyc3.cdn.digitaloceanspaces.com',
        port: '', 
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            compact: true, // This will remove the "deoptimized styling" warning
          },
        },
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
          },
        },
      ],
    });

    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
