/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:"https",
                hostname:"l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com",
                pathname: "/images",
                port: ""

            },
            {
                protocol:"https",
                hostname:"l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com",
                port: ""
            }
        ]
    }
};

export default nextConfig;
