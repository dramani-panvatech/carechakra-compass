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
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 border border-border/50 group hover:border-accent/20"
            >
              {/* Image Placeholder */}
              <div className="h-52 bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 flex items-center justify-center text-7xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                <span className="relative z-10">{post.image}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <button className="inline-flex items-center text-accent hover:text-accent-light font-semibold text-sm transition-all duration-300 group/btn">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
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