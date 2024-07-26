let projects = [
    {
        head: "Hospital Management System",
        description: `A management system done with c++.
                    <br>
                    This doesn't have any UI, all of the command are given by keyboard.`,
        live: null,
        code: "https://github.com/Tanjim605/Hospital_Management_System"
    },
    {
        head: "Odin Recipes",
        description: `Made this static website while learning
        web development from The Odin Project.`,
        live: "https://tanjim605.github.io/odin-recipes/",
        code: "https://github.com/Tanjim605/odin-recipes"
    },
    {
        head: "Landing Page",
        description: `Made this static website while learning
        web development from The Odin Project.`,
        live: "https://tanjim605.github.io/odin-LandingPage/",
        code: "https://github.com/Tanjim605/odin-LandingPage"
    },
    {
        head: "Sign-Up Form",
        description: `Made this static website while learning
        web development from The Odin Project.`,
        live: "https://tanjim605.github.io/odin-SignUpForm/",
        code: "https://github.com/Tanjim605/odin-SignUpForm"
    },
    {
        head: "Quiz Web-app",
        description:``,
        live:"https://the-boring-quiz.onrender.com",
        code:"https://github.com/Tanjim605/The_Boring_Quiz"
    }
]

const projectEl = document.getElementById('project-el')

function renderProjects() {
    let projectText = "<ul>"
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].live != null) {
            projectText += `
            <li>
                <details>
                    <summary>${projects[i].head}</summary>
                        <p>${projects[i].description}</p>
                        <ul>
                            <li><a href="${projects[i].live}" target="_blank">Live preview</a></li>
                            <li><a href="${projects[i].code}" target="_blank">Code</a></li>
                        </ul>

                </details>
            </li>`
        }
        else{
            projectText += `
            <li>
                <details>
                    <summary>${projects[i].head}</summary>
                        <p>${projects[i].description}</p>
                        <ul>
                            <li><a href="${projects[i].code}" target="_blank">Code</a></li>
                        </ul>

                </details>
            </li>`
        }
    }
    projectText += "</ul>"

    projectEl.innerHTML += projectText
}

renderProjects()