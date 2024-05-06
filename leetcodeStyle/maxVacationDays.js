function maxVacationDays(flights, days) {
  const n = flights.length;
  const k = days[0].length;
  const dp = Array.from({ length: n }, () => Array(k).fill(0));

  for (let week = k - 1; week >= 0; week--) {
      for (let currentCity = 0; currentCity < n; currentCity++) {
          dp[currentCity][week] = days[currentCity][week] + dp[currentCity][week + 1];

          for (let nextCity = 0; nextCity < n; nextCity++) {
              if (flights[currentCity][nextCity]) {
                  dp[currentCity][week] = Math.max(dp[currentCity][week], days[nextCity][week] + dp[nextCity][week + 1]);
              }
          }
      }
  }

  return dp[0][0];
}
