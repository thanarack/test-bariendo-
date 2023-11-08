import api from '../util/api';
import {
  BookCrateResponse,
  BookListRecentRequest,
  BookListRequest,
  BookRequest,
  BookResponse,
  DoctorsResponse,
  LoginRequest,
  LoginResponse,
  OrganizationsResponse,
  RegisterRequest,
  RegisterResponse,
} from './api.spec';

export const postLogin = (body: LoginRequest): Promise<LoginResponse> => {
  return api.post('/users/login', body);
};

export const postSignup = (
  body: RegisterRequest,
): Promise<RegisterResponse> => {
  return api.post('/users/register', body);
};

export const getOrganizations = (): Promise<OrganizationsResponse> => {
  return api.get('/appointment/organizations');
};

export const getDoctors = (): Promise<DoctorsResponse> => {
  return api.get('/appointment/doctor/list');
};

export const getBookList = (params: BookListRequest): Promise<BookResponse> => {
  return api.get('/appointment/book/list', { params });
};

export const getBookListRecent = (
  params: BookListRecentRequest,
): Promise<BookResponse> => {
  return api.get('/appointment/book/list/recent', { params });
};

export const postBook = (body: BookRequest): Promise<BookCrateResponse> => {
  return api.post('/appointment/book', body);
};

export const PREFIX_DATA = 'data.data.data';
