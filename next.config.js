module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://webkfc.neotelecd.com/neoapi/webservice.asmx/:path*'
      }
    ];
  },
  exportTrailingSlash: true, 
  images: {
    unoptimized: true,
  },
  distDir: 'out', 
};
