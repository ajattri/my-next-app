import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  webpack(config, options) {
    // Set up an alias for '@pages' to point to the 'src/pages' directory
    config.resolve.alias['@pages'] = join(__dirname, 'src', 'pages');
    return config;
  },
};

export default nextConfig;

