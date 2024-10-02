export default async function robots(){
    return {
        rules:[
            {
                userAgent: '*',
                allow: ['/','/Profile','/favicon.ico'],
                disallow: []
            }
        ],
        sitemap: 'https://www.gotembaishikawashuzo.com/sitemap.xml'
        // sitemap: "https://www.gotembaishikawashuzo.com/sitemap.xml"
    }
}