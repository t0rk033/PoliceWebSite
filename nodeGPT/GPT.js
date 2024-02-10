import { OpenAIApi, Configuration} from "openai"

export default async (req,res) =>{
    const {question} = req.body

    if(!question){
        return res.status(400).json({error: "Question is required"})
    }
    const Configuration = new Configuration({
        apikey: "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"
    })
    const openai = new OpenAIApi(Configuration)
    try{
        const result = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: question,
            max_tokens: 500
        })
        return res.json({answer: result.data.choices[0].text})
    } catch(error){
        return res.status(500).json({error: "error fetching answer"})
    }
}