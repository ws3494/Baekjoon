function solution(arr) {
    var answer = 0;
  const sum =  arr.reduce((a,b)=>{
     return a+b  
    },0)
 answer= sum / arr.length
  
    return answer;
}