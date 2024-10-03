// this is a special sitemap generator function in Nextjs which must have sitemap as filename
export default function sitemap(){
    return [
        {
            url: 'https://www.gotembaishikawashuzo.com',
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: 'https://www.gotembaishikawashuzo.com/Profile',
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 0.7
        },
        {
            url: 'https://www.gotembaishikawashuzo.com/StoryPage',
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 0.7
        }
    ]
} 