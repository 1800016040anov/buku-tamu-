import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
 import {MatDialogModule} from '@angular/material/dialog';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({

 
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent,
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserAnimationsModule,   
	MatButtonModule,
	HttpClientModule,
	MatCardModule,
	MatListModule,
	MatIconModule,
	MatMenuModule,
	FormsModule,
	ReactiveFormsModule,

	MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
	
  ],
  entryComponents:[
  TambahAlamatComponent,
  DetailAlamatComponent,
  DialogKonfirmasiComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }