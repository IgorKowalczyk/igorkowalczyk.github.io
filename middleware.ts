import { createCsrfMiddleware } from '@edge-csrf/nextjs';

const csrfMiddleware = createCsrfMiddleware({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
});

export const middleware = csrfMiddleware;

export const config = {
  matcher: ['/', '/contact', '/api/contact'],
};