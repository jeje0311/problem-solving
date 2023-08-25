import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/
//예약리스트의...배열안에서 id랑 phone가 각 input에 쓴거랑 똑같아야지 p에 넘버리스트가 뜸 
    const userInputValue = document.querySelector('input[name="user-name"]')
    const phoneInputValue = document.querySelector('input[name="user-phone"]')
    const reservationNumberValue = document.getElementById("reservation-number")
    const form = document.querySelector("form")

    /**각 input요소를 선택함. */
    
    /**각 input에 value를 넣어줌 */
    
    
    form.addEventListener('submit',function(e){
        e.preventDefault()
        
        const userInput = userInputValue.value
        const phoneInput = phoneInputValue.value
        console.log(userInput)
        console.log(phoneInput)

        const matchingReservation = RESERVATION_LIST.find((reservation)=>{
            return reservation.name === userInput && reservation.phone === phoneInput
        })

        if(matchingReservation) {
            reservationNumberValue.textContent = `${matchingReservation.number}`
        }   
        if(!matchingReservation) {
            reservationNumberValue.textContent = '일치하는 예약 번호가 없습니다.'
        }
        if(matchingReservation !== userInput || matchingReservation !== phoneInput) {
            alert('일치하는 내역이 없습니다')
        }
        
    })
    
    
 



    //1. 내가 input에 쓴 이름을 배열의 객체에서 똑같은 네임과,번호의 객체만 불러오기 해야함. 둘중 하나라도 틀리면 안됌. 
    form.addEventListener('submit',function(e){
        e.preventDefault()
        const userInput = userInputValue.value
        const phoneInput = phoneInputValue.value


        
        // .map(reservation => {
        //     const numberStart = reservation.indexOf('number: ') + 'number: '.length;
        //     return reservation.subStr(numberStart)
        // })
        //    console.log(matchingReservation) 
        })
        
        
    
        

    
    
    //2. 내가 phone에 쓴 번호와 똑같은 번호의 객체만 불러오기 해야함. 
    //3. 예약번호 확인을 눌렀을때 name과 phone이 서로 일치하는지 확인해야함. 일치하면 그에 맞는 번호를 p에뜨게해야함. 
    
    // 배열을 객체로 변화시켜줌. 객체안에 객체가아니라 객체안에 순서대로 들어가야함. 
    

     

