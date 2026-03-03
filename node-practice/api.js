async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch(err) {
    console.log("Error:", err);
  }
}
getData()