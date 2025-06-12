// Sound Effects Utility for WhatsApp Button
class SoundEffects {
  private audioContext: AudioContext | null = null;
  private sounds: Map<string, AudioBuffer> = new Map();
  private isEnabled: boolean = true;

  constructor() {
    this.initAudioContext();
  }

  private initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.warn('AudioContext not supported, sound effects disabled');
      this.isEnabled = false;
    }
  }

  // Generate notification sound using Web Audio API
  private generateNotificationSound(frequency: number = 800, duration: number = 0.3): AudioBuffer | null {
    if (!this.audioContext) return null;

    const sampleRate = this.audioContext.sampleRate;
    const buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      const envelope = Math.exp(-t * 3); // Exponential decay
      data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.3;
    }

    return buffer;
  }

  // Generate success sound
  private generateSuccessSound(): AudioBuffer | null {
    if (!this.audioContext) return null;

    const sampleRate = this.audioContext.sampleRate;
    const duration = 0.5;
    const buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      const envelope = Math.exp(-t * 2);
      const freq1 = 523.25; // C5
      const freq2 = 659.25; // E5
      const freq3 = 783.99; // G5
      
      data[i] = (
        Math.sin(2 * Math.PI * freq1 * t) * 0.2 +
        Math.sin(2 * Math.PI * freq2 * t) * 0.15 +
        Math.sin(2 * Math.PI * freq3 * t) * 0.1
      ) * envelope;
    }

    return buffer;
  }

  // Generate click sound
  private generateClickSound(): AudioBuffer | null {
    if (!this.audioContext) return null;

    const sampleRate = this.audioContext.sampleRate;
    const duration = 0.1;
    const buffer = this.audioContext.createBuffer(1, sampleRate * duration, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      const envelope = Math.exp(-t * 20);
      data[i] = Math.sin(2 * Math.PI * 1000 * t) * envelope * 0.2;
    }

    return buffer;
  }

  // Play sound
  private async playSound(buffer: AudioBuffer | null) {
    if (!this.audioContext || !buffer || !this.isEnabled) return;

    try {
      // Resume audio context if suspended
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      const source = this.audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(this.audioContext.destination);
      source.start(0);
    } catch (error) {
      console.warn('Failed to play sound:', error);
    }
  }

  // Public methods
  async playNotification() {
    const sound = this.generateNotificationSound();
    await this.playSound(sound);
  }

  async playSuccess() {
    const sound = this.generateSuccessSound();
    await this.playSound(sound);
  }

  async playClick() {
    const sound = this.generateClickSound();
    await this.playSound(sound);
  }

  // Enable/disable sounds
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  isSoundEnabled(): boolean {
    return this.isEnabled;
  }
}

// Create singleton instance
const soundEffects = new SoundEffects();

export default soundEffects; 