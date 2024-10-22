import{Component} from 'react'
import './index.css'
class LetterCalculator extends Component{
    state={inputValue:"",count:0}
    calaculateLetters=(event)=>{
        const word=event.target.value
        const lettersOnly = word.match(/[a-zA-Z]/g); // Match only letters (both lowercase and uppercase)
        const numberOfLetters = lettersOnly ? lettersOnly.length : 0;
        this.setState({inputValue:event.target.value,count:numberOfLetters})
    }
    render()
    {   const{count,inputValue}=this.state
        return(
            <div className='container'>
                <div className='letter-card'>
                    <h1> Calculate the Letters You Enter</h1>
                    <label> Enter the Letter</label>
                    <input type='text' placeholder='enter the word' value={inputValue} onChange={this.calaculateLetters}/>
                    <div className='letters'>no of letters {count}</div>
                </div>
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "/>
                </div>
           
            </div>
        )
    }
}
export default LetterCalculator