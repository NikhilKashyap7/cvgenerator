function generateresume() {
    const name = document.getElementById('name').value.trim();
    const job = document.getElementById('job-title').value.trim();
    const summary = document.getElementById('about-yourself').value;
    const email = document.getElementById('email-id').value.trim();
    const phone = document.getElementById('number').value;
    const location = document.getElementById('location-area').value;
    const linkedin = document.getElementById('linkedin-id').value.trim();
    const github = document.getElementById('git-hub').value.trim();
    const tech1 = document.getElementById('technical1').value.trim();
    const tech2 = document.getElementById('technical2').value.trim();
    const tech3 = document.getElementById('technical3').value.trim();
    const tech4 = document.getElementById('technical4').value.trim();
    const tech5 = document.getElementById('technical5').value.trim();

        const resumeContent =`
     <div class="cv-container">
    <header class="cv-header">
      <div class="header-content">
        <h1>${name}</h1>
        <p class="job-title">${job}</p>
        <p class="summary">${summary} </p>
      </div>
    </header>
    <main class="cv-main">
      <section class="contact-info">
        <h2>Contact</h2>
        <ul>
                       <li><i class="fas fa-envelope"></i> Email: <a href="mailto:${email}">${email}</a></li>
                    <li><i class="fas fa-phone-alt"></i> Phone: <a href="tel:${phone}">${phone}</a></li>
                    <li><i class="fas fa-map-marker-alt"></i> Location: ${location}</li>
                    <li><i class="fab fa-linkedin"></i> LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></li>
                    <li><i class="fab fa-github"></i> GitHub: <a href="${github}" target="_blank">${github}</a></li>
        </ul>
      </section>
      <section class="technical-skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>"${tech1}"</li>
          <li>"${tech2}"</li>
          <li>"${tech3}"</li>
          <li>"${tech4}"</li>
          <li>"${tech5}"</li>
        </ul>
      </section>
      <section class="experience">
        <h2>Work Experience</h2>
        <div class="job">
          <h3>Web Developer</h3>
          <p>Precious Technology Co. | 09/2016 - Present | Long Beach, CA</p>
          <ul>
            <li>Designed user-friendly websites, optimizing checkout pages to increase user clicks by 25%.</li>
            <li>Trained 60+ staff members in web development tools.</li>
            <li>Established high-performing, interactive sites, leading to a 45% revenue increase.</li>
          </ul>
        </div>
        <div class="job">
          <h3>Web Developer</h3>
          <p>Virtual Solutions International Company | 04/2012 - 08/2016 | Sacramento, CA</p>
          <ul>
            <li>Improved performance by 10% through optimized processes.</li>
            <li>Built responsive WordPress sites using Custom Post Types and APIs.</li>
          </ul>
        </div>
      </section>
      <section class="education">
        <h2>Education</h2>
        <p>BS in Web Development, California State University</p>
        <p>08/2008 - 06/2012 | GPA: 3.8/4.0</p>
      </section>
    </main>
  </div>
    `;
    document.getElementById('resume-output1').innerHTML = resumeContent;
}
