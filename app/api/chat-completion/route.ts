import { NextResponse } from "next/server";

const POST = async (req:Request) => {
    const url = "https://api.openai.com/v1/chat/completions";
    try {
        
    } catch (error) {
       return new NextResponse('Internal Error', {status:401});
    }
}

export {POST}