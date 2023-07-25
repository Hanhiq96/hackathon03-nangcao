let baseURL = "http://localhost:3000/api/v1/score-keeper";
let form = document.getElementById("create-form");
let btnDelete = document.getElementsByClassName("btn-danger");
let tbody = document.getElementById("tbody");

fetch(baseURL)
    .then((res) =>res.json())
    .then((data)) => {
        let {users} = data;
        users.forEach((element,index) => {
            tbody.innerHTML +=`
            <tr>
                        <th scope="row">${index+1}</th>
                        <td><input type="number" value="0" />${name}</td>
                        <td><input type="number" value="0" /></td>
                        <td><input type="number" value="0" /></td>
                        <td><input type="number" value="0" /></td>
                    </tr>
                    <tr>
                        <th scope="row">Round 1</th>
                        <td><input type="number" value="0" /></td>
                        <td><input type="number" value="0" /></td>
                        <td><input type="number" value="0" /></td>
                        <td><input type="number" value="0" /></td>
                    </tr>
            
            `
        });
    }

form.addEventListener("submit", async (e) => {
    e.preventDefault(); 
    try {
      let res = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      let data = await res.json();
      console.log(data);
  
    } catch (error) {
      console.log(error);
    }
  });
  