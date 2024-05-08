class Twitter {
  constructor() {
      this.tweets = new Map(); // { userId: [{ tweetId, timestamp }] }
      this.followees = new Map(); // { userId: Set<followeeId> }
      this.time = 0;
  }

  postTweet(userId, tweetId) {
      if (!this.tweets.has(userId)) {
          this.tweets.set(userId, []);
      }
      this.tweets.get(userId).unshift({ tweetId, timestamp: this.time++ });
  }

  getNewsFeed(userId) {
      const tweets = [];
      if (this.tweets.has(userId)) {
          tweets.push(...this.tweets.get(userId));
      }
      if (this.followees.has(userId)) {
          for (const followeeId of this.followees.get(userId)) {
              if (this.tweets.has(followeeId)) {
                  tweets.push(...this.tweets.get(followeeId));
              }
          }
      }
      tweets.sort((a, b) => b.timestamp - a.timestamp);
      return tweets.slice(0, 10).map(tweet => tweet.tweetId);
  }

  follow(followerId, followeeId) {
      if (!this.followees.has(followerId)) {
          this.followees.set(followerId, new Set());
      }
      this.followees.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
      if (this.followees.has(followerId)) {
          this.followees.get(followerId).delete(followeeId);
      }
  }
}
