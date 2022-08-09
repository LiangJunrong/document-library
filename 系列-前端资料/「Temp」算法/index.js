const coinChange = (coins, amount) => {
  // 数组大小为 amount + 1，初始值也为 amount + 1
  const dp = Array.from(new Array(amount + 1), () => amount + 1);
  console.log('dp array: ', dp);

  // base case
  dp[0] = 0;

  // 外层 for 遍历所有取值
  for (let i = 0; i < dp.length; i++) {
    
    // 内层 for 获取所有选择的最小值
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];

      // 子问题无解，跳过
      if (i - coin < 0) {
        continue;
      }

      // 求极值
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  console.log('dp array end: ', dp);
  return (dp[amount] === amount + 1) ? -1 : dp[amount];
};

const coins = [3, 1, 6];
const amount = 9;
const result = coinChange(coins, amount);
console.log('result: ', result);