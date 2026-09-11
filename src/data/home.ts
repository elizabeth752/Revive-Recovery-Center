export const hero = {
  eyebrowBadges: ["Payment Plans Available", "Verified by Psychology Today"],
  heading: "Addiction Treatment That Fits Your Life and Your Budget",
  subheading: "Getting help shouldn't mean putting your life on hold or draining your savings.",
  body: "Revive Recovery Centers offers affordable treatment for drug, alcohol, and mental health conditions built around your schedule, your insurance, and your goals.",
  bullets: [
    "PHP, IOP, virtual IOP, and outpatient treatment",
    "Two individual therapy sessions per week at every level of care",
    "Most major insurance accepted and verified same day",
  ],
};

export const subNav = [
  { label: "Our Center", href: "#our-center" },
  { label: "Conditions We Treat", href: "#conditions" },
  { label: "Programs", href: "#programs" },
];

export const weMeetYou = {
  heading: "We Meet You Where You're At",
  body: "Whether you need PHP five days a week or a Virtual IOP you can attend from home, we build a program around you, not a one-size-fits-all model.",
  gallery: [
    "/assets/images/Facility-1.webp",
    "/assets/images/Facility-2.webp",
    "/assets/images/Facility-3.webp",
    "/assets/images/Facility-4.webp",
    "/assets/images/Facility-5.webp",
    "/assets/images/Facility-6.webp",
  ],
  features: [
    { icon: "/assets/icons/Two-1_1-Sessions-a-Week.svg", text: "Two individual therapy sessions every week — not just group" },
    { icon: "/assets/icons/Dedicated-Care-Coordinator.svg", text: "Dedicated care coordinator in your corner" },
    { icon: "/assets/icons/Flexible-Levels-of-Care.svg", text: "Virtual options so you can heal from the comfort of your home" },
    { icon: "/assets/icons/Family-Involvement.svg", text: "Family program involvement built in from day one" },
    { icon: "/assets/icons/Medication-Management.svg", text: "Psychiatric care and medication management" },
  ],
};

export const difference = {
  heading: "The Revive Recovery Difference",
  body: "Revive was founded because Arizona needed affordable, accessible clinical care — not just for people with premium insurance, but for the whole community. Here's what that looks like in practice.",
  cards: [
    { icon: "/assets/icons/Two-1_1-Sessions-a-Week.svg", title: "Two 1:1 Sessions a Week", body: "Individual therapy at every level of care is a standard here." },
    { icon: "/assets/icons/Dedicated-Care-Coordinator.svg", title: "Dedicated Care Coordinator", body: "One person who knows your case and helps you navigate every step." },
    { icon: "/assets/icons/Affordable-and-Accessible.svg", title: "Affordable and Accessible", body: "Clinical-grade treatment without the inpatient price tag, covered by most major plans." },
    { icon: "/assets/icons/Flexible-Levels-of-Care.svg", title: "Flexible Levels of Care", body: "PHP, IOP, Virtual IOP, and outpatient, step up or down as your needs change." },
    { icon: "/assets/icons/Dual-Diagnosis.svg", title: "Dual Diagnosis", body: "We treat addiction and mental health together, because they rarely travel alone." },
    { icon: "/assets/icons/Family-Involvement.svg", title: "Family Involvement", body: "Recovery holds better when the people who matter most are included throughout treatment." },
    { icon: "/assets/icons/Medication-Management.svg", title: "Medication Management", body: "High quality medical and psychiatric support as part of your care including MAT options." },
    { icon: "/assets/icons/Experiential-Therapy.svg", title: "Experiential Therapy", body: "Yoga, fitness, art, and recreation built into treatment, not bolted on." },
  ],
};

export const goodCare = {
  eyebrow: "Worried you can't afford treatment?",
  heading: "Good Care Shouldn't Be Only for a Few",
  body: "When symptoms persist, it often means the underlying drivers haven't been fully addressed. A private conversation can help clarify what's been missing—and whether this level of care makes sense.",
  image: "/assets/images/CTA-Image.webp",
};

