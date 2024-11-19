function generateResume() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const company = document.getElementById('company').value.trim();
    const job = document.getElementById('job').value.trim();

    if (!name || !email) {
        alert("Please fill in your name and email.");
        return;
    }

    const resumeContent = `
        <header>
            <h1>${name}</h1>
            <p>Email: ${email} | Phone: ${phone || 'N/A'} | LinkedIn: <a href="${linkedin}" target="_blank">${linkedin || 'N/A'}</a></p>
        </header>

        <div class="section">
            <h2 class="section-title">Summary</h2>
            <p>Brief professional summary highlighting skills, achievements, and career goals.</p>
        </div>

        <div class="section">
            <h2 class="section-title">Experience</h2>
            <div class="item">
                <p class="item-title">${job || 'Job Title'} | ${company || 'Company Name'}</p>
                <p class="item-details">Location | Start Date - End Date</p>
                <ul>
                    <li>Responsibility or achievement 1</li>
                    <li>Responsibility or achievement 2</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Education</h2>
            <div class="item">
                <p class="item-title">Degree | Institution Name</p>
                <p class="item-details">Graduation Year</p>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li></li>
            </ul>
        </div>
    `;

    document.getElementById('resume-output').innerHTML = resumeContent;
}