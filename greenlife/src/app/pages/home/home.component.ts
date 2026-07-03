import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { FeaturedPlantsComponent } from '../../components/featured-plants/featured-plants.component';
import { leadingComment } from '@angular/compiler';
import { GalleryComponent } from '../gallery/gallery.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HeroComponent,CategoriesComponent,WhyUsComponent,FeaturedPlantsComponent,GalleryComponent,TestimonialsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
