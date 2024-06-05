import { LitElement, css, html } from 'lit'
import './components/imc.js';
import './components/galeria.js';
import './components/dataapi.js';
import './components/tabla.js';



class MyElement extends LitElement {
    render() {
        return html`
            <imc-calculo></imc-calculo>
            <api-data-list></api-data-list>
            <tabla-dinamica></tabla-dinamica>
            <image-gallery images='[
              {
                  img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/06/X-Men-Havok-Comic-Art-Scream.jpg'
              },
              {
                  img : 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VNLOPVBDM5AATCOW2VHOCMYQHA.jpg'
              },
              {
                  img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/x-men-s-cyclops-with-intriguing-blurred-costume-behind.jpg'
              },
              {
                  img : 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/rogue-xmen.jpg'
              },
              {
                  img : 'https://i.pinimg.com/736x/15/7c/0a/157c0a34a52aa8e6ab6afe852ee7af57.jpg'
              },
              {
                  img : 'https://img.redbull.com/images/c_crop,x_363,y_0,h_407,w_325/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/11/87f8642d-126d-4219-acc9-12ca261bfe39/wolverine'
              },
              {
                  img : 'https://i.pinimg.com/originals/3d/4d/1f/3d4d1ffca3b972a9cd43fff96399e601.jpg'
              },
              {
                  img : 'https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png'
              },
              {
                  img : 'https://i.pinimg.com/736x/38/e0/90/38e090d55e951ac38853430d6b39691a.jpg'
              },
              {
                  img : 'https://media.thenerdstash.com/wp-content/uploads/2023/11/Nightcrawler-2-1024x576.jpg'
              },
              {
                  img : 'https://hips.hearstapps.com/hmg-prod/images/magento-1568362613.jpg'
              },
              {
                  img : 'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7823917-marauders2019019_cov-scaled.jpg'
              },
          ] '></image-gallery>
        `;
    }
}

customElements.define('my-element', MyElement);


