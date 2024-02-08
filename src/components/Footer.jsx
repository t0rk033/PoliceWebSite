import React from "react";
import './footer.css'
function Footer(){
    return(
        <div className="footerContainer">
            <div class="footer-section contato">
            <h3>Contato</h3>
            <p>123 Rua da Polícia, Cidade, Estado, CEP</p>
            <p>(123) 456-7890</p>
            <p>email@policiacidade.gov.br</p>
        </div>
        <div class="footer-section redes-sociais">
            <h3>Redes Sociais</h3>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
        <div class="footer-section links-uteis">
            <h3>Links Úteis</h3>
            <ul>
                <li><a href="#">Centro de Denúncias</a></li>
                <li><a href="#">Programas de Prevenção</a></li>
                <li><a href="#">Políticas de Privacidade</a></li>
            </ul>
        </div>
    
        </div>
    )
}
export default Footer;