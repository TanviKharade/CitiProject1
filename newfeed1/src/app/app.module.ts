import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ValidatefileComponent } from './validatefile/validatefile.component';
import { ValidatefailComponent } from './validatefail/validatefail.component';
import { ValidatesuccessComponent } from './validatesuccess/validatesuccess.component';
import { FeedgenerateComponent } from './feedgenerate/feedgenerate.component';
import { FeedsuccessComponent } from './feedsuccess/feedsuccess.component';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[

  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'upload',component:UploadComponent,
  children: [
  {path:'uploadFile',component:UploadFileComponent},
  {path:'validatefile',component:ValidatefileComponent ,
   children: [
  {path:'validatesuccess',component:ValidatesuccessComponent},
  {path:'validatefail',component:ValidatefailComponent }
  ]
  }
  ]
  }
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoginComponent,
    UploadFileComponent,
    ValidatefileComponent,
    ValidatefailComponent,
    ValidatesuccessComponent,
    FeedgenerateComponent,
    FeedsuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
