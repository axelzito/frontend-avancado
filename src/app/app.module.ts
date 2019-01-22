import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { NguCarouselModule } from '@ngu/carousel';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { HttpClientModule } from '@angular/common/http'
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

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
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
    MatTableModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
