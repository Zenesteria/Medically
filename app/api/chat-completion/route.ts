import { NextResponse } from "next/server";
import OpenAI from "openai";

const POST = async (req:Request) => {
    const openai = new OpenAI({apiKey:process.env.OPEN_AI_API_KEY})
    const body = await req.json()

    const data = JSON.parse(body)
    
    // const url = "https://api.openai.com/v1/chat/completions";
    try {
        const completion = await openai.chat.completions.create({
          messages: [
            { role: "system", content: data.message },
          ],
          model: "gpt-3.5-turbo",
        });
        return Response.json({message:completion.choices[0]})
    } catch (error) {
        console.log(error)
       return new NextResponse('Internal Error', {status:401});
    }
}

export {POST}