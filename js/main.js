// Récupérer la page en cours: 
const currentPage = () => {
    const href = window.location.href;
    const link = document.createElement("a");
    link.href = href;
    const splitted = link.pathname.split('/');
    const length = splitted.length - 1;
    const file = splitted[length]
    return file;
};

// Stocker le chemin pour les images des produits
const path = "../assets/img/products/";

// Header (nav-bar) : dropdown
function showDropContent() {
    $('#dropcontent').addClass('show');
}
function hideDropContent() {
    $('#dropcontent').removeClass('show');
}

// Charger le header et le footer dans chacune des pages
$(document).ready(function () {
    $('header').load('header.html', () => {
        // Header (nav-bar) : classe active
        const headerLinks = $('.header-link');
        const dropBtn = $('.dropbtn');
        for (let headerLink of headerLinks) {
            if (headerLink.href == window.location.href) {
                headerLink.classList.add('header-link-active');
            }
            else {
                headerLink.classList.remove('header-link-active');
            }
        }
        if (currentPage() == 'contact.html') {
            dropBtn.addClass('header-link-active');
        }
        else if (currentPage() == 'mentions.html') {
            dropBtn.addClass('header-link-active');
        }
        else {
            dropBtn.removeClass('header-link-active');
        }
    });
    $('footer').load('footer.html');

    // Produits
    // Onglets (catégories) des produits
    $('.nav-tabs a').click(function () {
        $(this).tab('show');
    })

    // Categories et produits
    const diverse = {
        name: "diverse",
        data: [
            { name: "Aspiléphant", image: "aspilephant", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Buzz Up", image: "buzzup", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Bottle Opener and Cap GUN!", image: "gunbottleopener", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Lampe de tuyau", image: "lampetuyau", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Stand Google Home", image: "standgooglehome", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "TAKEOFF", image: "takeoff", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
        ]
    };
    const bathroom = {
        name: "bathroom",
        data: [
            { name: "Porte-brosse à dents personnalisé", image: "brosseadentspersonnalisee", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Dérouleur papier WC", image: "derouleurpapier", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Porte-pression dentifrice", image: "portedentifrice", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Pusher for tube paste", image: "pushertubepaste", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Robinet Turbine", image: "robinetturbine", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Support pour rasoir", image: "supportrasoir", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
        ]
    };
    const garden = {
        name: "garden",
        data: [
            { name: "Arrosoir", image: "arrosoir", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Distributeur de nourriture pour oiseaux", image: "distributeurnourritureoiseaux", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Safepot", image: "safepot", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Soliflore", image: "soliflore", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Vase", image: "vase", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Voronoi - Vase Bouteille", image: "voronoivasebouteille", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
        ]
    };
    const kitchen = {
        name: "kitchen",
        data: [
            { name: "Coffee Mugger", image: "coffeemugger", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Cuillère à thé", image: "cuillereathe", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Fresh Spacer", image: "freshspacer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Juice press", image: "juicepress", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "MIX & DRINK", image: "mixanddrink", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "The Cup in Kit", image: "thecupinkit", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
        ]
    };
    const upcycling = {
        name: "upcycling",
        data: [
            { name: "Absorbeur d'humidité", image: "absorbeurhumidite", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Copains en liège", image: "copainsenliege", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Embouts canette pour épices", image: "emboutscannettes", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Mug Deuxième vie", image: "mugdeuxiemevie", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Skull-8", image: "skull8", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
            { name: "Skull-8", image: "yeswecan", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ullam, pariatur quidem laborum, eligendi sapiente a molestias facilis labore assumenda est cumque sed excepturi dolorem et. Fuga culpa a error!" },
        ]
    };

    const card = document.getElementById('card');
    // Cloner les cards
    const categories = [diverse, bathroom, garden, kitchen, upcycling];
    for (let category of categories) {
        const container = document.getElementById(category.name + '-cards');
        let i = 0;
        if (category.name == "kitchen") i++;
        for (i = i; i < category.data.length; i++) {
            cardClone = card.cloneNode(true);
            container.appendChild(cardClone);
        }

        // Remplacer les valeurs
        i = 0;
        for (let card of container.children) {
            const product = category.data[i];
            card.firstElementChild.src = path + category.name + "/" + product.image + ".jpg";
            card.firstElementChild.alt = product.image;
            const body = card.lastElementChild;
            const title = body.firstElementChild;
            title.innerText = product.name;
            const btn = body.lastElementChild;
            btn.dataset.description = product.description;
            btn.dataset.image = product.image;
            btn.dataset.title = product.name;
            btn.dataset.category = category.name;
            i++;
        }
    }

    // Modale
    const attributes = ['description', 'image', 'title'];

    $('[data-toggle="modal"]').on('click', (e) => {
        const $target = $(e.target);
        const category = $target.data('category');
        for (let attr of attributes) {
            const value = $target.data(attr);
            const element = $(".modal-" + attr)[0];
            if (attr == "image") {
                element.src = path + category + "/" + value + "2.jpg";
            }
            else
                element.innerText = value;
        }
    });

    // Validation formulaire (contact)
    let contactForm = document.getElementById('frmContact');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let fields = document.querySelectorAll('input[required], textarea[required]');
        fields.forEach((field) => {
            resetField(field);
        });
        let valid = true;
        fields.forEach((field) => {
            if (!validateField(field)) {
                valid = false;
            }
        });
        if (valid) {
            e.target.submit()
        }
    }, false);
    function validateField(field) {
        if (field.checkValidity()) {
            return true;
        }
        else {
            field.classList.add('invalid');
            field.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg-error">${field.validationMessage}</span>`)
            return false;
        }
    }
    function resetField(field) {
        let fieldLabel = field.previousElementSibling;
        field.classList.remove('invalid');
        while (fieldLabel.firstElementChild) {
            fieldLabel.removeChild(fieldLabel.firstElementChild);
        }
        field.valid = true;
    }
});