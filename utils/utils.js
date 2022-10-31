const getRandomSlugs = function({ tactics, hooks }) {
  const randomTactic = tactics[Math.floor(Math.random()*tactics.length)];
  const randomHook = hooks[Math.floor(Math.random()*hooks.length)];
  return { randomTactic, randomHook }
}

export {
  getRandomSlugs
}
