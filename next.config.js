/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        appName: 'HRMS'
    },
    images: {
        domains: ['res.cloudinary.com', 'localhost']
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/candidateform',
            permanent: false
        }]
    }
}