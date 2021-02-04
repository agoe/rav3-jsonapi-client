export default {
  total: 'total',
  headers: {
    Accept: 'application/vnd.api+json; charset=utf-8',
    'Content-Type': 'application/vnd.api+json; charset=utf-8'
  },
  updateMethod: 'PATCH',
  arrayFormat: 'brackets'
};

export const sum = (x: number, y: number): any => {
  x = x + 1;
  return { x: x, y: y, z: x + y };
};
