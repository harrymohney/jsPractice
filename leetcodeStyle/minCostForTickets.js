function mincostTickets(days, costs) {
  const dp = new Array(366).fill(0);
  let dayIdx = 0;

  for (let i = 1; i < 366; i++) {
      if (dayIdx === days.length) break;

      if (days[dayIdx] !== i) {
          dp[i] = dp[i - 1];
      } else {
          const oneDayPass = dp[Math.max(0, i - 1)] + costs[0];
          const sevenDayPass = dp[Math.max(0, i - 7)] + costs[1];
          const thirtyDayPass = dp[Math.max(0, i - 30)] + costs[2];
          dp[i] = Math.min(oneDayPass, sevenDayPass, thirtyDayPass);
          dayIdx++;
      }
  }

  return dp[days[days.length - 1]];
}