export const continuum = {
  heading: "From Intensive Support to Virtual Flexibility",
  body: "Recovery isn't one-size-fits-all. Our outpatient continuum lets you get the right intensity of support without leaving work, school, or family behind.",
  programs: [
    {
      title: "Partial Hospitalization Program (PHP)",
      body: "Our most intensive level of care. Structured, full-day programming several days a week, with group therapy, two individual sessions weekly, medication management, and psychiatric support — while you return home each night.",
      image: "/assets/images/Partial-Hospitalization-Program-PHP.webp",
    },
    {
      title: "Intensive Outpatient Program (IOP)",
      body: "Structured support for those balancing recovery with daily responsibilities. Fewer hours than PHP, same clinical depth, including individual therapy, group work, and relapse-prevention skills.",
      image: "/assets/images/Intensive-Outpatient-Program-IOP.webp",
    },
    {
      title: "Virtual IOP (Adult & Adolescent)",
      body: "The same structured IOP care, attended securely from home. Ideal when distance, schedule, or comfort makes in-person hard — with a separate track designed specifically for teens.",
      image: "/assets/images/Virtual-IOP-Adult-Adolescent.webp",
    },
  ],
};

export const conditions = {
  heading: "Whatever You're Up Against, We Can Help",
  subheading: "We treat substance use, mental health, or both, with care that addresses the whole picture, not just the symptom.",
  label: "Common Conditions:",
  cards: [
    { icon: "/assets/icons/Alcohol.svg", title: "Alcohol Addiction", body: "Drinking that's affecting your health, work, or relationships." },
    { icon: "/assets/icons/Opioid.svg", title: "Opioid Addiction", body: "Dependence on heroin, fentanyl, or prescription painkillers." },
    { icon: "/assets/icons/Benzodiazepine.svg", title: "Benzodiazepine Addiction", body: "Dependence on Xanax, Ativan, and similar medications." },
    { icon: "/assets/icons/Stimulant-Addiction.svg", title: "Stimulant Addiction", body: "Meth, cocaine, or stimulant use affecting your stability." },
    { icon: "/assets/icons/Generalized-Anxiety-Disorder-GAD.svg", title: "Anxiety and Depression", body: "Mental health conditions, treated on their own or alongside substance use." },
    { icon: "/assets/icons/PTSD-Trauma-Related-Disorders.svg", title: "PTSD & Trauma", body: "Care for the experiences underneath so recovery can hold." },
    { icon: "/assets/icons/Dual-Diagnosis-1.svg", title: "Dual Diagnosis", body: "Substance use and mental health conditions treated together, by one team." },
  ],
};

export const team = {
  body: "Our licensed therapists, care coordinators, and psychiatric team give every client real attention, including two individual sessions a week, a level of care most outpatient programs simply don't offer.",
  // Placeholder — real staff bios/credentials not yet approved for this build.
  // See design-system.md §10 and team-eeat.md: never fabricate names or credentials.
  placeholderCount: 4,
};

export const insuranceStrip = {
  heading: "Affordable, and Probably Covered",
  body: "Verify your coverage now — it takes two minutes, with no obligation and no surprise costs.",
  logos: [
    { name: "Blue Cross Blue Shield", src: "/assets/insurance/BlueCross.svg" },
    { name: "Cigna", src: "/assets/insurance/Cigna.svg" },
    { name: "ComPsych", src: "/assets/insurance/ComPsych.svg" },
    { name: "MultiPlan", src: "/assets/insurance/MultiPlan.svg" },
    { name: "Optum", src: "/assets/insurance/Optum.svg" },
    { name: "United Healthcare", src: "/assets/insurance/United-Healthcare.svg" },
    { name: "Aetna", src: "/assets/insurance/Aetna.svg" },
    { name: "Beacon", src: "/assets/insurance/Beacon.svg" },
  ],
};

