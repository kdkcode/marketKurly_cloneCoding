import React, {useState,useEffect} from 'react'

// 마지막으로 더미 데이터 생성
// 만약 이거와 동일하면 로그인 시켜줌
const User = {
    email: 'test123@example.com',
    pw: 'test222@@@@'
}




export default function Login() {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState("");
    
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    // 버튼 활성화 state
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        // 이메일 유효성 검사하는 정규식 표현
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        
        if(regex.test(email)){
            setEmailValid(true);

        } else{
            setEmailValid(false);
        }


    }


    const handlePassword = (e) => {
        setPw(e.target.value);

        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if(regex.test(pw)){
            setPwValid(true);
        } else{
            setPwValid(false);
        }

    }


    // useEffect 훅을 이용해서 버튼활성화 하기 <확인> 버튼
    // emailValid,pwValid <- 2개의 state가 변화할 때마다 버튼이 활성화가 바뀌게 됨
    useEffect(() => {
        if(emailValid && pwValid ){
            setNotAllow(false);
            return ;
        }
        setNotAllow(true);
    },[emailValid,pwValid])

    // const user와 동일하면 confirm 해주는 함수

    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw ){
            alert('로그인에 성공하였습니다.');
        } else{
            alert('등록되지 않은 회원입니다.');
        }
    }

    return (
        <div className="page">
            <div className = "titleWrap">
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input 
                    type="text"
                    className="input"
                    placeholder="test@gmail.com" 
                    value={email}
                    // 입력할 때마다 값을 받아옴
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={handleEmail}
                    />    
                </div>
                    {/* 이메일이 올바를 때만 띄워주기 */}
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                            <div>올바른 이메일을 입력해주세요.</div>                   
                    )}
                </div>


                <div styles={{marginTop: "26px"}}className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input 
                    type="password"
                    className="input" 
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상" 
                    value={pw}
                    onChange={handlePassword}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
            </div>

            <div>
                {/* disabled 되면 사용할 수 없다는뜻 */}
                <button onClick={onClickConfirmButton} disabled={notAllow}className="bottomButton">
                    확인
                </button>
            </div>

        </div>
    )





}