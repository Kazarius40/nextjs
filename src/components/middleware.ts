import {NextRequest, NextResponse} from "next/server";

export const middleware = (request: NextRequest) => {
    console.log('middleware');
}

export const config = {
    matcher: '/auth'
}