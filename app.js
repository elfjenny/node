
process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you ?')
process.stdin.on('data', (age) => {
  const now = new Date().getFullYear();
  let naissance = now-age; 
  console.log(naissance);
   
  process.exit()
})

const now = new Date().getFullYear();
