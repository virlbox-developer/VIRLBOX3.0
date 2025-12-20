interface VM {
  id: number;
  name: string;
  status: 'running' | 'stopped' | 'paused';
  cpu: number;
  memory: number;
  disk: number;
  createdAt: Date;
}

let vms: VM[] = [
  {
    id: 1,
    name: 'Server-01',
    status: 'running',
    cpu: 45,
    memory: 62,
    disk: 100,
    createdAt: new Date(),
  },
];

export const vmService = {
  getAll: async () => vms,

  getById: async (id: number) => {
    const vm = vms.find((v) => v.id === id);
    if (!vm) throw new Error('VM not found');
    return vm;
  },

  create: async (data: Omit<VM, 'id' | 'createdAt'>) => {
    const vm: VM = {
      id: Math.max(...vms.map((v) => v.id), 0) + 1,
      ...data,
      createdAt: new Date(),
    };
    vms.push(vm);
    return vm;
  },

  update: async (id: number, data: Partial<VM>) => {
    const vm = vms.find((v) => v.id === id);
    if (!vm) throw new Error('VM not found');
    Object.assign(vm, data);
    return vm;
  },

  delete: async (id: number) => {
    vms = vms.filter((v) => v.id !== id);
  },
};