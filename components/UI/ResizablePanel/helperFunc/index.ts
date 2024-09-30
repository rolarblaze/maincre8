/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.

  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/

export const ignoreCircularReferences = () => {
  const seen = new WeakSet<object>();
  return (key: string, value: any) => {
    if (key.startsWith("_")) return;
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
