/*
 * @lc app=leetcode.cn id=1606 lang=typescript
 *
 * [1606] 找到处理最多请求的服务器
 */

// @lc code=start
function busiestServers(
  k: number,
  arrival: number[],
  load: number[]
): number[] {
  const computers: { count: number; sum: number }[] = Array.from(
    { length: Math.min(k, arrival.length) },
    (_) => {
      return {
        count: 0,
        sum: 0,
      };
    }
  );
  function getI(x: number) {
    return x + 2 > k ? 0 : x + 1;
  }
  arrival.forEach((val, index) => {
    const s = index % k;
    let computer = computers[s];
    if (computer.sum <= val) {
      computer.count++;
      computer.sum = load[index] + val;
    } else {
      let i = getI(s);
      while (i !== s) {
        computer = computers[i];
        if (computer.sum <= val) {
          computer.count++;
          computer.sum = load[index] + val;
          break;
        }
        i = getI(i);
      }
    }
  });
  let max = 0;
  let res = [];
  computers.forEach((computer, index) => {
    const { count } = computer;
    if (count > max) {
      res = [index];
      max = count;
    } else if (count === max) {
      res.push(index);
    }
  });
  return res;
}
// @lc code=end

let k = 3,
  arrival = [1, 2, 3, 4, 8, 9, 10],
  load = [5, 2, 10, 3, 1, 2, 2];
(k = 3), (arrival = [1, 2, 3, 4, 5]), (load = [5, 2, 3, 3, 3]);
// (k = 3), (arrival = [1, 2, 3, 4]), (load = [1, 2, 1, 2]);
// (k = 3), (arrival = [1, 2, 3]), (load = [10, 12, 11]);
// (k = 3), (arrival = [1, 2, 3, 4, 8, 9, 10]), (load = [5, 2, 10, 3, 1, 2, 2]);
// (k = 7),
//   (arrival = [1, 3, 4, 5, 6, 11, 12, 13, 15, 19, 20, 21, 23, 25, 31, 32]),
//   (load = [9, 16, 14, 1, 5, 15, 6, 10, 1, 1, 7, 5, 11, 4, 4, 6]);
// (k = 2), (arrival = [1, 2, 3]), (load = [1000000000, 1, 1000000000]);
console.log(busiestServers(k, arrival, load));
