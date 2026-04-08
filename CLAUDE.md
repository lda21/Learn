# CLAUDE.md - Learning Hub Standards

## Project Overview

This is a **Learning Hub** - a collection of slide-based HTML courses covering modern engineering tools, frameworks, and platforms. Each course is a single self-contained HTML file with an interactive slide deck. The index page (`index.html`) serves as the course catalog.

## Repository Structure

```
/
├── index.html              # Course catalog (cards + table view, search, theme toggle)
├── glossary.html           # Shared glossary page
├── glossary-terms.js       # Glossary term definitions (loaded by every course)
├── favicon.svg             # Shared favicon
├── *.html                  # Individual course files (one per topic)
└── CLAUDE.md               # This file
```

## Course File Standards

### File Naming
- Use **lowercase kebab-case**: `linux-foundation.html`, `react-redux.html`
- One HTML file per course, fully self-contained (inline CSS + JS)
- No external CSS/JS dependencies except `glossary-terms.js`

### Required HTML Structure

Every course file must include these elements in order:

1. **Head**: `<meta charset>`, `<meta viewport>`, `<link rel="icon">`, `<title>`
2. **Inline CSS**: All CSS variables and styles (see CSS Variables below)
3. **Progress bar**: `<div class="progress" id="progress"></div>`
4. **Close button**: `<a href="index.html" class="close-btn">&times;</a>`
5. **Theme toggle**: `<button class="theme-toggle" id="themeToggle">`
6. **Nav toggle**: `<button class="nav-toggle" id="navToggle">` (mobile hamburger)
7. **Slide deck**: `<div class="deck" id="deck">` containing all `<div class="slide">` elements
8. **Slide counter**: `<div class="slide-counter" id="counter">1 / N</div>`
9. **Nav buttons**: Prev/Next buttons in `<div class="nav">`
10. **Theme JS**: Theme toggle + nav toggle scripts
11. **Slide navigation JS**: Keyboard, touch, progress bar logic
12. **Glossary**: `<script src="glossary-terms.js"></script>`

### CSS Variables (Required)

```css
:root {
  --bg: #FAF9F7;
  --bg-slide: #F5F0EB;
  --accent: #DA7756;        /* Primary brand color - terracotta orange */
  --accent2: #F0EBE5;
  --text: #2D2B28;
  --text-muted: #6B6560;
  --code-bg: #2D2B28;
  --success: #5A9A6E;
  --warning: #DA7756;
  --card-bg: #fff;
  --border-color: #D9D2CB;
  --shadow: rgba(0,0,0,0.06);
  --code-text: #E8E2DC;
}

[data-theme="dark"] {
  --bg: #1A1915;
  --bg-slide: #1A1915;
  --accent: #DA7756;
  --accent2: #302C28;
  --text: #E8E2DC;
  --text-muted: #9B9590;
  --code-bg: #131210;
  --success: #6EBF84;
  --warning: #DA7756;
  --card-bg: #252220;
  --border-color: #3D3935;
  --shadow: rgba(0,0,0,0.3);
  --code-text: #E8E2DC;
}
```

### Slide Patterns

Each course should have **~20 slides**. Standard slide types:

- **Title slide** (slide 1): Logo icon (`<span class="logo-icon">`), `<h1>`, subtitle, tags
- **Content slides**: `<h2>` title + layout using `two-col`, `card`, `metric-grid`, `bp-grid`, `diagram`
- **Final slide**: "Course Complete!" with summary tags and back link to `index.html`

Only the **first slide** gets `class="slide active"`. All others get just `class="slide"`.

### Layout Classes

| Class | Usage |
|-------|-------|
| `two-col` | Two-column grid layout |
| `card` | Rounded card with shadow |
| `metric-grid` | 2x2 metric card grid |
| `bp-grid` | Best practices numbered grid |
| `diagram` | Horizontal flow diagram with `.box` and `.arrow` |
| `content` | Max-width content wrapper |
| `tag` | Pill-shaped label |
| `highlight` | Accent-colored bold text |
| `green` | Success-colored text |
| `animate` | Fade-in-up animation on slide enter |

### Code Blocks

- Inline code: `<code>` (renders with accent color on accent2 background)
- Block code: `<pre>` (dark background, accent left border)
- Set `font-size: 0.8rem` on `<pre>` inside cards for compact code

### Animations

Add `class="animate"` to direct children of `.slide` for staggered fade-in:
```html
<div class="slide">
  <h2 class="animate">Title</h2>
  <div class="two-col animate">...</div>
</div>
```

## Index Page (index.html)

### Adding a New Course

Add an entry to the `COURSES` array in `index.html`:

```javascript
{
  name: "Course Name",
  href: "filename.html",
  icon: "&#x1F4BB;",          // HTML entity for emoji icon
  desc: "Short description of the course content.",
  tags: ["Tag1", "Tag2", "Tag3"],
  published: "YYYY-MM-DD"
}
```

- Keep description to 1-2 sentences
- Use 3-4 tags maximum
- Set `published` to the current date
- Courses sort by published date (newest first), then alphabetically

## Glossary (glossary-terms.js)

When adding a new course, add relevant terms to `glossary-terms.js`:

```javascript
{t: "Term", d: "Definition. Can reference other terms by name.", tags: ["CourseTag"]}
```

- Terms are shared across all courses
- Tags should match course topic areas
- Definitions can include `<code>` for inline code

## Git Conventions

### Commit Messages

Follow the existing pattern: `type: description`

| Prefix | Usage |
|--------|-------|
| `feat:` | New course, new slide, new feature |
| `fix:` | Bug fix, layout fix, mobile fix |
| `refactor:` | Code restructuring without behavior change |
| `docs:` | Documentation changes |

Examples:
```
feat: add Linux Foundation course — 20 slides covering all major projects
fix: slide counter overlap on mobile
feat: add MCP glossary terms
```

### Branches
- `main` — production branch
- Feature branches for new courses or significant changes

## Mobile Responsiveness

All courses must be responsive. Key breakpoints:
- `768px` — tablet (single column, larger text, vertical diagrams)
- `480px` — phone (compact padding, smaller headings)

Mobile-specific behavior:
- Nav buttons hidden by default, shown via hamburger toggle
- Close button hidden on mobile
- Slide counter always visible
- Tables get `overflow-x: auto`
- Diagrams stack vertically with rotated arrows

## Quality Checklist

Before committing a new course:

- [ ] File uses kebab-case naming
- [ ] All 20 slides render correctly
- [ ] Theme toggle works (light/dark)
- [ ] Keyboard navigation works (arrow keys, Home, End)
- [ ] Touch swipe navigation works
- [ ] Progress bar advances correctly
- [ ] Slide counter shows correct total
- [ ] Close button links to index.html
- [ ] Mobile layout doesn't overflow
- [ ] Code blocks are readable on both themes
- [ ] Course added to COURSES array in index.html
- [ ] Glossary terms added if applicable
- [ ] No external dependencies (except glossary-terms.js)
