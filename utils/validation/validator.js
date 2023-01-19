const useValidator = () => (arr) => {
  if (!Array.isArray(arr))
    throw Error(
      "Expected a array of objects like : { value:'',title:'example',validation?:{length:?number,pattern:?'String'}}"
    );

  let filteredArray = arr.filter((el) => el.validation);
  return filteredArray
    .map((el) => {
      if (el.validation.pattern && el.validation?.length) {
        if (
          !el.value.includes(el.validation.pattern) &&
          el.value.length < el.validation.length
        )
          return {
            field: el.title,
            error: `enter proper ${el.title} and ${el.value.length} is not enough`,
          };
      }

      if (el.validation.pattern)
        if (!el.value.includes(el.validation.pattern))
          return { field: el.title, error: `This is not a proper ${el.title}` };
      if (el.validation.length)
        if (el.value.length < el.validation.length)
          return {
            field: el.title,
            error: `${el.value.length} length is not enough for ${el.title}`,
          };
    })
    .filter((el) => el);
};

export { useValidator };
