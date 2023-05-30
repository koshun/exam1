export default (content) => {
  const [, ...data] = content.split('\n');
  console.log(`Число записей: ${data.length}`);
  const words = data.map((item) => item.split('|'));
  const districts = words.map((item) => item.at(-2));
  console.log(districts.sort());
  const squaresAS = words.map(word => word.at(3))
  const squares = squaresAS.map((item) => parseInt(item.split(' ').join('')));
  
  //console.log(squares);
  const square = Math.max(...squares);
  console.log(`Наибольшая площадь: ${square} кв.км `)
}
