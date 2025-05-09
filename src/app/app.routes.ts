  import { Routes } from '@angular/router';

  import { HomeComponent } from './home/home.component';
  import { ExperienciaComponent } from './experiencia/experiencia.component';
  import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
  import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
  import { HobbiesComponent } from './hobbies/hobbies.component';
  import { ContactoComponent } from './contacto/contacto.component';

  export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'technical-skills', component: TechnicalSkillsComponent },
    { path: 'soft-skills', component: SoftSkillsComponent },
    { path: 'hobbies', component: HobbiesComponent },
    { path: 'contacto', component: ContactoComponent },
  ];

