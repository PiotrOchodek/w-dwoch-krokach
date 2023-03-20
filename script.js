const withPrefix = (prefix) => {
  return function (name) {
    return prefix + name;
  };
};

const greeting = withPrefix(`Witaj, `);
const goodbye = withPrefix(`Żegnaj, `);

console.log(greeting('Piotr'));
console.log(goodbye('Monika'));
