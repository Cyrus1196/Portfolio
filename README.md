# Professional IT Portfolio

A clean, internship-ready portfolio site for BS Information Technology students.

## Preview locally

Open `index.html` in your browser, or run a local server:

```bash
cd C:\Users\txokei\portfolio
python -m http.server 8080
```

Then visit: http://localhost:8080

## How to customize

**Edit only `content.js`** — all your personal info, projects, and links live there.

| Section | What to fill in |
|---------|-----------------|
| Identity | Name, initials, specialization, photo path |
| Summary & About | 2–3 sentence professional summary |
| Details | Location, availability, career goal |
| Social | GitHub, LinkedIn, etc. |
| Skills | Languages, frameworks, tools (grouped) |
| Projects | Title, objective, role, tools, outcome, links |
| Education | Degree, school, period, coursework |
| Certificates | Name, issuer, date, verify link |

## Add your photo & project images

1. Put images in the `assets/` folder
2. Update paths in `content.js`:
   - `photo: "assets/your-photo.jpg"`
   - `image: "assets/project1.png"` for each project

## Structure (matches your guide)

1. Cover / Hero — name, status, contact links
2. Professional Summary
3. Skills
4. Projects (most relevant first)
5. Education
6. Certificates
7. Contact

## Files

```
portfolio/
├── index.html      # Page structure
├── styles.css      # Design & layout
├── content.js      # ← EDIT THIS with your info
├── script.js       # Renders content (no edits needed)
└── assets/         # Photos & project screenshots
```

When you're ready, send me your details and I can fill in `content.js` for you.
