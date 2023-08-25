import { BANK_LIST, ACCOUNT_FORM } from './account.js';

// 내가 지금만들어야하는 기능
// 일단 옵션셀렉에 뱅크리스트를 연결해서 셀렉트옵션으로 만들어줘야함
// 그리고 input에 value해서 어카운트 폼 해줘야함. 
// 버튼 클릭하면 제출되는건 따로 만들고, 각자로 일단 셀렉트옵션이 뜨게해야함.

const formList = document.getElementById("account-send-form")
const bankSelector = document.getElementById("bank-selector")
const inputList = document.getElementById("account-input")
const onButton = document.getElementById("addButton")
const ulListId = document.getElementById("account-list")




// 셀렉트 옵션에 은행리스트넣어주기 
    bankSelector.addEventListener("change",function(){
        const selectedBankId = bankSelector.value
        console.log(selectedBankId)
        const selectedBankName = BANK_LIST[selectedBankId]
        console.log(selectedBankName)
    })

    for(const bankId in BANK_LIST){
        const bankOption = document.createElement("option")
        bankOption.value = bankId
        bankOption.textContent = BANK_LIST[bankId]
        bankSelector.appendChild(bankOption)
        console.log(bankOption)
    }

    onButton.addEventListener("click",function(){
        if (inputList.value.length !== 12){
            alert("숫자를 12개 이상 입력해주세요.")
            
        }
        if (inputList.value.length === 12){
            
            
        }
    })

    // const selectedBankName = BANK_LIST[selectedBankId]
    // console.log(selectedBankName)
    
     function listUp(){
        
        
        const inputValue = inputList.value
        const resultArray = []
            

    for(const [id] of Object.entries(ACCOUNT_FORM)){
        const fullAccount = ACCOUNT_FORM[id].split('')
        const replaceArray = fullAccount.map(char => char !== '-' ? char : '' ).join('')          
        console.log(replaceArray) 
        const replaceArray2 = replaceArray.replaceAll('0', (match, offset) => inputValue[offset])
        console.log(replaceArray2)
        const hyphenSeparated = ACCOUNT_FORM[id].split('')
        console.log(hyphenSeparated)
        const hyphenSeparated2 = hyphenSeparated.map(item => item === '0' ? '' : item)
        console.log(hyphenSeparated2)
        
        const modifiedArray = [];
        for (let i = 0, j = 0; i < hyphenSeparated2.length; i++) {
            if (hyphenSeparated2[i] === '') {
                modifiedArray.push(replaceArray2[j]);
                j++;
            } else {
                modifiedArray.push(hyphenSeparated2[i]);
            }
        }
        const maskedArray = modifiedArray.map((char, index) => {
            if (index >= 3 && index <= 11) {  // 중간 부분에 * 적용 (하이픈 뒤부터 * 적용)
                return '*';
            }
            return char;
        });
        
        const finalArray = maskedArray.map((char, index) => {
            if (hyphenSeparated[index] === '-') {
                return '-';
            }
            return char;
        }
        );
        console.log(finalArray)
        const arrayRound = finalArray.join('')
        console.log(arrayRound); //1번부터 8번까지 있음. 
    
        resultArray.push({[id]:arrayRound})
        console.log(resultArray)
    }
    const finalResult = resultArray.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        console.log(finalResult)
        return finalResult
}
        // const selectedBankId = bankSelector.value
        // console.log(selectedBankId)


    //뱅크셀렉터의 벨류가 리스트업id랑 같은걸 찾으면 리턴함 뱅크셀
        

       // finalLastArray를 반복해서 selectedBankId 의 id와 서로 일치하면 내보낸다....하고싶은데.  


        //    return finalLastArray
    

    function onSubmit (e){
        e.preventDefault()

        const selectedBankId = bankSelector.value
        const selectedBankName = BANK_LIST[selectedBankId]
        const finalAccountNumber = listUp()
        console.log(selectedBankId)
        console.log(finalAccountNumber)
               
        if(finalAccountNumber.hasOwnProperty(selectedBankId)){
            const accountNumber = finalAccountNumber[selectedBankId]
            console.log(accountNumber)
            const li = document.createElement('li')
            li.textContent = `${selectedBankName}:${accountNumber}`
            ulListId.appendChild(li)
        }
                    
                    
                }
               

                    // const li = document.createElement('li')
                    // li.textContent = `${selectedBankName}:${finalAccountNumber}`
                    // ulListId.appendChild(li)
    
                
            
    
           

        // 셀렉티드 네임이랑 셀렉티드어카운트벨류가 같으면 리턴한다....
      

          
              
                   
                
            
           

       
    

        
    // 버튼이 true이면 제출한다 input안에 쓴 숫자와 selector에서 고른 은행을 뱅크:12-*****-34이렇게 
    // formList.addEventListener("submit",function(){

    //     e.preventDefault();
    //     if(inputList.value.length === 12){
           
    //         console.log(foundAccount)
    //     }
    // })
    
    formList.addEventListener("submit",onSubmit)
