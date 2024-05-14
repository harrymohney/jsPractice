class LogSystem {
  constructor() {
      this.logs = [];
  }

  put(id, timestamp) {
      this.logs.push({ id, timestamp });
  }

  retrieve(s, e, gra) {
      const indexMap = {
          'Year': 4,
          'Month': 7,
          'Day': 10,
          'Hour': 13,
          'Minute': 16,
          'Second': 19
      };

      const index = indexMap[gra];
      const start = s.slice(0, index);
      const end = e.slice(0, index);

      return this.logs.filter(log => {
          const ts = log.timestamp.slice(0, index);
          return ts >= start && ts <= end;
      }).map(log => log.id);
  }
}
