let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

const themeSwitch = document.getElementById('theme-switch');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme');

// Inicializar el tema al cargar la página
if (currentTheme) {
    html.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeSwitch.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
} else {
    // Si no hay tema guardado, asegurar que esté en dark
    html.setAttribute('data-theme', 'dark');
    themeSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Evento para cambiar de tema
themeSwitch.addEventListener('click', () => {
    let theme = html.getAttribute('data-theme');
    
    if (theme === 'light' || !theme) {
        html.setAttribute('data-theme', 'dark');
        themeSwitch.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeSwitch.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});