// Edit this file to update project descriptions, case studies, technologies and live demo links.
const projects = [
  {
    number: "01", title: "Programme Calendar", category: "development",
    label: "WORKFORCE MANAGEMENT", glyph: "▦", image: "assets/images/programme-calendar.png",
    description: "A calendar-based programme and manpower management web app for organising schedules across venues, assigning staff, and managing off/leave entries.",
    problem: "Programme details had to be manually keyed into the company's Excel file before they could be uploaded. Re-entering each programme was repetitive, time-consuming and created opportunities for human error.",
    approach: "I built a dedicated calendar so the team could keep track of programmes in one place. The system supports rolling programmes, helping recurring sessions stay organised without having to recreate every entry manually.",
    impact: "The aim is to reduce repeated data entry and human error, while making it possible to export the programme information immediately and keep the workflow smoother.",
    tags: ["JavaScript", "Supabase", "Calendar UI"],
    link: "https://ongtheblob.github.io/calendar/", linkLabel: "Open live project"
  },
  {
    number: "02", title: "Loughborough Soccer Passing Test Calculator", category: "sport",
    label: "FOOTBALL PERFORMANCE ASSESSMENT", glyph: "⚽", image: "assets/images/lspt-time-penalty.png",
    description: "A football performance assessment calculator that applies time penalties and bonuses to a player's raw time.",
    problem: "During my final-year project, I was responsible for tracking errors and bonus hits during the Loughborough Soccer Passing Test. I had to keep my eyes on the ball throughout the test, while also recording events manually. Writing everything down and then timing the player and entering the values into a calculator added more work to the process.",
    approach: "I created a calculator to bring the scoring inputs together. It takes the raw time and the counts for misses at the bench, misses at the target area, handling errors, outside passes, cone touches and bonus hits, then applies the corresponding time adjustments.",
    impact: "The calculator streamlines the data-collection and calculation process, reducing the need to record each event separately and then re-enter the information afterwards.",
    tags: ["Streamlit", "Python", "Performance Testing"],
    link: "https://ongtheblob.github.io/LSPT/", linkLabel: "Open live project"
  },
  {
    number: "03", title: "Gait Speed Calculator", category: "sport",
    label: "GAIT / MOVEMENT ASSESSMENT", glyph: "↗", image: "assets/images/gait-speed-calculator.png",
    description: "A gait speed calculator for a 6-metre walk test using three timed trials.",
    problem: "I noticed colleagues repeatedly taking out their phones to enter trial times and calculate gait speed manually. It was a small but recurring task that interrupted the assessment workflow.",
    approach: "I built a simple calculator where users enter the three timed trials for a 6-metre walk. The tool calculates speed using distance divided by time, presenting the result in metres per second.",
    impact: "The calculator brings the trial inputs and calculation into one place, helping make the gait speed calculation quicker and more convenient during assessments.",
    tags: ["HTML", "CSS", "JavaScript", "Gait"],
    link: "https://ongtheblob.github.io/gait-speed/", linkLabel: "Open live project"
  },
  {
    number: "04", title: "Reaction Time Test", category: "sport",
    label: "REACTION / PERFORMANCE TESTING", glyph: "◷", image: "assets/images/reaction-time-test.png",
    description: "An interactive reaction-time test with five trials, individual reaction-time results and an average score.",
    problem: "A browser-based reaction test needs a clear way for a participant to start, respond to a visual cue and review their performance across repeated attempts.",
    approach: "I created an interactive test flow with a start control, a visual response area and a results panel that tracks progress across five trials.",
    impact: "The tool presents individual reaction times and an average in one interface, making the test results easy to review. This description reflects the visible functionality of the current project.",
    tags: ["HTML", "CSS", "JavaScript", "Testing"],
    link: "https://ongtheblob.github.io/reaction-time/", linkLabel: "Open live project"
  },
  {
    number: "05", title: "Two-Player Memory Match", category: "development",
    label: "INTERACTIVE TWO-PLAYER GAME", glyph: "▧", image: "assets/images/memory-match.png",
    description: "A two-player memory matching game where players take turns flipping cards and finding matching pairs.",
    problem: "The goal was to create a simple browser game that turns the familiar memory-pair activity into a shared, turn-based challenge for two players.",
    approach: "I built a card grid, alternating player turns, pair matching and a score display so both players can follow their progress throughout the game.",
    impact: "The game provides a complete two-player experience in the browser, with scores and turn information visible as the game progresses. This description reflects the visible functionality of the current project.",
    tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
    link: "https://ongtheblob.github.io/memory_game/", linkLabel: "Open live project"
  }
];