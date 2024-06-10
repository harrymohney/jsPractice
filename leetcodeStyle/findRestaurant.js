function findRestaurant(list1, list2) {
  const map = {};
  list1.forEach((item, index) => map[item] = index);
  let minSum = Infinity, result = [];
  list2.forEach((item, index) => {
      if (item in map) {
          const sum = index + map[item];
          if (sum < minSum) {
              minSum = sum;
              result = [item];
          } else if (sum === minSum) {
              result.push(item);
          }
      }
  });
  return result;
}
// Test
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
// Output: ["Shogun"]
