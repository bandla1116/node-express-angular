import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  // addMetaTags() {
  //   this.meta.addTags([
  //     { name: 'robots', content: 'INDEX, FOLLOW' },
  //     { name: 'author', content: 'Vinodh Kumar Bandla' },
  //     { name: 'keywords', content: 'Nucor steel, Nucor Bar Mill, NucorBar, Nucor Cold Finish, Nucor Beam, NucorBeam,Nucor Sheet, NucorSheet' },
  //     { name: 'description', content: 'Welcome to NucorNow, which includes customer & product information from Nucor�s Bar, Beam, Cold Finish, Plate & Sheet divisions.' },
  //     { name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD' },
  //     { httpEquiv: 'Content-Type', content: 'text/html' },
  //     { property: 'og:title', content: "My Text" },
  //     { property: 'og:type', content: "website" },
  //     { charset: 'UTF-8' }
  //   ]);
  // }

  generateTags(config) {
    // default values
    config = {
      title: 'Angular <3 Linkbots',
      description: 'My SEO friendly Angular Component',
      slug: '',
      ...config
    }
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    // this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'AngularFirebase' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    // this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://nuesteelapi-d.nucor.com` });
  }
}
