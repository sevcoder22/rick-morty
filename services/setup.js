import { setupNavbar } from "../components/navbar/component";
import { setupHero } from "../components/hero/component";
import { setupGallery } from "../components/gallery/component";
import { setupAside } from "../components/aside/component"
import { setupFooter } from "../components/footer/component"

export const setup = () => {
    
    const appHtml = `
        <div id="container">
            <navbar id="navbar"></navbar>
            <main id="main">
                <div id="hero"></div>
                <div id="gallery"></div>
            </main>
            <aside id="aside"></aside>
            <footer id="footer"></footer>
        </div>
    
        `;
    const app = document.querySelector(`#app`);
    app.innerHTML = appHtml;

    setupNavbar(document.querySelector(`#navbar`));
    setupHero(document.querySelector(`#hero`));
    setupGallery(document.querySelector(`#gallery`));
    setupAside(document.querySelector(`#aside`));
    setupFooter(document.querySelector(`#footer`));


}