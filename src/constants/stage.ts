type Stage = 'release' | 'dev'

let stage:Stage = 'release'

if (__DEV__) {
  console.log('Development');
  stage = 'dev'
}

export {stage}