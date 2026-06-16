import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

async function test() {

  try {

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(
      "Explain Arrays in DSA in 3 simple lines."
    );

    console.log("\nSUCCESS:\n");

    console.log(
      result.response.text()
    );

  }

  catch (error) {

    console.log("\nERROR:\n");

    console.error(error);

  }

}

test();