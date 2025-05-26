/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/embed',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-src 'self' https://inertia-arik.vercel.app/"
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
