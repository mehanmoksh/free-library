import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      category: ['Finance', 'Self Learning'],
      image: '/assets/images/books/rich-dad.webp',

      summary:
        'A groundbreaking personal finance book that teaches how mindset, financial education, and smart investing help build lasting wealth.',

      fullSummary:
        'Rich Dad Poor Dad by Robert T. Kiyosaki is one of the most influential personal finance books ever written, focusing on the importance of financial literacy, mindset, and investing for long-term wealth creation. The book is based on the author’s childhood experiences with two father figures: his biological father, the “Poor Dad,” who was highly educated but struggled financially, and his best friend’s father, the “Rich Dad,” who had little formal education but achieved great financial success. Through their contrasting perspectives, Kiyosaki explains the difference between working for money and making money work for you.\n\nThe book introduces fundamental financial concepts such as assets and liabilities, emphasizing that wealthy people focus on acquiring assets that generate income, such as businesses, real estate, and investments, while others often accumulate liabilities disguised as assets. Kiyosaki explains how traditional education does not teach financial intelligence, which is essential for achieving financial independence. He highlights the importance of entrepreneurship, investing, and understanding how money flows rather than relying solely on a salary.\n\nRich Dad Poor Dad also focuses on the psychological and behavioral aspects of wealth, such as overcoming fear, taking calculated risks, and developing a growth-oriented mindset. The book encourages readers to think differently about money, avoid the “rat race” of living paycheck to paycheck, and build multiple sources of passive income. Its core message is that financial freedom is achievable through education, discipline, smart investing, and changing the way one thinks about money and opportunities.',

      amazonLink: 'http://amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/',
      kindleLink: 'https://www.amazon.in/Rich-Dad-Poor-Teach-Middle-ebook/dp/B07C7M8SX9/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 2,
      title: 'Bhagavad Gita',
      author: 'Ved Vyasa',
      category: ['Philosophy', 'Spiritual', 'Self-Help', 'Self Improvement'],
      image: '/assets/images/books/bhagvat_gita.jpg',

      summary:
        'A timeless spiritual dialogue that teaches the principles of duty, self-realization, detachment, and the path to inner peace and purpose.',

      fullSummary:
        'The Bhagavad Gita, written by the sage Ved Vyasa, is one of the most important spiritual and philosophical texts in the world. It is a 700-verse dialogue between Prince Arjuna and Lord Krishna, who serves as his charioteer, on the battlefield of Kurukshetra. Faced with a moral and emotional crisis about fighting in the war against his own relatives and teachers, Arjuna turns to Krishna for guidance. In response, Krishna delivers profound teachings about life, duty (dharma), righteousness, and the true purpose of human existence.\n\nThe Gita explains that every individual has a duty to perform in life and that one must fulfill this duty without attachment to the results. Krishna introduces key spiritual paths, including Karma Yoga (the path of selfless action), Bhakti Yoga (the path of devotion), and Jnana Yoga (the path of knowledge). He teaches that suffering arises from attachment, ego, and ignorance of one’s true nature, and that inner peace can be achieved through discipline, self-awareness, and devotion to a higher truth.\n\nThe text also explores the nature of the soul (Atman), explaining that it is eternal, indestructible, and beyond physical death. Krishna reveals his divine universal form, helping Arjuna understand the cosmic order and his role within it. The Bhagavad Gita ultimately teaches that true fulfillment comes from understanding oneself, acting with righteousness, controlling the mind, and surrendering to the divine will. Its teachings remain deeply relevant today, offering guidance on handling stress, making ethical decisions, and living a meaningful and purposeful life.',

      amazonLink:
        'https://www.amazon.in/C-Bhaktivedanta-Prabhupada-Bhaktivedanta-translated-Hardcover/dp/B0D8BMZFSW/',
      kindleLink: 'https://www.amazon.in/kindle',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 3,
      title: 'Deep Work',
      author: 'Cal Newport',
      category: ['Productivity'],
      image: '/assets/images/books/deep_work.jpg',

      summary:
        'A powerful guide that teaches how focused, distraction-free work leads to exceptional productivity, mastery, and meaningful success.',

      fullSummary:
        'Deep Work by Cal Newport explores the ability to focus without distraction on cognitively demanding tasks, a skill that has become increasingly rare and valuable in the modern digital age. Newport argues that the ability to perform deep, focused work is essential for mastering complex skills, producing high-quality results, and achieving meaningful success. In contrast, shallow work—such as constant emailing, social media use, and multitasking—reduces productivity and prevents individuals from reaching their full potential.\n\nThe book explains the science behind deep work and how intense concentration strengthens the brain’s ability to learn, solve problems, and create valuable output. Newport emphasizes that deep work is like a skill that can be developed through practice, discipline, and intentional habits. He provides practical strategies such as scheduling focused work sessions, eliminating distractions, embracing boredom to improve concentration, and reducing reliance on social media and constant connectivity.\n\nNewport also highlights the importance of creating structured routines and environments that support deep focus. He explains how professionals, students, and creators can use deep work to accelerate learning, improve efficiency, and gain a competitive advantage in their careers. Deep Work ultimately teaches that mastering focus is one of the most important skills in the modern world, enabling individuals to produce meaningful work, achieve personal fulfillment, and succeed in an increasingly distracted society.',

      amazonLink: 'https://www.amazon.in/DEEP-WORK-FOCUSED-SUCCESS-DISTRACTED/dp/0349413681/',
      kindleLink: 'https://www.amazon.in/Deep-Work-Focused-Success-Distracted-ebook/dp/B013UWFM52/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 4,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      category: ['Self Learning', 'Self-Help'],
      image: './assets/images/books/subtle-art.jpg',

      summary:
        'A brutally honest self-help book that teaches how choosing what truly matters leads to a meaningful and fulfilling life.',

      fullSummary:
        "The Subtle Art of Not Giving a F*ck by Mark Manson is a bestselling self-help book that challenges traditional ideas of constant positivity and happiness. Instead of encouraging people to avoid problems or pursue endless positivity, Manson argues that life’s struggles are inevitable and that true growth comes from accepting them. The core message of the book is that individuals should be selective about what they care about and focus only on things that truly matter, rather than wasting energy on trivial concerns or societal expectations.\n\nManson explains that trying to avoid pain, failure, or discomfort often leads to greater dissatisfaction. He emphasizes the importance of taking responsibility for one's life, accepting personal limitations, and embracing uncertainty. The book explores themes such as values, responsibility, failure, rejection, and mortality, helping readers understand that challenges and setbacks are essential parts of personal growth. He also explains how modern culture’s obsession with success, wealth, and happiness can create unrealistic expectations and emotional stress.\n\nThrough real-life examples, psychological insights, and straightforward language, the book teaches readers how to develop emotional resilience, clarity, and confidence. It encourages people to stop seeking constant validation and instead focus on building meaningful values, accepting reality, and making conscious choices. The Subtle Art of Not Giving a F*ck ultimately shows that a good life is not about avoiding problems, but about choosing the right problems and facing them with honesty, courage, and responsibility.",

      amazonLink:
        'https://www.amazon.in/Subtle-Giving-Counterintuitive-Approach-PAPERBACK/dp/0000654515/',
      kindleLink: 'https://www.amazon.in/kindle',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 6,
      title: 'Ikigai',
      author: 'Héctor García and Francesc Miralles',
      category: ['Psychology', 'Spiritual'],
      image: '/assets/images/books/ikigai.webp',

      summary:
        'A profound guide to discovering your life’s purpose and achieving happiness, balance, and longevity through the Japanese philosophy of ikigai.',

      fullSummary:
        'Ikigai: The Japanese Secret to a Long and Happy Life by Héctor García and Francesc Miralles explores the traditional Japanese concept of ikigai, which means “a reason for being.” It represents the intersection of what you love, what you are good at, what the world needs, and what you can be rewarded for. The book suggests that discovering one’s ikigai brings meaning, fulfillment, and motivation to everyday life. It is based on research and interviews with residents of Okinawa, Japan, a region known for having one of the highest life expectancies in the world.\n\nThe authors examine the lifestyles, habits, and philosophies of Okinawan centenarians, highlighting how purpose, community, simplicity, and mindfulness contribute to their happiness and longevity. The book explains that having a clear sense of purpose not only improves emotional well-being but also enhances physical health. It emphasizes the importance of staying active, maintaining strong social connections, eating mindfully, and continuing to pursue passions regardless of age.\n\nIkigai also provides practical guidance on finding personal purpose by understanding one’s passions, strengths, and values. It encourages readers to slow down, live in the present moment, and focus on meaningful activities rather than chasing external success or material wealth. The book blends psychology, philosophy, and spiritual wisdom to show that true happiness comes from living with intention, balance, and purpose. Its lessons help readers create a fulfilling life centered on meaning, joy, and long-term well-being.',

      amazonLink:
        'https://www.amazon.in/Ikigai-Japanese-Self-Help-Phenomenon-Meaningful/dp/178633089X/',
      kindleLink: 'https://www.amazon.in/Ikigai-Japanese-secret-long-happy-ebook/dp/B073D36KNM/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 5,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: ['Self Improvement', 'Productivity'],
      image: '/assets/images/books/atomic_habits.jpg',

      summary:
        'A practical guide that shows how small daily habits, when compounded over time, can lead to extraordinary personal and professional success.',

      fullSummary:
        "Atomic Habits by James Clear is a bestselling self-improvement book that explains how tiny, consistent changes in behavior can lead to remarkable long-term results. Clear argues that success is not the result of major breakthroughs, but rather the outcome of small habits repeated consistently over time. These “atomic habits” are small actions that compound like interest, gradually shaping one's identity, performance, and overall quality of life. The book emphasizes that improving by just 1% each day can lead to significant transformation over time.\n\nThe book introduces a proven framework called the Four Laws of Behavior Change: make it obvious, make it attractive, make it easy, and make it satisfying. These principles help readers build good habits and eliminate bad ones by understanding how habits are formed and reinforced. Clear explains the role of cues, cravings, responses, and rewards in shaping behavior, and how individuals can design their environment to make positive habits easier and negative habits harder. He also highlights the importance of identity-based habits, encouraging readers to focus on becoming the type of person they want to be, rather than just achieving specific goals.\n\nThrough scientific research, real-life examples, and practical strategies, Atomic Habits teaches readers how to stay consistent, overcome procrastination, and build systems that support long-term success. The book emphasizes that habits shape identity, and identity shapes behavior. By focusing on small improvements, discipline, and consistency, individuals can create lasting positive change in their personal life, career, health, and overall well-being.",

      amazonLink: 'https://www.amazon.in/dp/1847941834/',
      kindleLink: 'https://www.amazon.in/Atomic-Habits-Proven-Build-Break-ebook/dp/B01N5AX61W/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 7,
      title: 'The God-King of Bambain',
      author: 'Fatir Ansari',
      category: ['Novel', 'Fantasy', 'Mythology', 'Epic Fantasy'],
      image: '/assets/images/books/the-god-king-of-bambain.jpg',

      summary:
        'An epic fantasy tale of power, destiny, and divine kingship set in a mythologically inspired world',

      fullSummary:
        'The God-King of Bambain by Fatir Ansari is an epic fantasy novel and the first installment in the Kaivalya series. Set in a richly imagined fictional world inspired by ancient Indian mythology, culture, and philosophy, the story explores the rise of a powerful ruler in the island kingdom of Bambain. The narrative blends political intrigue, war, divine influence, and personal transformation, creating a layered story about leadership and destiny.\n\nAt its core, the novel follows the journey of a young ruler whose path to power is shaped by prophecy, divine forces, and the expectations of his people. As he ascends to become the God-King, he must navigate complex political alliances, internal conflicts, and external threats that challenge both his authority and his identity. The story examines the burden of power and the sacrifices required to rule.\n\nBeyond its plot, the book explores deeper philosophical themes drawn from Indian spiritual traditions, including the nature of duty (dharma), self-realization, and the relationship between mortals and the divine. Fatir Ansari combines immersive world-building with introspective storytelling, offering readers an epic fantasy that is both action-driven and thought-provoking.',

      amazonLink:
        'https://www.amazon.in/GOD-KING-BAMBAIN-Fatir-Ansari/dp/B0CMT4FTHG/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.k01vu-3doe6NIx3DVQvWWaK6UlN63Gdl8JowMX-D3izNmMBgvzemkpwzJg344qzi9CNf859td-iPZX6Oow-6-7-cQNnbkcx_r1DKwbjrsnJZ4BJAjer4_-hV6dLtZArFCQbLuIezaT9qXOV3djVzQ63XUGnmT0Gu7PCiLL4gu1_enZME7eoey2lJXg5DtgyloNhbYZVYgSH-Jn5PmEk5so-45-WZuEoyRnWtNFgAuPI.9y8VAVaRufDtDfBfNv-3TiwAmLFTFWZMxnMlhYnohH8&dib_tag=se&keywords=novels&qid=1770480144&sr=8-2-spons&aref=iDlrbO3xyP&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      kindleLink:
        'https://www.amazon.in/God-King-Bambain-Saga-Seven-Islands-ebook/dp/B0CZ79C98M/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.k01vu-3doe6NIx3DVQvWWaK6UlN63Gdl8JowMX-D3izNmMBgvzemkpwzJg344qzi9CNf859td-iPZX6Oow-6-7-cQNnbkcx_r1DKwbjrsnJZ4BJAjer4_-hV6dLtZArFCQbLuIezaT9qXOV3djVzQ63XUGnmT0Gu7PCiLL4gu1_enZME7eoey2lJXg5DtgyloNhbYZVYgSH-Jn5PmEk5so-45-WZuEoyRnWtNFgAuPI.9y8VAVaRufDtDfBfNv-3TiwAmLFTFWZMxnMlhYnohH8&qid=1770480144&sr=8-2-spons',
    },
    {
      id: 8,
      title: 'You Only Live Once',
      author: 'Stuti Changle',
      category: ['Novel', 'Fiction', 'Contemporary Fiction', 'Romance', 'Travel Fiction'],
      image: '/assets/images/books/you_only.png',

      summary:
        'A heartfelt story of self-discovery, love, and purpose sparked by a mysterious social media message',

      fullSummary:
        'You Only Live Once by Stuti Changle is a contemporary Indian fiction novel that explores themes of self-discovery, emotional healing, and the pursuit of true happiness. The story follows Alara Advani, a successful and ambitious young woman who appears to have everything under control—an elite education, a promising career, and a structured life plan. However, her life takes an unexpected turn when she receives a mysterious message from a stranger on LinkedIn, urging her to uncover the truth about her past and reconsider the path she is on.\n\nIntrigued and unsettled, Alara embarks on a journey across India to find answers. Along the way, she meets people who challenge her perspectives, reveal hidden truths, and help her reconnect with emotions she had long suppressed. Through her travels and interactions, she begins to question her definitions of success, love, and fulfillment.\n\nThe novel blends romance, personal growth, and adventure while addressing deeper themes such as mental health, identity, grief, and the courage to make life-changing choices. Stuti Changle uses a modern narrative style that resonates strongly with young readers, especially those navigating career pressures and personal expectations. Ultimately, the book delivers a powerful message about living authentically, embracing vulnerability, and realizing that life’s true meaning often lies beyond conventional achievements.',

      amazonLink: 'https://www.amazon.in/Only-Live-Paperback-Changle-Stuti/dp/0143453580/',
      kindleLink:
        'https://www.amazon.in/You-Only-Live-Once-Friendship-ebook/dp/B08WKFZ1HT/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.k01vu-3doe6NIx3DVQvWWaK6UlN63Gdl8JowMX-D3izNmMBgvzemkpwzJg344qzi9CNf859td-iPZX6Oow-6-7-cQNnbkcx_r1DKwbjrsnJZ4BJAjer4_-hV6dLtZArFCQbLuIezaT9qXOV3djVzQ63XUGnmT0Gu7PCiLL4gu1_enZME7eoey2lJXg5DtgyloNhbYZVYgSH-Jn5PmEk5so-45-WZuEoyRnWtNFgAuPI.9y8VAVaRufDtDfBfNv-3TiwAmLFTFWZMxnMlhYnohH8&qid=1770480144&sr=8-4',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 9,
      title: "Don't Believe Everything You Think",
      author: 'Joseph Nguyen',
      category: ['Self-Help', 'Psychology', 'Personal Development', 'Mental Health'],
      image: '/assets/images/books/dont-believe-everything-you-think.webp',

      summary:
        'A powerful guide to overcoming suffering by understanding and freeing yourself from negative thought patterns',

      fullSummary:
        "Don't Believe Everything You Think by Joseph Nguyen is a self-help and personal development book that explores how our thoughts are often the root cause of emotional suffering, anxiety, and unhappiness. The book challenges the common assumption that thinking more leads to better solutions, instead arguing that excessive and unconscious thinking can create mental distress, self-doubt, and emotional pain. Nguyen explains that many of our problems do not come from external circumstances, but from the meanings and interpretations our minds attach to those experiences.\n\nThe author introduces readers to the idea that thoughts are not facts, and that blindly believing every thought can trap individuals in cycles of overthinking, fear, and negativity. Through clear explanations and practical insights, the book helps readers recognize how their minds create unnecessary suffering and how awareness can break these patterns. Nguyen emphasizes that peace, clarity, and confidence emerge naturally when individuals stop identifying with every thought that arises.\n\nRather than promoting complicated techniques, the book focuses on awareness, presence, and understanding the nature of thinking itself. It encourages readers to detach from destructive thought patterns and rediscover a natural state of calm and mental freedom. The book resonates especially with readers dealing with anxiety, overthinking, and stress, offering a simple but profound perspective on achieving inner peace and emotional well-being.",

      amazonLink: 'https://www.amazon.in/Dont-Believe-Everything-You-Think/dp/935543135X/',
      kindleLink: 'https://www.amazon.in/Dont-Believe-Everything-You-Think-ebook/dp/B0BJHG532P/',
      googleBooksLink: 'https://books.google.com/',
    },

    {
      id: 10,
      title: 'It Ends With Us',
      author: 'Colleen Hoover',
      category: ['Novel', 'Romance', 'Contemporary Fiction', 'Drama', 'Relationships'],
      image: '/assets/images/books/it-ends-with-us.jpg',

      summary: 'A deeply emotional novel about love, resilience, and breaking the cycle of abuse',

      fullSummary:
        "It Ends With Us by Colleen Hoover is a contemporary romance novel that tells the powerful and emotional story of Lily Bloom, a young woman who moves to Boston to start a new life and pursue her dream of opening her own business. Lily comes from a difficult past marked by her father's abusive behavior toward her mother, and she is determined to create a better future for herself. When she meets Ryle Kincaid, a successful and charming neurosurgeon, she finds herself drawn to him despite his initial reluctance toward relationships.\n\nAs their relationship deepens, Lily begins to see sides of Ryle that remind her of her parents' troubled marriage. At the same time, Atlas Corrigan, Lily's first love and a symbol of safety and compassion from her past, reenters her life. This forces Lily to confront painful memories and difficult choices about love, loyalty, and self-respect.\n\nThe novel explores complex themes such as domestic abuse, emotional trauma, strength, and the courage required to break destructive cycles. Colleen Hoover draws inspiration from real-life experiences, making the story deeply authentic and impactful. It Ends With Us is widely praised for its honest portrayal of difficult realities and its empowering message about choosing oneself and ending cycles of harm.",

      amazonLink: 'https://www.amazon.in/Ends-Us-Novel-Colleen-Hoover/dp/1501110365',
      kindleLink: 'https://www.amazon.in/Ends-Us-Colleen-Hoover-ebook/dp/B017RNBS3A/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 11,
      title: 'It Starts With Us',
      author: 'Colleen Hoover',
      category: ['Novel', 'Romance', 'Contemporary Fiction', 'Drama', 'Relationships'],
      image: '/assets/images/books/it-starts-with-us.jpg',

      summary:
        'A heartfelt sequel that explores healing, second chances, and choosing love after trauma',

      fullSummary:
        'It Starts With Us by Colleen Hoover is the sequel to the bestselling novel It Ends With Us and continues the story of Lily Bloom as she navigates life after making the difficult decision to end her abusive marriage with Ryle Kincaid. Now focused on raising her daughter and rebuilding her life, Lily strives to create a peaceful and healthy future free from the trauma of her past. However, co-parenting with Ryle presents emotional and practical challenges that Lily must carefully manage.\n\nWhen Atlas Corrigan, Lily’s first love, reenters her life, they are finally given the opportunity to explore the relationship they were once denied. The novel alternates between Lily’s and Atlas’s perspectives, offering deeper insight into Atlas’s past, his personal struggles, and his journey toward stability and emotional healing. Their relationship develops gradually, grounded in trust, mutual respect, and genuine care.\n\nThe book focuses on themes of healing, personal growth, forgiveness, and the courage to embrace happiness after hardship. Unlike its predecessor, which dealt heavily with trauma and difficult decisions, this novel emphasizes hope, closure, and emotional recovery. Colleen Hoover provides readers with a satisfying continuation that highlights the importance of healthy relationships, self-worth, and the power of new beginnings.',

      amazonLink: 'https://www.amazon.in/gp/product/B0DFY5QQH3',
      kindleLink: 'https://www.amazon.in/Starts-Us-Colleen-Hoover-ebook/dp/B09RX42621/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 12,
      title: 'Never Lie',
      author: 'Freida McFadden',
      category: ['Novel', 'Psychological Thriller', 'Thriller', 'Mystery', 'Suspense'],
      image: '/assets/images/books/never-lie.jpg',

      summary:
        'A gripping psychological thriller about secrets, lies, and a mysterious disappearance inside an isolated mansion',

      fullSummary:
        'Never Lie by Freida McFadden is a psychological thriller that follows newlyweds Tricia and Ethan as they search for their dream home. During a snowstorm, they become stranded while visiting a remote and isolated mansion that once belonged to Dr. Adrienne Hale, a renowned psychiatrist who mysteriously disappeared without a trace several years earlier. With no way to leave due to the severe weather, the couple is forced to stay inside the eerie house.\n\nWhile exploring the mansion, Tricia discovers a hidden room containing audio recordings of Dr. Hale’s therapy sessions. As she listens to the tapes, she uncovers disturbing secrets about the doctor’s patients and begins to realize that the truth behind Dr. Hale’s disappearance may be far more sinister than she imagined. With each recording, tension builds as hidden truths and psychological manipulation come to light.\n\nThe novel masterfully explores themes of trust, deception, and the dark complexities of the human mind. Freida McFadden uses suspenseful storytelling, unexpected twists, and psychological depth to keep readers engaged until the shocking conclusion. Never Lie is widely praised for its fast-paced narrative, unreliable characters, and unpredictable plot that challenges readers’ assumptions about truth and perception.',

      amazonLink: 'https://www.amazon.in/Never-Lie-Gripping-Thriller-Mind-bending/dp/0143464523/',
      kindleLink:
        'https://www.amazon.in/Never-Lie-addictive-psychological-thriller-ebook/dp/B0BBL2ZW73/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 13,
      title: 'White Nights',
      author: 'Fyodor Dostoevsky',
      category: ['Novel', 'Classic', 'Literary Fiction', 'Romance', 'Philosophical Fiction'],
      image: '/assets/images/books/white-nights.jpg',

      summary:
        'A poignant tale of loneliness, fleeting love, and emotional awakening in St. Petersburg',

      fullSummary:
        'White Nights by Fyodor Dostoevsky is a classic short story first published in 1848, set in St. Petersburg, Russia. The story follows an unnamed narrator, often referred to as the Dreamer, who lives a solitary and emotionally isolated life. He spends his days lost in imagination and his nights wandering the quiet streets of the city, detached from real human connections. His life takes a transformative turn when he meets a young woman named Nastenka during one of his nightly walks.\n\nOver the course of four nights, the Dreamer and Nastenka form a deep emotional bond as they share their personal stories, hopes, and fears. Nastenka confides in him about her love for another man and her longing for his return. Despite knowing her heart belongs elsewhere, the Dreamer finds himself falling deeply in love with her. Through their conversations, he experiences genuine human connection and emotional fulfillment for the first time.\n\nThe story explores profound themes such as loneliness, unrequited love, hope, and the contrast between fantasy and reality. Dostoevsky masterfully captures the inner emotional world of the Dreamer, highlighting both the beauty and pain of human vulnerability. White Nights is celebrated for its psychological depth, lyrical prose, and timeless exploration of love and isolation, making it one of Dostoevsky’s most beloved and emotionally resonant works.',

      amazonLink:
        'https://www.amazon.in/White-Nights-Loneliness-Bestsellers-Dostoevsky/dp/8198151451/',
      kindleLink: 'https://www.amazon.in/kindle',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 14,
      title: 'Money Works: The Guide to Financial Literacy',
      author: 'Abhishek Kumar',
      category: ['Personal Finance', 'Finance', 'Self-Help', 'Financial Literacy'],
      image: '/assets/images/books/money-works-the-guide-to-financial-literacy.jpg',

      summary:
        'A practical beginner-friendly guide to understanding money, investing, and building long-term financial security',

      fullSummary:
        'Money Works: The Guide to Financial Literacy by Abhishek Kumar is a comprehensive personal finance book designed to help readers understand the fundamentals of managing money effectively. The book breaks down complex financial concepts into simple and practical explanations, making it especially useful for beginners who want to take control of their financial future. It covers essential topics such as income management, saving strategies, budgeting, debt management, and the importance of financial planning.\n\nThe author explains various investment options available in India, including stocks, mutual funds, fixed deposits, emergency funds, and retirement planning. He emphasizes the importance of starting early, understanding risk, and making informed financial decisions rather than relying on speculation or shortcuts. The book also addresses common financial mistakes and misconceptions that prevent people from achieving financial stability.\n\nThrough clear examples, practical advice, and structured guidance, the book empowers readers to develop healthy financial habits and long-term wealth-building strategies. Abhishek Kumar focuses on financial independence, disciplined investing, and smart money management, helping readers build confidence and make informed decisions that lead to financial security and freedom.',

      amazonLink: 'https://www.amazon.in/Money-Works-guide-Financial-Literacy/dp/0143461648/',
      kindleLink: 'https://www.amazon.in/Money-Works-Guide-Financial-Literacy-ebook/dp/B0CD81VNTV/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 15,
      title: "Build, Don't Talk",
      author: 'Raj Shamani',
      category: ['Self-Help', 'Entrepreneurship', 'Personal Development', 'Business'],
      image: '/assets/images/books/build-dont-talk.jpg',

      summary:
        'A motivational guide that encourages taking action, building real skills, and creating success through execution',

      fullSummary:
        "Build, Don't Talk by Raj Shamani is a practical and motivational book focused on helping individuals move beyond ideas and take real action to build meaningful careers and businesses. Drawing from his personal journey as a young entrepreneur, Raj Shamani shares lessons he learned about execution, discipline, and resilience. The book emphasizes that success comes not from endless planning or talking, but from consistently building, experimenting, and learning through action.\n\nThe author provides actionable advice on developing the right mindset, overcoming fear of failure, and building confidence. He discusses important concepts such as personal branding, communication skills, financial awareness, and leveraging modern tools like social media to create opportunities. Raj also explains how consistency, patience, and self-belief play a critical role in achieving long-term success.\n\nThrough relatable examples and practical insights, the book inspires readers—especially students, young professionals, and aspiring entrepreneurs—to stop waiting for perfect conditions and start creating value immediately. It encourages readers to focus on skill-building, execution, and continuous improvement, reinforcing the idea that real growth happens through action, not just intention.",

      amazonLink: 'javascript:void(0)',
      kindleLink: 'https://www.amazon.in/Build-Dont-Talk-Things-Taught-ebook/dp/B0BLD6VK6B/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 16,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      category: ['Personal Finance', 'Psychology', 'Finance', 'Self-Help'],
      image: '/assets/images/books/the-psychology-of-money.jpg',

      summary:
        'A powerful exploration of how behavior and mindset shape financial success more than technical knowledge',

      fullSummary:
        'The Psychology of Money by Morgan Housel explores how human behavior, emotions, and mindset play a far more important role in financial success than technical knowledge or intelligence. Rather than focusing on complex financial formulas or strategies, the book explains how people think about money, make decisions, and react to risk, uncertainty, and opportunity. Housel argues that financial success is not about mastering numbers, but about mastering behavior.\n\nThrough 19 short and engaging stories, the author illustrates key principles such as the importance of saving consistently, the power of compounding, and the role of patience and long-term thinking. He explains how factors like ego, fear, greed, and personal experiences influence financial decisions. The book also highlights the difference between being rich and being wealthy, emphasizing that true wealth lies in financial independence and freedom rather than visible status.\n\nMorgan Housel presents timeless lessons on building sustainable wealth, avoiding common financial mistakes, and maintaining emotional discipline during market fluctuations. The book encourages readers to focus on long-term consistency, humility, and rational decision-making. Its practical insights and relatable storytelling make it one of the most influential modern books on personal finance and financial psychology.',

      amazonLink: 'https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/',
      kindleLink: 'https://www.amazon.in/Psychology-Money-Morgan-Housel-ebook/dp/B08FHZ5L47/',
      googleBooksLink: 'https://books.google.com/',
    },

    {
      id: 17,
      title: 'The Art of Happiness',
      author: 'Dalai Lama XIV and Howard C. Cutler',
      category: ['Self-Help', 'Psychology', 'Spiritual', 'Philosophy'],
      image: '/assets/images/books/the-art-of-happiness.jpg',

      summary:
        'A spiritual and practical guide to achieving lasting happiness through compassion, mindfulness, and inner peace',

      fullSummary:
        'The Art of Happiness is a spiritual and psychological guide based on conversations between His Holiness the Dalai Lama XIV and psychiatrist Dr. Howard C. Cutler. The book explores the idea that happiness is not something that happens by chance, but something that can be cultivated through intentional mental habits, compassion, and self-awareness. Drawing from Buddhist philosophy and modern psychology, the Dalai Lama explains that the purpose of life is to seek happiness and that it can be achieved by training the mind.\n\nThe book discusses how negative emotions such as anger, fear, and anxiety create suffering, and how individuals can overcome them through mindfulness, patience, and compassion. It emphasizes the importance of empathy, kindness, and meaningful relationships in achieving emotional well-being. Dr. Cutler adds scientific and psychological perspectives, helping bridge ancient spiritual wisdom with modern mental health practices.\n\nThrough real-life examples, philosophical insights, and practical advice, the book provides readers with tools to handle stress, adversity, and emotional challenges. It teaches that true happiness comes not from external success or material possessions, but from inner peace, mental discipline, and compassion toward others. The Art of Happiness remains one of the most influential books on spiritual well-being and emotional fulfillment.',

      amazonLink: 'https://www.amazon.in/ART-HAPPINESS-Dalai-Lama/dp/0340750154/',
      kindleLink:
        'https://www.amazon.in/Art-Happiness-10th-Anniversary-Handbook-ebook/dp/B002UK6NO0/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 18,
      title: 'Make Epic Money',
      author: 'Ankur Warikoo',
      category: ['Personal Finance', 'Self-Help', 'Finance', 'Personal Development'],
      image: '/assets/images/books/make-epic-money.jpg',

      summary:
        'A practical guide to mastering money, building wealth, and achieving financial independence',

      fullSummary:
        'Make Epic Money by Ankur Warikoo is a practical and beginner-friendly guide to understanding personal finance, investing, and wealth creation. The book is designed to help readers develop a healthy and confident relationship with money by explaining financial concepts in simple and relatable language. Warikoo focuses on helping individuals understand how money works, how to manage it effectively, and how to make smart financial decisions that lead to long-term financial security.\n\nThe book covers essential topics such as saving, budgeting, investing in mutual funds and stocks, understanding risk, building emergency funds, insurance, and retirement planning. Warikoo emphasizes the importance of starting early, being consistent, and avoiding common financial mistakes. He also explains how mindset, discipline, and patience play a crucial role in financial success, often more than income level alone.\n\nThrough structured lessons, real-life examples, and actionable advice, the book empowers readers to take control of their financial future. It encourages readers to focus on financial independence rather than quick money, and to build sustainable wealth through informed decisions and long-term thinking. Make Epic Money serves as a comprehensive roadmap for anyone seeking financial clarity, stability, and freedom.',

      amazonLink: 'https://www.amazon.in/Make-Epic-Money-Ankur-Warikoo/dp/0670099813/',
      kindleLink: 'https://www.amazon.in/Make-Epic-Money-Ankur-Warikoo-ebook/dp/B0CSJT8C9Z/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 19,
      title: 'Winning People Without Losing Yourself',
      author: 'Ankur Warikoo',
      category: ['Self-Help', 'Personal Development', 'Psychology', 'Relationships'],
      image: '/assets/images/books/winning_people.jpg',

      summary:
        'A practical guide to building strong relationships while staying authentic and true to yourself',

      fullSummary:
        "Winning People Without Losing Yourself by Ankur Warikoo is a personal development book that focuses on building meaningful relationships without compromising one's identity, values, or emotional well-being. Drawing from his personal experiences as an entrepreneur, leader, and mentor, Warikoo explores how people often seek external validation and approval at the cost of their own authenticity. The book teaches readers how to form genuine connections while maintaining self-respect and clarity about who they are.\n\nThe book covers essential topics such as self-awareness, emotional independence, communication, handling rejection, and setting healthy boundaries. Warikoo explains how the desire to please others can lead to emotional exhaustion and loss of confidence, and emphasizes the importance of understanding one's own needs, beliefs, and priorities. He provides practical frameworks and real-life examples to help readers navigate personal and professional relationships effectively.\n\nThrough simple language, relatable stories, and actionable advice, the book empowers readers to develop confidence, emotional strength, and clarity in their interactions. It encourages readers to stop seeking constant approval and instead focus on building genuine respect and connection. Winning People Without Losing Yourself serves as a guide to achieving emotional independence while forming strong and meaningful relationships.",

      amazonLink: 'https://www.amazon.in/Winning-People-Without-Losing-Yourself/dp/067009983X/',
      kindleLink: 'https://www.amazon.in/kindle',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 20,
      title: 'The Power of Your Subconscious Mind',
      author: 'Joseph Murphy',
      category: ['Self-Help', 'Personal Development', 'Psychology', 'Spiritual'],
      image: '/assets/images/books/the-power-of-your-subconscious-mind.jpg',

      summary:
        'A classic self-help book that teaches how harnessing the subconscious mind can transform life and achieve success',

      fullSummary:
        'The Power of Your Subconscious Mind by Dr. Joseph Murphy is one of the most influential self-help books ever written, focusing on how the subconscious mind shapes thoughts, behaviors, and life outcomes. Murphy explains that the subconscious mind continuously influences emotions, habits, and decisions, and that by consciously directing positive thoughts and beliefs, individuals can achieve success, happiness, health, and prosperity. The book emphasizes that the subconscious mind responds to repeated thoughts, affirmations, and visualizations.\n\nMurphy explains that many personal struggles—such as fear, anxiety, lack of confidence, and failure—originate from negative subconscious programming. By replacing negative beliefs with positive affirmations and mental imagery, individuals can reprogram their subconscious mind. He provides practical techniques such as visualization, repetition, faith, and mental discipline to influence subconscious behavior and achieve desired goals.\n\nThrough real-life examples and psychological and spiritual insights, the book demonstrates how people have overcome illness, improved relationships, gained wealth, and achieved personal success using the power of the subconscious mind. The Power of Your Subconscious Mind teaches that the mind is a powerful tool, and by understanding and directing it properly, individuals can transform their lives and unlock their full potential.',

      amazonLink: 'https://www.amazon.in/Power-Your-Subconscious-Mind-Success/dp/8172345666/',
      kindleLink:
        'https://www.amazon.in/Power-Your-Subconscious-Mind-Roughcut-ebook/dp/B0BS1SG4DB/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 21,
      title: 'Do Epic Shit',
      author: 'Ankur Warikoo',
      category: ['Self-Help', 'Personal Development', 'Motivation', 'Entrepreneurship'],
      image: '/assets/images/books/do-epic-shit.jpg',

      summary:
        'A motivational collection of powerful life lessons on success, failure, habits, and self-growth',

      fullSummary:
        "Do Epic Shit by Ankur Warikoo is a motivational and personal development book that presents practical life lessons drawn from the author’s experiences as an entrepreneur, content creator, and mentor. The book is written in a concise and easy-to-read format, consisting of short, impactful chapters that focus on key areas such as success, failure, habits, money, relationships, and self-awareness. Warikoo emphasizes that success is not defined by external validation, but by personal growth, discipline, and consistent effort.\n\nThe book explores important concepts such as embracing failure as a learning tool, building self-confidence, managing time effectively, and developing a strong mindset. Warikoo shares honest insights about his own failures, insecurities, and turning points, helping readers understand that setbacks are a natural and necessary part of growth. He also discusses the importance of taking responsibility for one's decisions and building habits that support long-term success.\n\nThrough relatable stories, direct advice, and thought-provoking reflections, the book encourages readers to take action, trust themselves, and create their own definition of success. Do Epic Shit serves as a guide for students, professionals, and aspiring entrepreneurs who want to improve their mindset, overcome fear, and build a meaningful and fulfilling life.",

      amazonLink: 'javascript:void(0)',
      kindleLink: 'https://www.amazon.in/Do-Epic-Shit-Ankur-Warikoo-ebook/dp/B09MTGKFXZ/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 22,
      title: 'Too Good to Be True',
      author: 'Prajakta Koli (MostlySane)',
      category: ['Romance', 'Contemporary Fiction', 'Humor', 'Young Adult', 'Relationships'],
      image: '/assets/images/books/too-good-to-be-true.jpg',

      summary:
        'A smart and humorous romance about ambition, love, and self-discovery in modern urban India',

      fullSummary:
        'Too Good to Be True by Prajakta Koli, popularly known as MostlySane, is a contemporary romantic fiction novel that follows the story of Avani, a young and ambitious woman navigating career aspirations, personal growth, and unexpected love. Avani is focused on building her dream career and creating a successful life for herself. She believes in structure, planning, and independence, and is determined to achieve her goals without distractions.\n\nHer life takes an unexpected turn when she meets Aman, a charming and seemingly perfect man who challenges her carefully constructed world. As their relationship develops, Avani finds herself experiencing emotions and vulnerabilities she had not planned for. The story explores the tension between ambition and emotional connection, forcing Avani to confront her fears, insecurities, and beliefs about love and success.\n\nBlending humor, emotional depth, and relatable modern experiences, the novel explores themes of self-worth, personal independence, vulnerability, and the courage to embrace uncertainty. Prajakta Koli brings an authentic voice to the story, reflecting the realities of young adults balancing careers, relationships, and identity. Too Good to Be True is a heartfelt and engaging exploration of love, growth, and discovering what truly matters in life.',

      amazonLink:
        'https://www.amazon.in/Too-Good-True-will-they-wont-they-mostlysane/dp/936569339X/',
      kindleLink:
        'https://www.amazon.in/Too-Good-True-will-they-wont-they-MostlySane-ebook/dp/B0DPJC41YP/',
      googleBooksLink: 'https://books.google.com/',
    },
    {
      id: 23,
      title: "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life",
      author: 'Gaur Gopal Das',
      category: ['Self-Help', 'Personal Development', 'Spiritual'],
      image: '/assets/images/books/life_3.jpg',

      summary:
        'A practical and spiritual guide to achieving balance, happiness, and purpose in modern life.',

      fullSummary:
        "Life's Amazing Secrets by Gaur Gopal Das is a personal development and spiritual guide that helps readers navigate the challenges of modern life while maintaining inner peace, balance, and purpose. Drawing from his experiences as a monk, motivational speaker, and life coach, Gaur Gopal Das presents timeless wisdom in a simple, relatable, and practical way. The book focuses on helping individuals achieve success not only externally in career and relationships but also internally through emotional well-being and self-awareness.\n\nThe book is structured around four key areas of life: personal life, relationships, work life, and social contributions. Using the metaphor of a car, the author explains how each area represents an important wheel that must remain balanced for life to function smoothly. He discusses common struggles such as stress, fear, failure, dissatisfaction, and lack of direction, and provides practical tools to overcome them. The book emphasizes the importance of discipline, mindfulness, gratitude, and emotional intelligence in achieving lasting fulfillment.\n\nThrough powerful stories, real-life examples, and spiritual insights, the book teaches readers how to develop a positive mindset, build meaningful relationships, and align their actions with their deeper purpose. It encourages readers to focus on inner growth rather than external validation, and to live a life guided by values, clarity, and service. Life's Amazing Secrets serves as a roadmap for anyone seeking happiness, balance, and a meaningful life in an increasingly fast-paced and demanding world.",

      amazonLink: 'https://www.amazon.in/Lifes-Amazing-Secrets-find-Bala/dp/0143442295/',
      kindleLink:
        'https://www.amazon.in/Lifes-Amazing-Secrets-Balance-Purpose-ebook/dp/B07H9WSFQG/',
      googleBooksLink: 'https://books.google.com/',
    },
  ];

  // getBooks() {
  //   return this.books;
  // }

  getBooks() {
    const sorted = [...this.books].sort((a, b) => b.id - a.id);

    sorted.forEach((book, index) => {
      book.isNew = index < 2; // latest 2 books
    });

    return sorted;
  }

  //developer's picks

  featuredBookIds = [15, 16, 22, 19, 11, 10, 21, 18];
  // Example:
  // 7 → The God-King of Bambain
  // 5 → Atomic Habits
  // 3 → Deep Work
  // 16 → Psychology of Money

  // getFeaturedBooks(): Book[] {
  //   const all = this.getBooks();

  //   return this.featuredBookIds
  //     .map((id) => all.find((book) => book.id === id))
  //     .filter(Boolean) as Book[];
  // }

  //featured badge

  getFeaturedBooks(): Book[] {
    const all = this.getBooks();

    return this.featuredBookIds
      .map((id) => {
        const book = all.find((b) => b.id === id);

        if (book) {
          book.isFeatured = true; // add flag
        }

        return book;
      })
      .filter(Boolean) as Book[];
  }

  //top picks
  developerPickBookIds = [15, 16, 22, 19, 11, 10, 21, 18];

  isDeveloperPick(bookId: number): boolean {
    return this.developerPickBookIds.includes(bookId);
  }

  //add on best books

  // Best in Spirituality
  bestSpiritualBookIds = [
    2, // Bhagavad Gita
    6, // Ikigai
    17, // art of hapiness
    23, // Life's Amazing Secrets
  ];

  // Best in Money
  bestMoneyBookIds = [
    1, // Rich Dad Poor Dad
    16, // Psychology of Money
    18, // Make Epic Money
    14, // Money Works
  ];

  //getter functions

  getBestSpiritualBooks(): Book[] {
    const all = this.getBooks();

    return this.bestSpiritualBookIds
      .map((id) => all.find((book) => book.id === id))
      .filter(Boolean) as Book[];
  }

  getBestMoneyBooks(): Book[] {
    const all = this.getBooks();

    return this.bestMoneyBookIds
      .map((id) => all.find((book) => book.id === id))
      .filter(Boolean) as Book[];
  }

  
}
