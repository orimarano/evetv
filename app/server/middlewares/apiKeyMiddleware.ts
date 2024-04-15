import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

// Define your API key here or load it from environment variables
const API_KEY = 'your-api-key'; //TODO add to env

//export function apiKeyMiddleware(request: NextRequest) {
export function apiKeyMiddleware(req: NextApiRequest, res: NextApiResponse, next: Function) {

  const { apiKey } = req.headers;//todo que sea el valor de la key

  // Verify the API key
  if (false) {
    return NextResponse.error();
  }

  // API key is valid, continue with the request
  return NextResponse.next();
}
