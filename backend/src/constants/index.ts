export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export const VM_STATUS = {
  RUNNING: 'running',
  STOPPED: 'stopped',
  PAUSED: 'paused',
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};