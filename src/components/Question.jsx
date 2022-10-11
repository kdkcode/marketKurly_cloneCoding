import React, {useState} from 'react'
import styled from 'styled-components'


export default function Question({title,questionList}) {
   const [checkedElement, setCheckedElement] = useState(-1);

    const onChangeRadioButton = (e) =>{
        setCheckedElement(Number(e.target.value));
        console.log(typeof e.target.value);
    }



  return (
    <QuestionWrap>
        <div className='questionTitle'>{title}</div>
        <div>
            {/* map함수로 하나씩 뿌려주기 */}
            {questionList.map((question, index) => (
                <RadioWrap key={index}>
                    <input 
                    type='radio'
                    value={index}
                    checked={checkedElement === index}
                    onChanage={onChangeRadioButton}
                    />
                    <div className='quetionText'>{question}</div>

                </RadioWrap>
            ))

            }
        </div>
    </QuestionWrap>
  )
}

const QuestionWrap = styled.div`
    
    margin-bottom: 16px;

    .questionTitle{
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: bold;
    }
`;

const RadioWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    .questionText{
        margin-left: 8px;
    }


`;