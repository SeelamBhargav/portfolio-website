# AI Engineering Portfolio Website

A complete, multi-page personal portfolio website built for Seelam Bhargav. This project strictly follows modern HTML5 semantic standards, WCAG 2.1 AA accessibility guidelines, and SEO best practices.

## Technologies Used
- HTML5 (Semantic Structure)
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (No frameworks, No external libraries)

## Project Structure
```text
portfolio-website/
│
├── index.html        # Home page with hero section
├── about.html        # Education, skills, and certifications
├── projects.html     # Showcase of AI and software projects
├── contact.html      # Accessible contact form with JS validation
│
├── css/
│   └── style.css     # Mobile-first responsive styling
│
├── js/
│   └── script.js     # Navigation toggle and accessible form validation
│
└── assets/
    ├── images/       # Directory for project/profile images
    └── resume.pdf    # Placeholder for downloadable resume
```

## Lighthouse Optimization Recommendations

To ensure you hit the target **100/100 Lighthouse Score** for Accessibility and SEO:

1. **Replace Placeholders**: 
   - Update `profile-placeholder.jpg` in `index.html` with your actual headshot.
   - Update `project-placeholder.jpg` in `projects.html` with real project screenshots.
   - Replace `og-image.jpg` and `twitter-card.jpg` in the `<head>` of all HTML files with your actual social share images.
2. **Update URLs**:
   - Replace `https://yourusername.github.io/portfolio-website/` with your actual live URL in the `<link rel="canonical">` and Open Graph/Twitter meta tags.
   - Update the GitHub and LinkedIn links in the footer of all pages.
3. **Image Attributes**: Ensure any new images you add have descriptive `alt` text. The current placeholders have descriptive text implemented.
4. **Performance**: If your images are large, compress them (e.g., using TinyPNG or squoosh.app) to ensure the Performance score also hits 100/100.

## GitHub Pages Deployment Instructions

Follow these steps to host your portfolio for free using GitHub Pages:

1. **Create a Repository:**
   - Go to [GitHub](https://github.com/) and create a new repository.
   - Name it `portfolio-website` (or whatever you prefer).
   - Do NOT initialize it with a README, .gitignore, or license.

2. **Push Your Code:**
   Open your terminal/command prompt, navigate to the `portfolio-website` directory, and run the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```
   *(Note: Replace `yourusername` and `portfolio-website` with your actual GitHub username and repository name).*

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Click on the **Settings** tab.
   - In the left sidebar, scroll down and click on **Pages**.
   - Under the "Build and deployment" section, find "Source" and select **Deploy from a branch**.
   - Under the "Branch" section, select `main` from the dropdown and click **Save**.
   - Wait a few minutes. GitHub will provide a link to your live site at the top of the Pages settings (e.g., `https://yourusername.github.io/portfolio-website/`).

4. **Final Step:**
   Once your site is live, run a Lighthouse report in Chrome DevTools (F12 -> Lighthouse tab -> Analyze page load) to verify your 100/100 scores!
