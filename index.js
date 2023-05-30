export default (content) => {
  const [, ...data] = content.split('\n');
  console.log(`Число записей: ${data.length}`);
  const words = data.map((item) => item.split('|'));
  const districtsA = words.map((item) => item.at(-2));
  const districts = districtsA.map((district) => district.trim());
  console.log(`Список округов: ${districts.sort().join(', ')}`);
  const squaresAS = words.map(word => word.at(3))
  const squares = squaresAS.map((item) => parseInt(item.split(' ').join('')));
  const square = Math.max(...squares);
  console.log(`Наибольшая площадь: ${square} кв.км.`)
}
