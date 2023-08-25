// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의
// 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.


function 숫자(num){

    if(num < 2) return false 
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false    // 나누어지면 소수가아님
        }
    }
    return true //나누어지면 소수 
}

function solution(nums) {

    let count = 0

    for ()


        //nums 에 일단 1~1000까지 랜덤으로 숫자를 넣어야하고?숫자의 갯수는 3개이상50개 이하여야함 
        //아니시바 1부터1000인데 무슨 50개로 어쩌란거야 
        //내가 nums[1~1000까지 무작위 수]라고 쳤을 때 얘가 그중에서 3개를 지가 골라서 소수 

        
    
    
    




    var answer = -1;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}