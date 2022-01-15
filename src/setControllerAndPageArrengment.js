export const getControllers = async () => {
  const res = await fetch("controllers.json");
  const data = await res.json();
  return data.results;
};

export const getPageConfig = async (callback) => {
  const res = await fetch("pagesConfig.json");
  const data = await res.json();
  return data.results;
};
