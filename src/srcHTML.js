//the rendering of the team profiles so exporting to create the team page with the data

export default function displayTeam(newEmployee) {
    let displayHTML = "";

    for (let i = 0; i < newEmployee.length; i++) {
        displayHTML += `
      <div class="col-3 employee-card text-white bg-dark mb-3">
      <div class="card-header text-center text-white m-3"><h4>${newEmployee[
                i
            ].getRole()}</h4></div>
      <h5 class="card-title">Name: ${newEmployee[i].name}</h5>
      <p class="card-text">ID#: ${newEmployee[i].id}</p>
      <p class="card-text">Email: <a href="mailto:${newEmployee[i].email}">${newEmployee[i].email
            }</a></p>
      `;
        let role = newEmployee[i].getRole();
        if (role === "Manager") {
            displayHTML += `<p class="card-text">Work Phone: ${newEmployee[i].officeNumber}</p></div><div class=col-1></div>`;
        } else if (role === "Engineer") {
            displayHTML += `<p class="card-text">Github: <a href="https://github.com/${newEmployee[i].github}">${newEmployee[i].github}</a></p></div><div class=col-1></div>`;
        } else {
            displayHTML += `<p class="card-text">School: ${newEmployee[i].school}</p></div><div class=col-1></div>`;
        }
    }

    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatable" content="ie=edge" />
          <title>Our Team</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
           integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
          />
          <link rel="stylesheet" href="../assets/css/style.css" />
        </head>
        <body>
          <header class="hero bg-dark text-light">
            <h1 class="display-3 text-center">Team Profile</h1>
          </header>
          <main>
            <div class="container">
              <div class="row">
              ${displayHTML}
              </div>
            </div>
          </main>
        </body>
      </html>       
          `;
};
