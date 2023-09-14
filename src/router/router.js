import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";


const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import((/* webpackChunkName: "PokemonLayouts" */ '@/modules/pokemon/layouts/PokemonLayouts')),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
      },
      {
        path: 'pokemonId/:id',
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          console.log(route)
          const id = Number(route.params.id);
          return isNaN((id) ? { id: 1 } : { id })
        }
      },
      {
        path: '',
        redirect:{ name:'pokemon-about' }
      },
    ]
  },
  {
    path: '/dbz',
    name: 'dbz',
    beforeEach: [isAuthenticatedGuard],
    component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayouts'),
    children: [
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import(/* webpackChunkName: "AboutDBZ" */ '@/modules/dbz/pages/About'),
      },
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(/* webpackChunkName: "Characters" */ '@/modules/dbz/pages/Characters'),
      },
      {
        path: '',
        redirect:{ name:'dbz-characters' }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/page/NoPageFound'),
  }, //implementamos esta linda para traer pag 404, si el usuario ingresa link erroneo despues del "/#/" (hash + el gatito + hash) con /:pathMatch(.*)* ya sabe que es un pag de error
]

const router = createRouter({
  history: createWebHashHistory(), //esto me trae el / (hash) despues del #
  routes,
})

// guard global - síncrono

// router.beforeEach(( to, from, next) => {
//   console.log({to, from, next})

//   const random = Math.random() * 100

//   if (random > 50) {
//     console.log('autenticado')
//     next()
//   }else {
//     console.log('bloqueado por el beforeEach Guard')
//     next({name: 'pokemon-home'})
//   }
// })

//asincronica

// const canAccess = () => {
//   return new Promise( resolve => {
//     const random = Math.random() * 100
//     if (random > 50) {
//       console.log('autenticado - canAccess')
//       resolve(true)
//     }else {
//       console.log('bloqueado por el beforeEach Guard - canAccess')
//       resolve(false)
//     }
//   })
// }

// router.beforeEach(async ( to, from, next) => {
//   const authorized = await canAccess()

//   authorized
//     ? next()
//     : 
//     next({name: 'pokemon-home'})
// })

export default router;