import React, { useState } from 'react';
import './contactUs.css';
import axios from 'axios';

function ContactUs() {


const [question, setQuestion] = useState("")
const [answer, setAnswer] = useState("")
const [loading, setLoading] = useState(false)

const handleQuestionChange = (e: any) => {
    setQuestion(e.target.value)
}

const askQuestion = async () =>{
  setLoading(true)
  try{
    const response = await axios.post("/api/question", { question });
    setAnswer(response.data.answer)
  } catch(error){
    console.error(error)
    setAnswer("An error has occured")
  }finally{
    setLoading(false)
  }
}
  return (
    <div>
    <p>{answer}</p>
      <form >
          <input type="text" value={question} onChange={handleQuestionChange}  />
          <input type="submit" value="Enviar"  onClick={askQuestion}
          disabled={loading}/>
      </form>
    </div>
  );
}

export default ContactUs;
