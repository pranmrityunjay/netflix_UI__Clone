import OpenAI from 'openai';
import {OPENAI_API_KEY} from "./constants"

const openai = new OpenAI({
  apiKey:"",
  dangerouslyAllowBrowser: true, // Access the environment variable directly
});

export default openai;
