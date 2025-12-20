import { Request, Response } from 'express';

// Mock VM data
let vms: any[] = [
  { id: 1, name: 'Server-01', status: 'running', cpu: 45, memory: 62, disk: 100 },
  { id: 2, name: 'Server-02', status: 'running', cpu: 32, memory: 41, disk: 80 },
];

export const vmController = {
  getAll: (req: Request, res: Response) => {
    res.json(vms);
  },

  getById: (req: Request, res: Response) => {
    const vm = vms.find((v) => v.id === parseInt(req.params.id));
    if (!vm) return res.status(404).json({ message: 'VM not found' });
    res.json(vm);
  },

  create: (req: Request, res: Response) => {
    const newVm = {
      id: vms.length + 1,
      ...req.body,
      createdAt: new Date(),
    };
    vms.push(newVm);
    res.status(201).json(newVm);
  },

  update: (req: Request, res: Response) => {
    const vm = vms.find((v) => v.id === parseInt(req.params.id));
    if (!vm) return res.status(404).json({ message: 'VM not found' });
    Object.assign(vm, req.body);
    res.json(vm);
  },

  delete: (req: Request, res: Response) => {
    vms = vms.filter((v) => v.id !== parseInt(req.params.id));
    res.json({ message: 'VM deleted' });
  },
};