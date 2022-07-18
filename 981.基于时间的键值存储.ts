/*
 * @lc app=leetcode.cn id=981 lang=typescript
 *
 * [981] 基于时间的键值存储
 */

// @lc code=start
interface IListItem {
  //   key: string
  value: string;
  timestamp: number;
}
interface IMap {
  [key: string]: IListItem[];
}
class TimeMap {
  list: IMap;
  constructor() {
    this.list = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push({ value, timestamp });
  }

  get(key: string, timestamp: number): string {
    let res = "";
    let pairs = this.list[key];
    if (pairs) {
      let low = 0,
        high = pairs.length - 1;
      while (low <= high) {
        let mid = Math.floor((high - low) / 2) + low;
        if (pairs[mid].timestamp > timestamp) {
          high = mid - 1;
        } else if (pairs[mid].timestamp < timestamp) {
          low = mid + 1;
        } else {
          res = pairs[mid].value;
          return res;
        }
      }
      if (high >= 0) {
        res = pairs[high].value;
        return res;
      }
    }
    return res;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1); // 存储键 "foo" 和值 "bar" ，时间戳 timestamp = 1
timeMap.get("foo", 1); // 返回 "bar"
timeMap.get("foo", 3); // 返回 "bar", 因为在时间戳 3 和时间戳 2 处没有对应 "foo" 的值，所以唯一的值位于时间戳 1 处（即 "bar"） 。
timeMap.set("foo", "bar2", 4); // 存储键 "foo" 和值 "bar2" ，时间戳 timestamp = 4
timeMap.get("foo", 4); // 返回 "bar2"
timeMap.get("foo", 5); // 返回 "bar2"
