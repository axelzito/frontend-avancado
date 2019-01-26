import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NguCarouselModule } from '@ngu/carousel';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatTableModule,
} from '@angular/material';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    NguCarouselModule,
    HttpClientModule,
    MatTableModule,
    Ng2CarouselamosModule
  ],
  exports: [SearchPipe],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
