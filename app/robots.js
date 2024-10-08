export default async function robots(){
    return {
        rules:[
            {
                userAgent: '*',
                allow: ['/','/favicon.ico'],
                disallow: ['/Profile','/StoryPage']
            }
        ],
        sitemap: 'https://www.gotembaishikawashuzo.com/sitemap.xml'
        // sitemap: "https://www.gotembaishikawashuzo.com/sitemap.xml"
    }
}