function getValue(){
    var dep = 0;
    var len1 = 0;
    var len2 = 0;
    var len3 = 0;
    var len4 = 0;
    var len5 = 0;

    //循环
    len5 = 4;
    while(true){
        len1 = 5;
        while(true){
            
            len4 = len5 + len1 / 5;
            if(len4 % 3 !== 0){
                continue; //如果len4不是3的倍数，结束本次循环进入下一次循环
            }
            len3 = len4 + len5 / 4;
            if(len3 % 2 !== 0){
                continue; //如果len3不是2的倍数，结束本次循环进入下一次循环
            }
            len2 = len3 + len4 / 3;
            if(len2 + len3 / 2 === len1){
                dep = len1 * 2 + len2;
                return dep;
            }
            if(len2 + len3 / 2 < len1){
                break;   //len1的值过大，需要切换至外部循环
            }
            len1 += 5
        }
        len5 += 4;
    }
}

console.log(getValue())

// 井深和绳子长度都是整数
// len1 * 2 + len2 === dep
// len2 * 3 + len3 === dep
// len4 * 4 + len4 === dep
// len5 * 5 + len5 === dep
// len6 * 6 + len1 === dep

// 由上面的五元一次方程可以得到下面等式
// len2+len3 / 2 === len1
// len3+len4 / 3 === len2
// len4+len5 / 4 === len3
// len5+len1 / 5 === len4

//因为绳子长度确定是整数，所以
// len3是2的倍数
// len4是3的倍数
// len5是4的倍数
// len1是5的倍数

// 编写一个两层循环,外层循环假设len5的值，内层循环假设len1的值，同时假设井深小于1000米，代码如下所示
