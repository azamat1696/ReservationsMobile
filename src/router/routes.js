
const routes = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth : false },
    children: [
      { path: '', name:'root', component: () => import('pages/IndexPage.vue') },
      { path: 'events', name:'events', component: () => import('pages/Events/Index.vue') },
      { path: 'reservations', name:'Reservations', component: () => import('pages/Reservations/Reservations.vue') },
      { path: 'profile', name:'Profile', component: () => import('pages/Profile/Profile.vue') },
      { path: 'edit-profile', name:'EditProfile', component: () => import('pages/Profile/EditProfile.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth : false },
    children: [
      { path: '', name:'login', component: () => import('pages/Auth/LoginPage.vue') },
      { path: 'locations', name: 'Locations', component: import('pages/Auth/LocationRestaurantSelect.vue')},
      { path: 'register', name: 'UserRegister', component: import('pages/Auth/UserRegister.vue')},
      { path: 'forgot-password', name: 'ForgotPassword', component: import('pages/Auth/ForgotPassword.vue')},
      { path: 'test', name: 'test', component: import('pages/Auth/test.vue')},
    ]
  },
  // {
  //   path: '/admin',
  //   component: () => import('layouts/AuthLayout.vue'),
  //   meta: { requiresAuth : false },
  //   children: [
  //     // { path: 'login', name: 'login', component: import('pages/Auth/LoginPage.vue')},
  //     // { path: 'locations', name: 'Locations', component: import('pages/Auth/LocationRestaurantSelect.vue')},
  //     // { path: 'register', name: 'UserRegister', component: import('pages/Auth/UserRegister.vue')},
  //     // { path: 'forgot-password', name: 'ForgotPassword', component: import('pages/Auth/ForgotPassword.vue')},
  //     // { path: 'test', name: 'test', component: import('pages/Auth/test.vue')},
  //
  //   ]
  // },
  {
    path: '/places',
    component: () => import('layouts/PlacesLayout.vue'),
    meta: { requiresAuth : false },
    children: [
      { path: 'restaurants', name:'places', component: () => import('pages/Places/Index.vue') },
      { path: 'restaurant-profile/:id', name:'RestaurantProfile', component: () => import('pages/Home/RestaurantProfile.vue') },
    ]
  },
  {
    path: '/event-pages',
    component: () => import('layouts/PagesLayout.vue'),
    meta: { requiresAuth : false },
    children: [
      { path: 'event-pages/event/:id', name:'EventPage', component: () => import('pages/Events/EventPage.vue') },
      { path: 'event-pages/reservation', name:'ReservationPage', component: () => import('pages/Events/ReservationPage.vue') },
      { path: 'event-pages/reservation/success/:id', name:'ReservationSuccess', component: () => import('pages/Events/ReservationSuccessPage.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
