/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        appName: 'HRMS'
    },
    images: {
        domains: ['res.cloudinary.com']
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/candidateform',
            permanent: false
        }]
    }
}