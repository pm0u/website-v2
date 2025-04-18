import { useEffect, useState } from "react";

import styles from "./contact.module.css";

let TIMEOUT: NodeJS.Timeout | null = null;

const LENGTH = 8000;

const emails = [
  "howdy",
  "hi",
  "hey",
  "hiya",
  "greetings",
  "heyo",
  "sup",
  "hello",
];

const getClass = (i: number, current: number) => {
  if (i === current) {
    return `${styles.email} ${styles.emailActive}`;
  }

  const ref = current + emails.length;
  const pos = (i - ref) % emails.length;

  if (pos === -1) {
    // go to below
    return `${styles.email} ${styles.emailPrevious}`;
  }
  if (pos === -2) {
    // hide and move back to top
    return `${styles.email} ${styles.emailLast}`;
  }
  return styles.email;
};

const getWidth = (email: string) => {
  if (typeof window !== "undefined") {
    const span = document.createElement("p");
    span.innerText = email;
    span.id = "textMeasure";
    span.style.fontSize = "16";
    document.body.appendChild(span);
    const { width } = span.getBoundingClientRect();
    document.body.removeChild(span);
    return `${width + 6}px`;
  }
  return "auto";
};

export const Contact = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [placeholderWidth, setPlaceholderWidth] = useState(
    getWidth(emails[current])
  );

  useEffect(() => {
    const updateEmail = () => {
      setCurrent((a) => (a < emails.length - 1 ? a + 1 : 0));
      TIMEOUT = setTimeout(updateEmail, LENGTH);
    };
    if (!hovered) {
      TIMEOUT = setTimeout(updateEmail, LENGTH);
    } else {
      if (TIMEOUT) clearTimeout(TIMEOUT);
    }
    return () => {
      if (TIMEOUT) clearTimeout(TIMEOUT);
    };
  }, [hovered]);

  useEffect(() => {
    setPlaceholderWidth(getWidth(emails[current]));
  }, [current]);

  return (
    <div className={styles.emailWrap}>
      <a
        className="text-berkeley-blue hover:brightness-50 transition-all duration-200"
        href={`mailto:${emails[current]}@bypaul.dev?subject=Site%20Contact`}
        itemProp="url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={styles.emailWrap}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
        >
          <span
            className={styles.emailPlaceholder}
            // @ts-expect-error its a variable
            style={{ "--textWidth": placeholderWidth }}
          >
            {emails[current]}
          </span>
          {emails.map((email, i) => (
            <span key={email} className={getClass(i, current)}>
              {email}
            </span>
          ))}
          <span>@bypaul.dev</span>
        </span>
      </a>
    </div>
  );
};
