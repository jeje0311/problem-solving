import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/
//예약리스트의...배열안에서 id랑 phone가 각 input에 쓴거랑 똑같아야지 p에 넘버리스트가 뜸 
    const userName = document.getElementsByTagName("user-name") 
    const phoneNumber = document.getElementsByClassName("user-phone")
    const reservationNumber = document.getElementById("reservation-number")
    const form = document.querySelector("form")

     const userInputValue = userName.value
    // const phoneInputValue = phoneName.value
    
    //1. 내가 name에 쓴 이름과 똑같은 네임의 객체만 불러오기 해야함. 
    //2. 내가 phone에 쓴 번호와 똑같은 번호의 객체만 불러오기 해야함. 
    //3. 예약번호 확인을 눌렀을때 name과 phone이 서로 일치하는지 확인해야함. 일치하면 그에 맞는 번호를 p에뜨게해야함. 
    
    // 배열을 객체로 변화시켜줌. 객체안에 객체가아니라 객체안에 순서대로 들어가야함. 
    
    // function resultArray(){
        // const resultObject = {}
        // var count = 1
        
        // RESERVATION_LIST.forEach((obj)=>{
        //     console.log(obj)
        //     const id = count++
        //     const formattedString =`name: ${obj.name}, phone: ${obj.phone}, number: ${obj.number}`
        //     console.log(formattedString)
        //     resultObject[id]=formattedString        
        //     // return resultObject
        // })
        // console.log(resultObject)

        // const finalArray = resultObject()
        // console.log(finalArray)
        // return finalArray
    // }

    // form.addEventListener("submit",function(e){
    //     e.preventDefault()
    //     if(userName === input)
        
    // })
    


    

    


    
        
            
        
        
            
    
        //그러면 여기서는 객체 안에 있는 
        function nameComparison (){
            
            
        }
        
        
        
    



    function arraySeparation(){
        //일단 배열을 분리해야할거같다....배열을 
    }

//유저네임이랑 
    
    //     //여기에 userInputValue에 쓴 이름이 제출할때  reservation_list 의 이름이 같아야함. 
    //     //만약에 일치하는 사람이없으면 일치하는 항목이없다고 떠야함. 
    //     //매칭네임이 Reservationlist 에서이름을 가져와서 다른 const를 만들어서 그거랑 매칭이  
    //     const matchingName = 
    //     // if(userInputValue === ){}