import { apiKeyMiddleware } from './app/server/middlewares/apiKeyMiddleware';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    return apiKeyMiddleware(request);
}

// See "Matching Paths" below to learn more
export const config = {
  // Matcher path can be defined as per your requirement
  matcher: '/',
};
