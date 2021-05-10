function jump(id) {
  var elmnt = document.getElementById(id);
  elmnt.scrollIntoView({
    behavior: 'smooth'
  });
}



$(function () {
  $('#terminal').terminal((command, term) => {
    if (command === '--help') {
      term.echo(JSON.stringify('[--help]')).resume();
    } else if (command !== '') {
      let start = performance.now();
      term.pause();
      axios.get(`http://104.131.177.195/v1?app=stock&method=get_price&params[symbol]=${command}`)
        .then(res => {
          let data = res.data;
          console.log(data)
          term.echo(JSON.stringify(data, undefined, 2)).resume();
          let duration = 0;
          if ('confirmed_at' in data && 'started_at' in data) {
            duration = Number(data['confirmed_at']) - Number(data['started_at']);
          } else {
            let end = performance.now();
            duration = (end - start).toFixed(0);
          }
          term.echo(`\n`).resume();
          term.echo(`Execution time: ${duration} ms`).resume();
          term.echo(`\n`).resume();
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, {
    greetings: 'Enter a stock symbol (e.g tsla)\n',
    prompt: "muon-node$ ",
    enabled: false,
    focus: true
  })
}
);



