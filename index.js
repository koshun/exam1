import _ from 'lodash';

export default (content) => {
  const [, ...data] = content.split('\n');
  console.log(`Число записей: ${data.length}`);
  const words = data.map((item) => item.split('|'));
  const districtsA = _.uniq(words.map((item) => item.at(-2)));
  const districts = districtsA.map((district) => district.trim());
  console.log(`Список округов: ${districts.sort().join(', ')}`);
  const squaresAS = words.map(word => word.at(3))
  const squares = squaresAS.map((item) => parseInt(item.split(' ').join('')));
  const square = Math.max(...squares);
  console.log(`Наибольшая площадь: ${square} кв.км.`);

  const four = words
  .filter((word) => word.at(1).split(' ').includes('Республика'))
  .map((word) => {
    const [, republic, quantity] = word
    return {r: republic.trim(), q: parseInt(quantity.split(' ').join(''))};
  });
  const resp = (_.maxBy(four, (o) => o.q)).r;
  console.log(`Республика с наибольшим количеством населения: ${resp}`);

  const five = words.reduce((acc, item) =>{
    const [, name, population, square] = item;
    //console.log(population, square);
    const quantity = parseInt(population.split(' ').join('')) / parseInt(square.split(' ').join(''));
    const trimName = name.trim();
    acc.push({'n': trimName, 'q': quantity})
   return acc;
  }, []);
  const min = _.minBy(five, (o) => o.q);
  console.log(`Наименьшая плотность населения: ${min.n}`);
}
