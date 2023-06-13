function threeSum(arr, target) {
    // write your code here

    
   
    let mindiff = 999;
        let diff=0;
        let temp=0;
        let sum=0;
    arr.sort((a,b)=>{
             if(a>b){
                 return 1;
             }
             if(b>a){
                 return -1;
             }
             if(a==b){
                 return 0;
             }
        })
        for(let i=0;i<arr.length-2;i++){
    
            let j=i+1;
            let k=arr.length-1;
            while(j<k){
   
                temp = arr[i]+arr[j]+arr[k];
                diff = Math.abs(Math.abs(temp)-target);
                if (diff==target){
                    return temp;
                }
                else if(diff<mindiff){
                    mindiff=diff;
                    sum=Math.abs(temp);
                }
                if(sum>target){
                    k--;
                }
                if(sum<target){
                    j++;
                }
            }
            
        }
    return sum;
      
    }

module.exports = threeSum;
