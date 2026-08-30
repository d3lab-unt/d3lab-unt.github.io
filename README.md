# D3 Lab Website

Official public website for the **Data-Driven Decisions Lab (D3 Lab)**, directed by Dr. Sahara Ali in the Anuradha and Vikas Sinha Department of Data Science, College of AI and Advanced Analytics, at the University of North Texas.

Live site: https://d3lab-unt.github.io/

## Structure

Static multi-page site, no build step required.

```
d3lab-unt.github.io/
├── index.html          Home
├── research.html       Research areas, model pipelines, and projects
├── team.html           People (PI and lab members)
├── publications.html   Publications
├── news.html           News & events
├── join.html           Join us / contact
└── assets/
    ├── css/style.css   Shared stylesheet
    ├── js/main.js      Shared scripts
    └── img/            Images and diagrams
```

Built with [Bootstrap 5](https://getbootstrap.com/) and [Bootstrap Icons](https://icons.getbootstrap.com/), loaded via CDN.

## Local development

No build tools needed. Serve the folder locally and open it in a browser:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

This repository is served directly by GitHub Pages from the `main` branch (root). Any push to `main` redeploys the live site automatically.

## Contact

For questions about the lab or this site, contact Dr. Sahara Ali at sahara.ali@unt.edu.
