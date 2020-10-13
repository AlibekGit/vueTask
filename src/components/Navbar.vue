<template>
    <div>
        <nav class="blue darken-3">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">Tasks</router-link>
                <a id="mobile-demo" data-target="slide-out" class="sidenav-trigger"><i class="material-icons medium carra">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <router-link
                            tag="li"
                            to="/"
                            exact
                            active-class="active"
                    >
                        <a>Create</a>
                    </router-link>
                    <router-link
                            tag="li"
                            to="/list"

                            active-class="active"
                    >
                        <a href="#">List</a>
                    </router-link>

                </ul>
            </div>
        </nav>
            <ul  ref="slideNav" id="slide-out" class="sidenav">



                <li><a class="subheader">Task menu</a></li>


                <router-link
                        tag="li"
                        to="/"
                        exact
                        active-class="active"
                >
                    <a class="waves-effect">Create</a>
                </router-link>




                <router-link
                        tag="li"
                        to="/list"
                        exact
                        active-class="active"
                >
                    <a class="waves-effect">List</a>
                </router-link>
            </ul>

    </div>
</template>

<script>

    export default {
        name: "Navbar",
        data:()=>({
           mobile:false
        }),
        mounted(){
            // eslint-disable-next-line no-undef
            M.Sidenav.init(this.$refs.slideNav, {
                edge: 'left',
                draggable: true

            })






        }



    }
</script>

<style scoped>
    .carra{
        color: white;
    }
    nav{
        padding: 0 2rem;
    }
</style>