export const steps = {
  heading: "A Clear, Supportive Next Step",
  body: "We've made getting started straightforward: call us, we verify your insurance the same day, and most clients begin treatment within 24 to 48 hours. No long wait lists. No surprise costs.",
  items: [
    { icon: "/assets/icons/Call-Us.svg", title: "Step 1: Call For Help", body: "Talk with our team about what's going on, your schedule, and your insurance. No pressure, just answers." },
    { icon: "/assets/icons/Verify-Insurance.svg", title: "Step 2: Verify Insurance", body: "We confirm your benefits the same day and walk through exactly what your care will cost up front." },
    { icon: "/assets/icons/Complete-Assessment.svg", title: "Step 3: Complete Assessment", body: "Once you're verified, most clients begin treatment within a day or two, at the level of care that fits." },
  ],
};

export const testimonials = {
  heading: "Real People. Real Success. Real Testimonials.",
  body: "Hear directly from individuals who found strength, clarity, and lasting change through our addiction recovery programs",
  items: [
    { name: "bre", avatar: "/assets/testimonials/bre.svg", text: "Staff are very educated and understanding and its a perfect place to recover from trauma and addiction as well as a place to learn coping skills for every day life and growth. Justin, one of the staff members is a great recovery coach and extremely helpful as a social worker. Revive is highly recommended!" },
    { name: "Matt Neswick", avatar: "/assets/testimonials/Matt-Neswick.svg", text: "I came in March of 2025 at the lowest point of my life. I had lost rights to seeing my daughter and was out of hope. Fast forward to now I have my life back completely and my daughter is a regular part of my life again. Through medication management, individual therapy and 12 step meetings my life is the best it has ever been. I completed the entirety of the program and would recommend Revive to anyone struggling with addiction and mental health. Brayden and Addison are the best! Give yourself a chance, hope is never lost." },
    { name: "Matt Saumure", avatar: "/assets/testimonials/Matt-Saumure.svg", text: "Revive has literally saved my life. I have struggled with addiction/alcoholism for over 20 years and have been to a 4 rehabilitation centers all over the country. Each was completely different and I had various lengths of sobriety but every time I'd relapse, I wondered why I couldn't find the peace I was looking for. I recently suffered severe trauma after finding my father after he committed suicide. This changed my life completely. It was only after this that I realized my mental health was the problem that I never wanted to address. After talking to many therapists, trying different meds etc, I was ready to find a place that TRULY focused on the underlying pain, suffering and sadness. That's when I found Revive." },
    { name: "josh cooper", avatar: "/assets/testimonials/josh-cooper.svg", text: "Revive is the rehab of all rehabs. I just finished my whole 90 days here and my experience has been truly incredible. Dr. Kelley was my therapist and she was amazing. Highly intelligent, both intellectually and emotionally. She uses different types of therapy depending on the client. She's kind and caring. As is all the staff. Revive is truly one of a kind!" },
    { name: "Spencer Proffitt", avatar: "/assets/testimonials/Spencer-Proffitt.svg", text: "Revive was the best recovery experience I have had outside of a residential setting. Their therapeutic staff really knows their stuff, and their support staff is always friendly and helpful. They have the right mix of classical psychology, like CBT, DBT, and mindfulness, as well as alternative therapies like yoga and sound baths." },
    { name: "Kyle W", avatar: "/assets/testimonials/Kyle-W.svg", text: "Had a friend go here for her mental health issues, and she thrived and is still doing well today. Their focus on the root of the issues and trauma is by far what sets this place apart. I speak from experience working in the behavioral health profession and personally know a couple of the staff and one of the owners." },
    { name: "Rosann Song", avatar: "/assets/testimonials/Rosann-Song.svg", text: "Revive Recovery Center has been an integral part of my Son's long term recovery. He is thriving in life and helping others do the same. Their staff shares deep rooted experience and knowledge. I can't express the gratitude my family holds for them." },
    { name: "Erin Garner", avatar: "/assets/testimonials/Erin-Garner.svg", text: "Excellent connections, changing lives, the best place that I've ever been for my mental health. They really cared about you and are such a huge support." },
    { name: "Stephen Mogowski", avatar: "/assets/testimonials/Stephen-Mogowski.svg", text: "Revive Recovery Center is a special place that combines expert care with professionalism and empathy. My father enrolled in their intensive outpatient program for eight weeks. He had been to many other programs previously, all of which were more expensive and, on paper, should have been more effective. Wrong. He saw the most growth at Revive– hands down." },
    { name: "James Johnson", avatar: "/assets/testimonials/James-Johnson.svg", text: "I cannot say enough good things about Revive. The CEO Brayden has hired an incredible staff. Everyone plays their role perfectly. Small, but personable. Groups are smartly run and the material, chosen by Dr. Kelley, is awesome." },
  ],
};

