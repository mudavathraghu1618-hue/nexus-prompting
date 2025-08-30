
import PromptBuilder from "@/components/PromptBuilder";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-ai rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-ai rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-ai rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}} />
        
        <div className="container mx-auto px-4 py-12">
          <PromptBuilder />
        </div>
      </div>
    </div>
  );
};

export default Index;
