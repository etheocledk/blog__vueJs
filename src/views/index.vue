<template>
    <div class="main__prestataire" v-for="element in article">
        <div class="main__prestataire__column">
            <div class="banner__img">
                <img src={{element.img}} alt="">
            </div>
            <div class="banner__competence">
                <p class="banner__competence__service">{{ element.title }} </p>
                
                <div class="annee__experience">
                    <p>Voir plus</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
div.main__prestataire {
 display: flex;   
 gap: 50px;
 width: 100%;
}

.banner__img {
    width: 300px;
    height: 180px;
}

.banner__img img {
    width: 100%;
    height: 100%;
    /*  object-fit: cover; */
}



.profil__image {
    width: 50px;
    height: 50px;
}

.profil__image img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.main__prestataire__column {
    width: 300px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.081);
}

.banner__competence__service {
    font-size: 1.2rem;
    font-weight: bold;
    /* height: 50px; */
}

.profil__image__content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.annee__experience {
    padding: 4px 5px;
    background-color: rgb(220, 219, 219);
}

.annee__experience p {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
}

.banner__competence {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>

<script  lang="ts" setup>
const article = [
    {
        id: 1,
        title: 'Hello',
        img: '@/assets/img/banner1.png',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 2,
        title: 'La Résurrection de Jésus-Christ',
        img: '@/assets/img/banner1.png',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 3,
        title: 'Léo Messi à InterMIAMI',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 4,
        title: 'lA VIE DE MA MÈRE',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 5,
        title: 'La vie d\'un enfant riche',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 6,
        title: 'Pourquoi moi',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 7,
        title: 'Je suis le plus riche de ma famille',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 8,
        title: 'Ma femme me trompe',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 9,
        title: 'Je t\'aime mon amour',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    },

    {
        id: 10,
        title: 'Le Benin, un pays en voie de développement',
        img: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id voluptas corrupti cupiditate quisquam delectus ipsam nisi illum laboriosam maxime, odio ut eveniet, vitae exercitationem voluptate? Quos eveniet unde officia.Reprehenderit possimus, repudiandae voluptate recusandae pariatur quis adipisci eius animi voluptas tenetur enim magnam, exercitationem architecto dolorum nam ratione repellat porro non sapiente provident laborum dicta. Repellat eos odit odio.Illo exercitationem eos molestiae enim consectetur! Corporis ipsum magnam modi exercitationem expedita itaque molestiae cumque sint. Aspernatur quas magnam, officia architecto reprehenderit, dolorem facere, excepturi numquam odit maiores adipisci ad.Et dolore impedit nisi voluptate excepturi cumque rerum mollitia rem! Voluptatum ad sed similique esse autem dignissimos facilis et qui laudantium! Amet numquam culpa error ad nulla sit enim maiores.Sunt ut ex dolorum corrupti illo at eius, unde aperiam ab, perferendis distinctio quisquam dignissimos cumque aliquam exercitationem quae eligendi.Nulla facilis illo at esse similique magni commodi nobis modi.Quae qui facere iste fuga officia quos veniam soluta, animi optio accusantium.Veritatis tenetur ab consectetur recusandae consequatur.Deleniti adipisci cum doloribus neque suscipit sint magnam eaque repellendus vel debitis!Praesentium amet corporis quaerat reiciendis iste veritatis ipsum odit nam nemo minus, dignissimos voluptatum, enim libero iusto quae assumenda modi fuga aliquam rerum eius sit! Nostrum sequi esse labore iste.Alias veniam, veritatis quam facilis tempore doloremque iure expedita quasi mollitia voluptas autem blanditiis, dignissimos, deleniti quaerat excepturi sequi cumque numquam corporis neque voluptatem corrupti suscipit! Exercitationem quo sint possimus!Excepturi, aperiam minus veritatis commodi quisquam beatae nostrum, dolorum, veniam optio placeat tenetur quis.Vitae provident atque nesciunt fugit nisi tempore soluta! Odit quaerat consectetur ducimus nam tempore, mollitia iste.Quas eveniet fuga, reprehenderit quaerat voluptatum alias eligendi eum rem ad, ullam quo odit commodi! Nihil, autem hic voluptate, est maiores, dignissimos recusandae beatae tenetur asperiores perspiciatis blanditiis dolorum aut?'
    }
]
</script>