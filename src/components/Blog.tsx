import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "What to Do After a Car Accident",
      excerpt: "Essential steps to protect yourself legally and financially after an auto accident. Learn what documentation you need and how to handle insurance companies.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Personal Injury",
      image: "🚗"
    },
    {
      title: "Understanding Custody Rights",
      excerpt: "A comprehensive guide to child custody laws, different types of custody arrangements, and how to protect your parental rights during divorce proceedings.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Family Law",
      image: "👨‍👩‍👧‍👦"
    },
    {
      title: "How to Choose the Right Attorney",
      excerpt: "Key factors to consider when selecting legal representation. Learn what questions to ask and red flags to watch out for when hiring a lawyer.",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Legal Advice",
      image: "⚖️"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Legal Insights & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles on legal topics that matter to you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl">
                {post.image}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <button className="flex items-center text-accent hover:text-accent-light font-medium transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;