const container= document.getElementById('container')
const column1= document.getElementById('column1')
const column2= document.getElementById('column2')
const column3= document.getElementById('column3')
const column4= document.getElementById('column4')

let projects = []
let skills1 = []
let skills1b = []
let skills2 = []
let skills2b = []
let skills3 = []
let skills3b = []
let skills4 = []

//Portfolio projects
class Project {
    constructor(titulo, foto, descripcion, github, run) {
        this.titulo = titulo
        this.foto = foto
        this.descripcion = descripcion  
        this.github = github 
        this.run = run 
    }
}

class Skill {
    constructor(img, porcentaje, nombre, clase){
        this.img = img
        this.porcentaje = porcentaje
        this.nombre = nombre 
        this.clase = clase
    }
}

//projects:
let webAppm = new Project('Web App: Microservices', './img/appms.png', 'Angular - Flask - Spring Boot - MongoDB', 'https://github.com/Maichind/Frontend-APP-Votaciones', 'https://app-votaciones-2022.netlify.app/')
let wcApp = new Project('Web App: CarData', './img/appcd.png', 'Angular - Material UI - Python Flask', 'https://github.com/Maichind/CarData-WEBApp', 'https://mind-cardata.netlify.app/')
let appFront = new Project('Fontend: API Github', './img/appfront.png', 'Angular - Bootstrap', 'https://github.com/Maichind/Frontend-API-GitHub', 'https://frontend-api-github-mind.netlify.app/')
let ecomm = new Project('E-commerce', './img/webapp.png', 'JavaScript - HTML - CSS')
let webAppg = new Project('Web App: Game', './img/appgame.png', 'JavaScript - HTML - CSS - Nodejs')
let vrApp = new Project('Mobile VR App', './img/appvr.png', 'JavaScript - C# - Unity - Inventor', './docs/VRApp.pdf', './docs/VRvid.mp4')

//skils:
// Column 1 -->
let html = new Skill('./img/html.png','95%', 'HTML', 'html')
let css = new Skill('./img/css.png','95%', 'CSS', 'css')
let js = new Skill('./img/js.png','95%', 'JS', 'js')
let ts = new Skill('./img/ts.png','90%', 'TS', 'ts')
let angular = new Skill('./img/angular.png','90%', 'Angular', 'angular')
let react = new Skill('./img/react.png','90%', 'React', 'react')

// Column 2 -->
let py = new Skill('./img/python.png','95%', 'Python', 'py')
let java = new Skill('./img/java.png','90%', 'Java', 'java')
let flask = new Skill('./img/flask.png','95%', 'Flask', 'flask')
let django = new Skill('./img/django.png','90%', 'Django', 'django')
let boot = new Skill('./img/sb.png','90%', 'Spring boot', 'boot')
let node = new Skill('./img/node.png','90%', 'Nodejs', 'node')
let express = new Skill('./img/node.png','90%', 'Expressjs', 'express')

// Column 3 -->
let sql = new Skill('./img/sql.png','80%', 'SQL', 'sql')
let nosql = new Skill('./img/nosql.png','80%', 'NoSQL', 'nosql')
let mysql = new Skill('./img/mysql.png','90%', 'MySQL', 'mysql')
let postgre = new Skill('./img/postgre.png','80%', 'PostgreSQL', 'postgre')
let mongo = new Skill('./img/mongo.png','95%', 'MongoDB', 'mongo')

// Column 4 -->
let lider = new Skill('', '95%', 'Liderazgo', 'lider')
let adapt = new Skill('', '90%', 'Adaptabilidad', 'adapt')
let tequipo = new Skill('', '90%', 'Trabajo en Equipo', 'tequipo')
let creat = new Skill('', '95%', 'Creatividad', 'creat')
let analit = new Skill('', '95%', 'Capacidad Analitica', 'analit')

projects.push(webAppm, wcApp, appFront, ecomm, webAppg, vrApp)
skills1.push(js,ts,angular,react,html,css)
skills2.push(py,java,flask,django,boot,node,express)
skills3.push(sql,nosql,mysql,postgre,mongo)
skills4.push(lider,adapt,tequipo,creat,analit)

function cargarDatos(){
    projects.forEach((project) =>{
        projectPorfolio = `
        <div class="card">
            <div class="card-img">
                <img src=${project.foto} alt=${project.titulo}>
            </div>
            <div class="card-title">
                <h2>${project.titulo}</h2>
                <p>${project.descripcion}</p>
            </div>
            <div class="project-link">
                <a href=${project.github} target="_blank"><i class="fa-brands fa-github" title="Github"></i></a>
                <a href=${project.run} target="_blank"><i class="fa-solid fa-laptop" title="Run project"></i></a>
            </div>
            <div class="dividerc"></div>
        </div>
        `
        container.innerHTML += projectPorfolio
    })

    skills1.forEach((skill) =>{
        skill1Porfolio = `
        <div class="skill">
            <img src="${skill.img}" alt="">
            <span>
                <div class="info">
                    <p>${skill.nombre}</p>
                    <P>${skill.porcentaje}</P>
                </div>
                <div class="bar">
                    <span class="${skill.clase}"></span>
                </div>
            </span>
        </div>
        `
        column1.innerHTML += skill1Porfolio
    })

    skills2.forEach((skill) =>{
        skill2Porfolio = `
        <div class="skill">
            <img src="${skill.img}" alt="">
            <span>
                <div class="info">
                    <p>${skill.nombre}</p>
                    <P>${skill.porcentaje}</P>
                </div>
                <div class="bar">
                    <span class="${skill.clase}"></span>
                </div>
            </span>
        </div>
        `
        column2.innerHTML += skill2Porfolio
    })

    skills3.forEach((skill) =>{
        skill3Porfolio = `
        <div class="skill">
            <img src="${skill.img}" alt="">
            <span>
                <div class="info">
                    <p>${skill.nombre}</p>
                    <P>${skill.porcentaje}</P>
                </div>
                <div class="bar">
                    <span class="${skill.clase}"></span>
                </div>
            </span>
        </div>
        `
        column3.innerHTML += skill3Porfolio
    })

    skills4.forEach((skill) =>{
        skill4Porfolio = `
        <div class="skill">
            <img src="${skill.img}" alt="">
            <span>
                <div class="info">
                    <p>${skill.nombre}</p>
                    <P>${skill.porcentaje}</P>
                </div>
                <div class="bar">
                    <span class="${skill.clase}"></span>
                </div>
            </span>
        </div>
        `
        column4.innerHTML += skill4Porfolio
    })
}

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="nav";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //redirección
    document.getElementById("menu").classList = "nav";
    menuVisible = false;
}

window.addEventListener('load', cargarDatos)