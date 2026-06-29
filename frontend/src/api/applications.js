import axios from 'axios';

const BASE = 'http://localhost:5000/api/applications';

export const getAll        = ()        => axios.get(BASE);
export const getOne        = (id)      => axios.get(`${BASE}/${id}`);
export const create        = (data)    => axios.post(BASE, data);
export const updateStatus  = (id, status) => axios.patch(`${BASE}/${id}/status`, { status });
export const update        = (id, data)   => axios.put(`${BASE}/${id}`, data);
export const remove        = (id)      => axios.delete(`${BASE}/${id}`);