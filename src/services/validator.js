export default async function (element, model, rules) {
  const inputs = element.querySelectorAll('input');

  const errors = [];

  inputs.forEach((input) => {
    const prop = input.attributes.getNamedItem('prop').value;

    const rule = rules[prop];

    if (rule) {
      const value = model[prop];
      const { required, message, format } = rule;

      if (required && !value) {
        errors.push({
          prop,
          message,
        });
      }

      if (format && value && !format.test(value)) {
        errors.push({
          prop,
          message,
        });
      }
    }
  });

  if (errors.length) {
    throw errors;
  }
}