export const standardOfCare = {
  heading: "The Standard of Care You Can Expect",
  stats: [
    { icon: "/assets/icons/Two-1_1-Sessions-a-Week.svg", value: "2", label: "Individual therapy sessions per week — at every level of care" },
    { icon: "/assets/icons/Verify-Insurance.svg", value: "24-48 Hours", label: "Typical time from call to starting treatment" },
    { icon: "/assets/icons/Complete-Assessment.svg", value: "8+", label: "Major insurance plans accepted" },
    { icon: "/assets/icons/Dedicated-Care-Coordinator.svg", value: "1", label: "Dedicated care coordinator for every client" },
  ],
};

export const location = {
  heading: "Conveniently Located in Mesa, Serving All of the Valley",
  body: "Revive Recovery Centers is located in Mesa and serves clients across the Phoenix metro. And with Virtual IOP, quality care is available wherever you are in Arizona.",
  facilityImage: "/assets/images/Location.webp",
  description: "A modern, private outpatient space designed for real healing.",
};

export const faq = {
  heading: "FAQ & Answers",
  items: [
    { q: "How much does treatment cost?", a: "That depends on your insurance, and we'll give you real numbers up front, not after you've started. We accept most major plans, verify your benefits the same day, and built our programs specifically to be affordable. There are no surprise costs." },
    { q: "What's the difference between PHP, IOP, and Virtual IOP?", a: "PHP is our most intensive option — structured, full-day programming several days a week. IOP offers fewer hours so you can keep up with work or school. Virtual IOP delivers that same structured care from home. Not sure which fits? We'll help you figure it out on a quick call." },
    { q: "How quickly can I begin treatment?", a: "Fast. We verify insurance the same day you call, and most clients begin treatment within 24 to 48 hours. No long waitlists." },
    { q: "Can I use my cellphone and computer during treatment?", a: "Yes you're allowed to use cellphone and electronics but with limited and scheduled access in order to minimize distractions and promote focus on your recovery journey." },
    { q: "What makes Revive different from other outpatient programs?", a: "Two individual therapy sessions every week at every level of care, a dedicated care coordinator, family involvement, and psychiatric access, all standard. That level of personal attention isn't typical at most outpatient facilities. It is here." },
    { q: "Do you treat mental health or just addiction?", a: "Both, including together. We treat anxiety, depression, bipolar disorder, OCD, PTSD, and trauma, on their own or alongside substance use through our dual diagnosis program." },
    { q: "What forms of therapy are included in your program?", a: "Treatment goes well beyond just talk therapy. Every program combines two individual therapy sessions per week with group therapy, plus a range of approaches built into your care. Cognitive Behavioral Therapy (CBT) addresses the thoughts driving substance use, family therapy repairs key relationships, and psychiatry with medication management is also available when it's needed. We also integrate experiential and holistic options like yoga, fitness, art therapy, and recreational activities, because healing the mind, body, and spirit works better than treating any one alone." },
    { q: "What should I bring on my first day?", a: "Just yourself and your insurance card. Your first day is mostly about getting to know your care team and completing an assessment so we can tailor your program. There's no pressure and nothing to prepare. We'll walk you through everything when you arrive." },
  ],
  ctaHeading: "Still Have Questions?",
  ctaSubheading: "Give Us a Call",
};

export const finalCta = {
  heading: "Affordable, Flexible Recovery Starts Here",
  body: "Call now or verify your insurance and let's build a recovery plan that fits your schedule, budget, and goals.",
  image: "/assets/images/CTA.webp",
};
