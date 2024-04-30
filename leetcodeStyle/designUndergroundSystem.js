class UndergroundSystem {
  constructor() {
      this.checkIns = new Map();
      this.journeyTimes = new Map();
  }

  checkIn(id, stationName, t) {
      this.checkIns.set(id, { stationName, t });
  }

  checkOut(id, stationName, t) {
      const { stationName: startStation, t: startTime } = this.checkIns.get(id);
      const journey = `${startStation}->${stationName}`;
      const totalTime = t - startTime;
      const [sum, count] = this.journeyTimes.get(journey) || [0, 0];
      this.journeyTimes.set(journey, [sum + totalTime, count + 1]);
      this.checkIns.delete(id);
  }

  getAverageTime(startStation, endStation) {
      const journey = `${startStation}->${endStation}`;
      const [sum, count] = this.journeyTimes.get(journey);
      return sum / count;
  }
}
