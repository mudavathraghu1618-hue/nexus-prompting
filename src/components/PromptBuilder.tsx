
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PromptSection {
  role: string;
  personality: string;
  capabilities: string;
  behavior: string;
  format: string;
}

const PromptBuilder = () => {
  const { toast } = useToast();
  const [promptData, setPromptData] = useState<PromptSection>({
    role: 'an advanced AI assistant designed to provide helpful, accurate, and engaging responses',
    personality: 'knowledgeable, empathetic, and friendly with a professional yet conversational tone',
    capabilities: 'answer questions across multiple domains, provide step-by-step solutions, generate creative content, and summarize complex information',
    behavior: 'understand context, stay relevant, clarify when uncertain, and maintain a respectful tone',
    format: 'use clear headings, examples, and structured formatting when explaining complex topics'
  });

  const generatePrompt = () => {
    return `You are ${promptData.role}. Your personality should be ${promptData.personality}.

Core Capabilities:
You can ${promptData.capabilities}.

Behavioral Guidelines:
Always ${promptData.behavior}.

Response Format:
${promptData.format}.

Your goal is to deliver helpful, accurate, and user-friendly responses while making interactions feel natural and conversational. Adapt your tone and complexity based on the user's knowledge level.

Ready to assist! What would you like to know?`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePrompt());
    toast({
      title: "Copied to clipboard!",
      description: "Your custom AI prompt is ready to use.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">
          AI Prompt Builder
        </h1>
        <p className="text-muted-foreground text-lg">
          Create custom prompts for your AI assistant with precision and style
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Builder Panel */}
        <Card className="glass p-6 space-y-6">
          <div className="flex items-center space-x-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Customize Your AI</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="role">AI Role & Purpose</Label>
              <Textarea
                id="role"
                placeholder="Define what your AI assistant should be..."
                value={promptData.role}
                onChange={(e) => setPromptData({...promptData, role: e.target.value})}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="personality">Personality & Tone</Label>
              <Textarea
                id="personality"
                placeholder="Describe the personality traits..."
                value={promptData.personality}
                onChange={(e) => setPromptData({...promptData, personality: e.target.value})}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="capabilities">Core Capabilities</Label>
              <Textarea
                id="capabilities"
                placeholder="What should your AI be able to do..."
                value={promptData.capabilities}
                onChange={(e) => setPromptData({...promptData, capabilities: e.target.value})}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="behavior">Behavioral Rules</Label>
              <Textarea
                id="behavior"
                placeholder="How should your AI behave..."
                value={promptData.behavior}
                onChange={(e) => setPromptData({...promptData, behavior: e.target.value})}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="format">Response Format</Label>
              <Textarea
                id="format"
                placeholder="How should responses be structured..."
                value={promptData.format}
                onChange={(e) => setPromptData({...promptData, format: e.target.value})}
                className="mt-1"
              />
            </div>
          </div>
        </Card>

        {/* Preview Panel */}
        <Card className="glass p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Generated Prompt</h2>
            </div>
            <Button onClick={copyToClipboard} size="sm" className="animate-glow">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>

          <div className="bg-muted p-4 rounded-lg max-h-96 overflow-y-auto">
            <pre className="text-sm whitespace-pre-wrap font-mono">
              {generatePrompt()}
            </pre>
          </div>

          <div className="text-xs text-muted-foreground">
            This prompt is ready to use with ChatGPT, Claude, Gemini, or any other AI platform.
          </div>
        </Card>
      </div>

      {/* Templates Section */}
      <Card className="glass p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-primary" />
          Quick Templates
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="p-4 h-auto flex-col items-start"
            onClick={() => setPromptData({
              role: 'a coding assistant specialized in helping developers write clean, efficient code',
              personality: 'technical yet approachable, patient with beginners, thorough in explanations',
              capabilities: 'debug code, explain programming concepts, suggest best practices, and provide code examples in multiple languages',
              behavior: 'always provide working code examples, explain the logic behind solutions, and offer multiple approaches when possible',
              format: 'use code blocks with syntax highlighting, provide step-by-step explanations, and include comments in code'
            })}
          >
            <div className="font-semibold">Coding Assistant</div>
            <div className="text-xs text-muted-foreground">Perfect for programming help</div>
          </Button>

          <Button
            variant="outline"
            className="p-4 h-auto flex-col items-start"
            onClick={() => setPromptData({
              role: 'a creative writing companion that helps with storytelling, content creation, and literary projects',
              personality: 'imaginative, encouraging, and inspiring with a flair for creative expression',
              capabilities: 'generate story ideas, develop characters, improve writing style, create marketing copy, and provide editing suggestions',
              behavior: 'encourage creativity, provide constructive feedback, and adapt to different writing styles and genres',
              format: 'use rich descriptions, provide examples, and structure feedback with clear improvement suggestions'
            })}
          >
            <div className="font-semibold">Creative Writer</div>
            <div className="text-xs text-muted-foreground">For storytelling and content</div>
          </Button>

          <Button
            variant="outline"
            className="p-4 h-auto flex-col items-start"
            onClick={() => setPromptData({
              role: 'a learning tutor that makes complex subjects easy to understand for students',
              personality: 'patient, encouraging, and educational with a focus on building understanding',
              capabilities: 'explain difficult concepts, create study plans, provide practice problems, and adapt explanations to different learning styles',
              behavior: 'break down complex topics into simple steps, use analogies and examples, and check for understanding',
              format: 'use clear headings, bullet points, examples, and provide additional resources for further learning'
            })}
          >
            <div className="font-semibold">Learning Tutor</div>
            <div className="text-xs text-muted-foreground">Educational and patient</div>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PromptBuilder;
