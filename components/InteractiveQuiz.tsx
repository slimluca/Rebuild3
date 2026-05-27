"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { QuizQuestion, QuizResult } from "@/lib/quiz-pages";

type InteractiveQuizProps = {
  questions: QuizQuestion[];
  results: QuizResult[];
};

export function InteractiveQuiz({ questions, results }: InteractiveQuizProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const completed = Object.keys(answers).length === questions.length;

  const result = useMemo(() => {
    if (!completed) {
      return null;
    }

    const scores = Object.values(answers).reduce<Record<string, number>>((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
    return results.find((item) => item.key === winner) || results[0];
  }, [answers, completed, results]);

  return (
    <section className="section">
      <div className="container">
        <div className="quick-answer-panel">
          <p className="section-kicker">Quiz interattivo</p>
          <h2>Rispondi in modo anonimo</h2>
          <p>
            Le risposte restano nel tuo browser, non vengono inviate e non richiedono account,
            email o dati personali.
          </p>
        </div>
        <div className="siti-card-grid">
          {questions.map((question, index) => (
            <article className="siti-card" key={question.question}>
              <h3>{question.question}</h3>
              <div className="quiz-options" role="group" aria-label={question.question}>
                {question.options.map((option) => (
                  <button
                    className={answers[index] === option.value ? "button" : "button-secondary"}
                    key={option.label}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [index]: option.value }))}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
        {result ? (
          <div className="cta-band quiz-result">
            <p className="section-kicker">Risultato</p>
            <h2>{result.title}</h2>
            <p>{result.copy}</p>
            <div className="siti-card-grid">
              {result.links.map((link) => (
                <article className="siti-card" key={link.href}>
                  <h3>{link.title}</h3>
                  <p>{link.copy}</p>
                  <Link className="text-link" href={link.href}>
                    Leggi guida
                  </Link>
                </article>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button" href={result.ctaHref} prefetch={false}>
                {result.ctaLabel}
              </Link>
              <button className="button-secondary" type="button" onClick={() => setAnswers({})}>
                Rifai il quiz
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
