<template>
    
    <section class="banner__image_plus">
            

            <div class=" banner__image_plus__plus">
                <div class="ul__li">
                    <ul>
                        <li><a href="./index.html">Acceuil /</a></li>
                        <li><a href="./vendeur.html">Devenez vendeur /</a></li>
                        <li><a href="./connexion.html">Deconnexion</a></li>
                    </ul>
                </div>
            </div>
                <div class="banner__image__voir">
                    <div class="banner__image__voir__left">
                        <img id="profilImg" src="./assets/img/3.jpeg" alt="">
                    </div>
                    <div class="banner__image__voir__right">
                        <h1 id="nom">Etheocle DOHOUKPEVI</h1>
                        <p id="metier">UX/UI Designer & Intégrateur Wordpress</p>
                        <p id="pays"> Occitanie</p>
                    </div>
                </div>
            
        </section>
        <section >
            <div class="container banner__image_plus__text">
                <div class="description__text">
                    <h1>Biographie</h1>
                    <p id="description">Hello, moi c’est Tristan !
                        Passionné depuis petit par l’informatique j’ai décidé, en 2017, de rejoindre Digital Campus Toulouse afin d’y développer mon intérêt pour le Digital.
                        J’y ai notamment découvert une réelle passion pour le design et plus précisément l’UX/UI. 😻
                        
                        En freelance depuis 2019, je saurais vous aider, conseiller et accompagner dans tous vos projets !
                        
                        Pour en savoir davantage sur moi et mes projets, n’hésitez-pas à vous rendre sur mon portfolio : haaakoun.fr !
                        
                        À bientôt j’espère ! 👋</p>
                </div>
                <div>
                    <div class="main__prestataire__column">
                        <div class="banner__img">
                            <img id="couvertureImg" src="./assets/img/banner3.png" alt="">
                        </div>
                        <div class="banner__competence">
                            <p id="service" class="banner__competence__service">Je vais réaliser le montage de vos vidéos
                                TikTok/Reels/Shorts </p>
                            <div class="profil__image__content">
                                <div class="profil__image">
                                    <img id="profilIm" src="./assets/img/3.jpeg" alt="">
                                </div>
                                <div>
                                    <p id="name"> Ethéocle DOHOUKPEVI</p>
                                    <p>actif <strong id="experience">2016</strong></p>
                                </div>
                            </div>
                            <div class="annee__experience">
                                <p><a href="index.html">Voir moins</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
.banner__image__voir {
    display: flex;
    align-items: center;
    gap: 50px;
    background-color: rgb(233, 233, 233);
    width: 100%;
    padding: 75px 120px;
    border-radius: 20px;
}



.banner__image__voir__left img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
}

 .banner__image_plus{
padding-top: 8.5rem;
} 

.banner__image__voir__right h1{
    font-size: 22px;
}

.banner__image__voir__right p{
    font-size: 18px;
    margin-top: 10px;
}



.banner__image_plus__text{
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    gap: 60px;
    flex-wrap: wrap;
}

.description__text{
    width: 750px;
    text-align: justify;
}

.description__text h1{
    font-size: 23px;
}

.description__text p{
    font-size: 20px;
    line-height: 50px;
    margin-top:25px;
}

.banner__image_plus__plus{
    padding-left: 30px;
}

.banner__image_plus__plus .ul__li ul{
    display: flex;
    gap: 10px;
}



.banner__image_plus__plus{
    margin-bottom: 30px;
}

.banner__image_plus__plus .ul__li ul li a{
    font-size: 18px;
    color: black;
}
.banner__image__voir__left {
    height: 150px;
    width: 150px;
}


</style>