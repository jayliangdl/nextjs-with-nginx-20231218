import { NextResponse } from 'next/server';

export function middleware(request) {
  const date = new Date();
  const formatDate = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'.'+date.getMilliseconds();
  console.log(`Request to: ${request.nextUrl.pathname} at ${formatDate}`);
  return NextResponse.next();
}
