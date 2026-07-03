import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'plants',
    loadComponent: () =>
      import('../app/pages/plants/plants.component').then(m => m.PlantsComponent)
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('../app/pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/pages/contact/contact.component').then(m => m.ContactComponent)
  }
];