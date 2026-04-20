---
name: addcourse
description: Add a new slide-based HTML course to the Learning Hub, asking clarifying questions before generating content. Use when the user wants to add a new course/topic and wants interactive scope confirmation. Takes a course topic as argument.
allowed-tools: Read Write Edit Bash Grep Glob AskUserQuestion
argument-hint: [course-topic]
---

# Add Course (Interactive)

Add a new ~20 slide HTML course for the Learning Hub on the topic: **$ARGUMENTS**

This skill **always clarifies scope with the user** before writing any files. Do **not** start generating slides until the questions below are answered.

## Step 1 — Validate the topic

- If `$ARGUMENTS` is empty, ambiguous, or could refer to multiple distinct technologies (e.g., "Rust" could mean the language or the game), ask a clarifying question first before anything else.
- Run `Glob` for `*.html` in the repo root and confirm no existing course already covers the topic. If one does, ask the user whether to (a) abort, (b) overwrite, or (c) create a differently-scoped companion course.
- Derive a **lowercase kebab-case** filename (e.g., "React Redux" → `react-redux.html`). Confirm it doesn't already exist.

## Step 2 — Ask clarifying questions (REQUIRED)

Use the `AskUserQuestion` tool to gather the missing details **in a single batch** (1–4 questions). Only ask about things you genuinely cannot infer. Typical questions:

1. **Audience level** — Beginner / Intermediate / Advanced / Mixed. Affects depth, jargon, and code complexity.
2. **Scope / subtopics** — Offer 3–4 plausible angles for the topic (e.g., for "Kafka": "Fundamentals & architecture", "Streams API deep dive", "Ops & tuning", "Ecosystem tour"). Use `multiSelect: true` if combinations make sense.
3. **Icon** — Offer 3–4 candidate emoji HTML entities that fit the topic (e.g., `&#x1F5C4;` 🗄️, `&#x1F310;` 🌐, `&#x2699;` ⚙️).
4. **Tags** — Offer 3–4 plausible tag sets of 3 tags each, matching the convention used in existing courses.

Skip a question only if the answer is obvious from the topic or the user's original message already specified it. Do not invent answers — when in doubt, ask.

After the user answers, briefly restate the chosen scope in one sentence so they can correct course before generation begins. If they correct, re-ask only the impacted question.

## Step 3 — Reference an existing course

Read one existing course (e.g., `redis.html` or `linux-foundation.html`) and copy **exactly**:
- CSS variables (both light and dark themes, per CLAUDE.md)
- Theme toggle + nav toggle markup and JS
- Slide deck + counter + progress bar + nav buttons
- Keyboard / touch / progress JS
- `<script src="glossary-terms.js"></script>` include

The new file must be self-contained — no external deps except `glossary-terms.js`.

## Step 4 — Generate slides

- **~20 slides** total, matching the answered scope and audience.
- **Slide 1** (title): `<span class="logo-icon">`, `<h1>`, subtitle, tags. Only this slide gets `class="slide active"`.
- **Slides 2 through N-1** (content): `<h2>` + layouts from `two-col`, `card`, `metric-grid`, `bp-grid`, `diagram`, `content`. `class="slide"` only.
- **Final slide**: "Course Complete!" summary tags + `<a href="index.html">` back link.
- Add `class="animate"` to direct children of `.slide` for staggered fade-in.
- Use `<code>` inline, `<pre>` for blocks (set `font-size: 0.8rem` inside cards).
- Use `<span class="highlight">` for accent text, `<span class="green">` for success, `<span class="tag">` for pills.
- Update the `<div class="slide-counter" id="counter">1 / N</div>` to match the actual slide count.

## Step 5 — Register in index.html

Add one entry to the `COURSES` array in `index.html`:

```javascript
{
  name: "Course Name",
  href: "filename.html",
  icon: "&#x1F4BB;",
  desc: "Short 1–2 sentence description.",
  tags: ["Tag1", "Tag2", "Tag3"],
  published: "YYYY-MM-DD"
}
```

- Use today's date for `published`.
- Use the icon/tags the user confirmed in Step 2.

## Step 6 — Glossary terms

Append relevant terms to `glossary-terms.js`:

```javascript
{t: "Term", d: "Definition.", tags: ["CourseTag"]}
```

Add 3–8 terms that a reader of this course would encounter. If you are unsure which terms to add, ask the user for a short list rather than guessing.

## Step 7 — Verify before reporting done

- Slide counter total matches the actual number of `<div class="slide">` elements.
- Exactly one slide has `class="slide active"` — the first.
- Close button links to `index.html`.
- File passes a quick grep for any leftover placeholder text (`TODO`, `FIXME`, `Lorem`).
- `index.html` parses (no stray commas in the `COURSES` array).
- Report to the user: filename, slide count, tags, and any terms added to the glossary.

## When to ask vs. act

Ask when:
- The topic is ambiguous or could mean multiple things.
- Audience level is not specified and meaningfully changes the content.
- Multiple reasonable scopes exist and you'd pick differently depending on the user's goal.
- A file collision or near-duplicate course already exists.

Do **not** ask about:
- Boilerplate choices dictated by CLAUDE.md (CSS variables, slide structure, file naming).
- Today's date, kebab-case conversion, or which reference file to copy from.
