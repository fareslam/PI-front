import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss']
})
export class EmissionsComponent implements OnInit {
  sanitizedEmbedCode:SafeResourceUrl;
 

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
   /* // Get the embed code from the Power BI report.
    const embedCode = 'https://app.powerbi.com/reportEmbed?reportId=72a676b4-f250-4cec-ae5f-375e5e98d9eb&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';

    // Sanitize the embed code.
    this.sanitizedEmbedCode = this.sanitizer.bypassSecurityTrustResourceUrl(embedCode );

    // Create an iframe element and set its src attribute to the value of the sanitized embed code.
 */
  }

}