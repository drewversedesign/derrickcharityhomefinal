
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts'; // This data is WRLDS-themed and read-only

const Blog = () => {
  // Get the first blog post for the featured post section
  const featuredPost = blogPosts.find(post => post.id === '3') || null; // Still WRLDS featured post
  // Get the rest of the blog posts for the grid section
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title="Derrick Charity Home Blog - News & Updates" 
        description="Stay updated with the latest news, stories, and insights from Derrick Charity Home and our work in Uganda."
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"} // WRLDS image due to read-only data
        keywords={['derrick charity home blog', 'charity news', 'uganda stories', 'non-profit updates', 'child welfare blog']}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-300 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">News &amp; Updates</h1>
            <p className="text-xl text-gray-800 mb-6">
              The latest stories and developments from Derrick Charity Home.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div 
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                    style={{ 
                      backgroundImage: `url('${featuredPost.imageUrl}')`, // WRLDS image
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-white text-center bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                      <span className="px-3 py-1 bg-yellow-500/80 text-gray-900 rounded-full text-sm font-medium inline-block mb-4">Featured Story</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-500 text-sm mb-2">Published: {featuredPost.date}</p>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="outline" className="group border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white">
                      Read more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}
          
          {/* Other blog posts */}
          {otherPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'} // WRLDS image
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* Placeholder for charity content if blogPosts is empty or short */}
          {(blogPosts.length === 0 || blogPosts.length < 4) && Array.from({ length: Math.max(0, 4 - blogPosts.length) }).map((_, index) => (
            <BlogPostCard 
              key={`placeholder-charity-${index}`}
              title="Inspiring Story Coming Soon"
              excerpt="We'll be sharing more stories of hope and transformation from Derrick Charity Home. Stay tuned!"
              imageUrl={index % 2 === 0 ? "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" : "https://images.unsplash.com/photo-1593113630405-ea54c8d7d898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}
              date="Coming soon"
              slug="#"
              category="Updates"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
