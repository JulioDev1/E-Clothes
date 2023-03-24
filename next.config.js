module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  poweredByHeader: false,
  compiler: {
    styledComponents: true
  },
  compress: true,
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=432000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  }
};
