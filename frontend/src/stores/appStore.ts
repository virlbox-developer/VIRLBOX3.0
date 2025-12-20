interface AppStore {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  notifications: Array<{ id: string; message: string; type: string }>;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  addNotification: (message: string, type: string) => void;
  removeNotification: (id: string) => void;
}

let appStore: AppStore = {
  sidebarOpen: true,
  theme: 'dark',
  notifications: [],

  setSidebarOpen: (open: boolean) => {
    appStore.sidebarOpen = open;
  },

  setTheme: (theme: 'light' | 'dark') => {
    appStore.theme = theme;
  },

  addNotification: (message: string, type: string) => {
    const id = Date.now().toString();
    appStore.notifications.push({ id, message, type });
  },

  removeNotification: (id: string) => {
    appStore.notifications = appStore.notifications.filter((n) => n.id !== id);
  },
};

export default appStore;