console.log(BANK_LIST);
console.log(ACCOUNT_FORM);
                
// 은행을 선택하고, 계좌번호를 12자리를 쓰고 버튼을 누르면 등록이되서 나오게 해야함. 
// 그러면 일단 맵함수랑, 배열사용을 해야할거같음.
//newInputList에 id는 selectedBankId를 넣고, name에는 input에 적은 숫자가 들어가야함. 


    // inputlist에 숫자를 적으면 newinputvalue의 빈객체에서 내가 input에 적은 value를 어카운트 폼 id에 맞춰서
    //숫자를넣어줘야함.

               //0대신에 inputList에 적은 숫자가 들어가야하니까....일단 0을 전체적으로 inputvalue로 대체해주고, 
               //split 된 배열안에 0이 inputValue의 숫자로 바뀌어야함. 
    
                
                //앞뒤로 숫자 2개는 남기고 나머지는 별로만들어야합니다.
                //partReplace => -를 없애줌
                //markPrint => 2~10까지 0을* 대체해줌
                //그러면이제 
               //계좌번호 정규식  ([0-9,\-]{3,6}\-[0-9,\-]{2,6}\-[0-9,\-])


               //계좌정규식에 이제 inputList숫자들을 대체해서 넣어야함. 
               //먼저해야할일 인풋에서 문자를(숫자)쓰면 그게 이제 어카운트폼에 매칭되서 넘어감
                        // const inputValue = inputList.value   //바꿔줘야함 꼭
             
                    //1234566789012의 숫자를 이제 accountForm에 맞춰서 바꾸고싶어 
                    
                    // const newCounterArr = replaceArray2.replace(/0/g, (match, offset) => ACCOUNT_FORM[id][offset])
                    // console.log(newCounterArr)

                    

                    

                
                //     const hyphenSeparated = ACCOUNT_FORM[id].split('-').join('')
                //     console.log(hyphenSeparated)
                //     const hyphenSeparated2 = hyphenSeparated.join('-')
                //     console.log(hyphenSeparated2)
                    

                    
                       
                    
                    
                //     const arrInputValue = []
                //     console.log(arrInputValue)

                      
                //       const newAccountNumber = [] //inputValue에 입력한대로 파싱되는 계좌 배열
                      
                      
     
                    // const firstNumber = fullAccount.slice(0,2)
                    // console.log(firstNumber)
                    // const lastNumber = fullAccount.slice(12,14)
                    // console.log(lastNumber)
                    // // const partReplace = fullAccount.map(char => char === '-' ? '': char)
                    // // console.log(partReplace)
                    // const makePrint = fullAccount.slice(2,13).map(char => char === '0' ? '*':char)
                    // console.log(makePrint)
                    // const starNumber = firstNumber + makePrint + lastNumber                     
                    // console.log(starNumber)
                    // const fullNumber = inputValue
                
                
                    // const fullName = ACCOUNT_FORM[id]
                    // console.log(fullName)
                    // const firstName = fullName[0]
                    // console.log(firstName)
                    // const secondName = inputValue.substring(0,2)
                    // console.log(secondName)
                    // const thirdName = inputValue.substring(2,fullName[1].length + 2)
                    // console.log(thirdName)
                    // const latsName = fullName[2]
                    // console.log(latsName)
                    

                   
                    // const newListForm = `${id}:${newFormattedName}`
                    // console.log(newListForm)
                
                
    
       
// input의 숫자가 12개이고 onButton을 눌렀을때면 제출이 되게하고, 만약에 input의 숫자가 12개가 안돼면 제출이안돼게하기
// inputListUp이 숫자 12개에 어카운트리스트 아이디에 숫자만 바꿔서 들어가게 해줘야함. 