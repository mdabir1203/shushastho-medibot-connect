
interface DeepSeekResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class DeepSeekService {
  private static API_KEY_STORAGE_KEY = 'deepseek_api_key';
  private static BASE_URL = 'https://api.deepseek.com/chat/completions';

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    console.log('DeepSeek API key saved successfully');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async analyzePrescriptionWithAI(imageBase64: string): Promise<{ success: boolean; analysis?: string; error?: string }> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found. Please set your DeepSeek API key first.' };
    }

    try {
      console.log('Making request to DeepSeek API for prescription analysis');
      
      const response = await fetch(this.BASE_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'You are a medical prescription analyzer. Analyze the uploaded prescription image and extract: 1) Medicine names with dosages, 2) Instructions for taking medicines, 3) Doctor information if visible. If the image is not a valid prescription, clearly state it is invalid. Be precise and professional.'
            },
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: 'Please analyze this prescription image and extract all the medicine details, dosages, and instructions. If this is not a valid prescription, please tell me why.'
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: imageBase64
                  }
                }
              ]
            }
          ],
          temperature: 0.1,
          max_tokens: 1000
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('DeepSeek API error:', errorText);
        return { success: false, error: `API request failed: ${response.status} ${response.statusText}` };
      }

      const data: DeepSeekResponse = await response.json();
      console.log('DeepSeek API response:', data);

      if (data.choices && data.choices.length > 0) {
        const analysis = data.choices[0].message.content;
        return { success: true, analysis };
      } else {
        return { success: false, error: 'No analysis returned from API' };
      }
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to analyze prescription' 
      };
    }
  }

  static async testApiKey(apiKey: string): Promise<boolean> {
    try {
      console.log('Testing DeepSeek API key');
      const response = await fetch(this.BASE_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'user',
              content: 'Hello, this is a test message.'
            }
          ],
          max_tokens: 10
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error testing DeepSeek API key:', error);
      return false;
    }
  }
}
