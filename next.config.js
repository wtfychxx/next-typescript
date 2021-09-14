/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        appName: 'HRMS'
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/candidateform',
            permanent: true
        }]
    }
}