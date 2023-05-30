export default (content) => {
  const [, ...data] = content.split('\n');
  console.log(`Число записей: ${data.length}`);
  const words = data.map((item) => item.split('|'));
  const districts = words.map((item) => item.at(-2));
  console.log(districts.sort());
  
}
