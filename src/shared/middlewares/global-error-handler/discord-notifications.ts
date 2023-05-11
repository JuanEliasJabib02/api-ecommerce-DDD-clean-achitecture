import axios from 'axios';

export class DiscordNotification {
  private discordWebhookUrl: string;

  constructor(discordWebhookUrl: string) {
    this.discordWebhookUrl = discordWebhookUrl;
  }

  public async sendErrorNotification(errorDetails: any): Promise<void> {
    const notificationMessage = `An error occurred:\n\`\`\`${JSON.stringify(errorDetails, null, 2)}\`\`\``;
    const discordPayload = {
      content: notificationMessage
    };

    try {
      await axios.post(this.discordWebhookUrl, discordPayload);
      console.log('Error notification sent to Discord');
    } catch (error) {
      console.error('Failed to send error notification to Discord:', error);
    }
  }
}
