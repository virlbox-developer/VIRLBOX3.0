export class NotificationService {
  static success(message: string): void {
    this.notify(message, 'success');
  }

  static error(message: string): void {
    this.notify(message, 'error');
  }

  static warning(message: string): void {
    this.notify(message, 'warning');
  }

  static info(message: string): void {
    this.notify(message, 'info');
  }

  private static notify(message: string, type: string): void {
    if ('Notification' in window) {
      new Notification('VIRLBOX', { body: message, tag: type });
    }
  }
}
