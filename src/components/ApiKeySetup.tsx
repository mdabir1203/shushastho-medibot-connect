
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { DeepSeekService } from "@/services/DeepSeekService";
import { Eye, EyeOff, Key } from "lucide-react";

interface ApiKeySetupProps {
  onApiKeySet: () => void;
}

export const ApiKeySetup: React.FC<ApiKeySetupProps> = ({ onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const { toast } = useToast();

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your DeepSeek API key",
        variant: "destructive",
      });
      return;
    }

    setIsValidating(true);
    const isValid = await DeepSeekService.testApiKey(apiKey.trim());
    
    if (isValid) {
      DeepSeekService.saveApiKey(apiKey.trim());
      toast({
        title: "Success",
        description: "DeepSeek API key saved and validated successfully!",
      });
      onApiKeySet();
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please check your DeepSeek API key and try again",
        variant: "destructive",
      });
    }
    setIsValidating(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Key className="h-5 w-5" />
          <span>Setup DeepSeek API</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-4">
            To use real prescription analysis, please enter your DeepSeek API key. 
            You can get one for free at{' '}
            <a 
              href="https://platform.deepseek.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              platform.deepseek.com
            </a>
          </p>
          <div className="relative">
            <Input
              type={showApiKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your DeepSeek API key"
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setShowApiKey(!showApiKey)}
            >
              {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <Button 
          onClick={handleSaveApiKey} 
          disabled={isValidating}
          className="w-full"
        >
          {isValidating ? 'Validating...' : 'Save API Key'}
        </Button>
      </CardContent>
    </Card>
  );
};
