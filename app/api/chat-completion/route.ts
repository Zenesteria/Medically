import { NextResponse } from "next/server";
import OpenAI from "openai";

const POST = async (req:Request) => {
    const openai = new OpenAI()
    // const url = "https://api.openai.com/v1/chat/completions";
    try {
        const completion = await openai.chat.completions.create({
          messages: [
            { role: "system", content: "You are a helpful assistant." },
          ],
          model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0])
    } catch (error) {
       return new NextResponse('Internal Error', {status:401});
    }
}

export {POST}