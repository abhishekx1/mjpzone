import React ,{useState} from "react";
import Data from './Data'
import SetQuestion from './Question'
import '../studentComponentCss/StudentFAQ.css'

function MainFAQ (){
    const[questions, setQuestions] = useState(Data);
    return <> 
          <main>
        <div className="container">
        <h2> Frequently Asked Questions </h2>
            <section className="info">
                {
                    questions.map((question) =>{
                        return <SetQuestion key={question.id} {...question}  />
                        
                    })
                
                }
            </section>
           
        </div>
    </main>
    </>
}

export default MainFAQ;