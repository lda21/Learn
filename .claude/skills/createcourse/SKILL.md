---
name: createcourse
description: Create a new slide-based HTML course for the Learning Hub. Use when the user wants to add a new course/topic to the learning platform. Takes a course topic as argument.
allowed-tools: Read Write Edit Bash Grep Glob
argument-hint: [course-topic]
---

# Course Creator

Create a new ~20 slide HTML course for the Learning Hub on the topic: **$ARGUMENTS**

## Steps

### 1. Determine file name
- Use **lowercase kebab-case** based on the topic (e.g., "React Redux" → `react-redux.html`)
- Verify the file doesn't already exist

### 2. Use an existing course as reference
- Read an existing course file (e.g., `redis.html`) to copy the exact HTML structure, CSS, and JS boilerplate
- The new course MUST match the existing template exactly for: CSS variables, theme toggle, nav toggle, slide navigation, progress bar, glossary script

### 3. Create the course HTML file
Every course file must include these elements in order:

1. **Head**: `<meta charset>`, `<meta viewport>`, `<link rel="icon">`, `<title>`
2. **Inline CSS**: All CSS variables and styles — copy EXACTLY from reference file
3. **Progress bar**: `<div class="progress" id="progress"></div>`
4. **Close button**: `<a href="index.html" class="close-btn">&times;</a>`
5. **Theme toggle**: `<button class="theme-toggle" id="themeToggle">`
6. **Nav toggle**: `<button class="nav-toggle" id="navToggle">`
7. **Slide deck**: `<div class="deck" id="deck">` with all `<div class="slide">` elements
8. **Slide counter**: `<div class="slide-counter" id="counter">1 / N</div>`
9. **Nav buttons**: Prev/Next in `<div class="nav">`
10. **Theme JS**: Theme toggle + nav toggle scripts — copy EXACTLY from reference
11. **Slide navigation JS**: Keyboard, touch, progress bar — copy EXACTLY from reference
12. **Glossary**: `<script src="glossary-terms.js"></script>`

### 4. Slide content rules
- **~20 slides** total
- **Slide 1** (title): Logo icon (`<span class="logo-icon">`), `<h1>`, subtitle, tags. Must have `class="slide active"`
- **Slides 2-19** (content): `<h2>` + layouts using `two-col`, `card`, `metric-grid`, `bp-grid`, `diagram`, `content`. Each gets `class="slide"` only
- **Final slide**: "Course Complete!" with summary tags and `<a href="index.html">` back link
- Add `class="animate"` to direct children of `.slide` for staggered fade-in
- Use `<code>` for inline code, `<pre>` for code blocks
- Use `<span class="highlight">` for accent text, `<span class="green">` for success text
- Use `<span class="tag">` for pill labels

### 5. Add course to index.html
Add an entry to the `COURSES` array in `index.html`:
```javascript
{
  name: "Course Name",
  href: "filename.html",
  icon: "&#x1F4BB;",
  desc: "Short description.",
  tags: ["Tag1", "Tag2", "Tag3"],
  published: "YYYY-MM-DD"
}
```
- Use today's date for `published`
- Pick an appropriate emoji HTML entity for the icon
- Keep description to 1-2 sentences
- Use 3-4 tags

### 6. Add glossary terms
Add relevant terms to `glossary-terms.js`:
```javascript
{t: "Term", d: "Definition.", tags: ["CourseTag"]}
```

### 7. Verify
- Confirm the slide count matches the counter
- Confirm only the first slide has `class="slide active"`
- Confirm the file is self-contained (no external deps except glossary-terms.js)

## Quality Checklist
- [ ] File uses kebab-case naming
- [ ] All ~20 slides render correctly
- [ ] Theme toggle works (light/dark)
- [ ] Keyboard navigation works (arrow keys, Home, End)
- [ ] Touch swipe navigation works
- [ ] Progress bar advances correctly
- [ ] Slide counter shows correct total
- [ ] Close button links to index.html
- [ ] Mobile layout doesn't overflow
- [ ] Code blocks are readable on both themes
- [ ] Course added to COURSES array in index.html
- [ ] Glossary terms added
- [ ] No external dependencies (except glossary-terms.js)
