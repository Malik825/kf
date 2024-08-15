const createFooter = () => {
  document.querySelector("footer").innerHTML = `
    
      <div class="images lightbox3 lightbox">
            <a href="./images/gallery/1.jpg" data-aos="fade-right"><img src="./images/gallery/1.jpg" alt="footer-image"></a>
            <a href="./images/gallery/2.jpg" data-aos="fade-left"><img src="./images/gallery/2.jpg" alt="footer-image"></a>
            <a href="./images/gallery/4.jpg" data-aos="fade-right"><img src="./images/gallery/4.jpg" alt="footer-image"></a>
            <a href="./images/gallery/5.jpg" data-aos="fade-left"> <img src="./images/gallery/5.jpg" alt="footer-image"></a>
            <a href="./images/gallery/6.jpg" data-aos="fade-right"><img src="./images/gallery/6.jpg" alt="footer-image"></a>
        </div>
        <div class="footer_content">
            <div class="container">
                <div class="grid">
                    <div class="grid-item" data-aos="fade-left">
                        <h2>About us</h2>
                        <p>	We are a non-governmental organization (NGO) driven by passion for positive change. Founded on the principles of compassion and empathy, our organization is committed to making a tangible difference in the lives of those who need it the most. Our journey is guided by a profound belief in the inherent dignity of every human being 
	At the heart of our efforts lies a dedication to research excellence. We meticulously investigate the multifaceted issues contributing to poverty, ensuring that our interventions are not only impactful but sustainable. Our advocacy initiatives serve as a powerful force for change, amplifying the voices of marginalized communities and pushing for systemic reforms.
	Through strategic outreach programs, we directly engage with communities, understanding their unique needs and collaborating to implement practical solutions. Education stands as a rare beacon of hope in our mission, a transformative force that has the potential to break the chains of poverty and pave the way for a brighter future.
</p>
                        <div class="socialLinks">
                            <a href=""><i class="uil uil-facebook-f"></i></a>
                            <a href=""><i class="uil uil-instagram-alt"></i></a>
                            <a href=""><i class="uil uil-twitter-alt"></i></a>
                 <a href=""><i class="uil uil-discord"></i></a>
                        </div>
                    </div><br><br>
                    <div class="grid-item" data-aos="fade-right">
                        <h2>Our Location</h2>
                        <ul>
                            <li><i class="uil uil-home"></i><a href="#">Ucc, Ammamah Street 457.</a></li>
                            <li><i class="uil uil-phone"></i><a href="tel:0530460093">0530460093</a></li>
                            <li><i class="uil uil-envelope"></i><a
                                    href="mailto:kinainspiresfoundation10@gmail.com">admin@gmail.com</a></li>
                            <li><i class="uil uil-globe"></i><a href="index.html">website</a></li>
                            <!-- <li><i class="uil uil globe"></i><a href="index.html">website</a></li> -->
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    `;
};
createFooter();
const createCopyRight = () => {
  document.querySelector(".copy").innerHTML = `
       <p>
       Join us on this journey towards a world where the underprivileged are no longer left behind--a world where the principles of equality, justices and peace prevail. Together, we can build a legacy of positive change that transcends borders and transform lives.</p>
        <b>KINA INSPIRES FOUNDATION</b>
        <span>Motto: Dauntless steps together with smiles</span>

    `;
};
createCopyRight();
