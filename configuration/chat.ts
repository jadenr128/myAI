import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hey there! I'm ${AI_NAME}, your personal insurance assistant—here to help with everything **insurance**!🚙🏡🏥
I know that entering the real world is tough, and the last thing you want to stress about is insurance. But that’s where I come in!  
Whether you're completely lost and don’t know where to start, or you just need a little clarification, I’ll break things down without the confusing jargon.  
So, what can I cover for you today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Hmm... I’m not sure about that one! Try asking about auto, home, renters, or health insurance, and I’ll do my best to help!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Whew, that was a lot! Feel free to ask another question if you need more details!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
