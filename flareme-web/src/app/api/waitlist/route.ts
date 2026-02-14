import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // The Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbwCCO3F5h2tbn4aLruEzj41mPujzLBbRllpRftk9_LA86RrhqqftBgtZelGwt679VHH7Q/exec";

        if (!GOOGLE_SCRIPT_URL) {
            console.error('GOOGLE_SCRIPT_URL is not defined');
            return NextResponse.json({ success: false, message: 'GOOGLE_SCRIPT_URL missing' }, { status: 500 });
        }

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error in waitlist API:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
