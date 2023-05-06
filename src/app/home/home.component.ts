import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url = 'https://app.powerbi.com/reportEmbed?reportId=5fe3a6e2-5e1d-490c-8e91-4e61c279ed69&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeUrl
    console.log(this.safeUrl)
  }
  get safeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
