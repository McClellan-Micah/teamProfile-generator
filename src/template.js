const generateTeam = (team) => {
  //create manager html
  const generateManager = (manager) => {
    return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title><i class="fas fa-mug-hot mr-2></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}}</li>
                </ul>
            </div>
        </div>
        `;
  };

  //follow generateManager outline for generateEngineer and generateIntern
};

//export function to generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary py-2 px-3">My Team</h1>
        </div>
        </header>
        <main class="container my-5">
            <div class="row">
                <div class="team-area col-12 justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </main>
        
    </body>
    </html>
    `;
};
