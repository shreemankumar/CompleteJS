//as detch is based on the promises so,
fetch("https://randomuser.me/api/")
  .then((rowdata) => rowdata.json())
  .then((rowdata) => {
    console.log(rowdata.results[0].name.title);
  });
