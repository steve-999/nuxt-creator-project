<template>
    <div class="layout-container">
        <div id="nav">
            <h2><NuxtLink to="/"><font-awesome-icon class="fa-icon" icon="home" /> Properties'R'Us</NuxtLink></h2>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/admin">Admin</NuxtLink></li>
            </ul>
        </div>
        <Nuxt />
        <Footer />
    </div>
</template>

<style scoped>

#nav {
    background-color: var(--orangey-red-color); 
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

h2 {
    color: white;
    font-size: 1.6em;
    font-weight: 600;
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
}

#nav ul {
    list-style-type: none;
    position: absolute;
    top: 5px;
    right: 20px;
    margin: 0;
}

#nav li {
    display: inline-block;
    margin: 0 20px;
}

#nav a {
    color: white;
    font-size: 1.1em;
    font-weight: 600;
    text-decoration: none;
}

#nav a:hover {
    border-bottom: 3px solid white;
}

/* #nav a.NuxtLink-exact-active {
    color: yellow;
} */



</style>