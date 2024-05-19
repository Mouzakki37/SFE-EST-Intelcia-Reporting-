import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AjoutemailComponent } from './ajoutemail/ajoutemail.component';
import { AddrapportComponent } from './addrapport/addrapport.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatStepperModule,
  MatToolbarModule,
  MatMenuModule,
  MatExpansionModule,
  AngularEditorModule,
  HttpClientModule,
  MatDialogModule,
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    CdkAccordionModule,
    MatExpansionModule,
    AngularEditorModule,
    MatDialogModule,

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    CdkAccordionModule,
    MatExpansionModule,
    AngularEditorModule,
    HttpClientModule,
    MatDialogModule,
  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AjoutemailComponent,
    AddrapportComponent,
    ProgrammerComponent,
    UpgradeComponent,
    PopUpComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
