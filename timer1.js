let input = process.argv.slice(2)

const alarm = function(input) {
  input.forEach(num => { 
    if ((num > 0) && (!isNaN(num))) {
      num = num * 1000
      setTimeout(() => {
      process.stdout.write('\x07');
      }, num);
    }
  })
}

alarm(input);


