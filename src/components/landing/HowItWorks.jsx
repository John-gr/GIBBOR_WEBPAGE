import styles from './HowItWorks.module.css';
import { Section } from '../ui/Section';
import { Heading, Body } from '../ui/Typography';
import { Card, CardContent } from '../ui/Card';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Panic Button Triggered',
      description:
        'User activates GIBBOR during an incident. GPS coordinates and timestamp are captured immediately.',
      icon: '📍',
    },
    {
      number: 2,
      title: 'Recording Starts Automatically',
      description:
        'Audio and video recording begin automatically. No action required from potentially endangered person.',
      icon: '🎬',
    },
    {
      number: 3,
      title: 'Hash Computed',
      description:
        'When recording stops, the SHA-256 fingerprint (hash) of the file is calculated—a unique mathematical signature.',
      icon: '🔐',
    },
    {
      number: 4,
      title: 'Anchored on Blockchain',
      description:
        'GPS, timestamp, and hash are written to the Stellar blockchain via smart contract in under 30 seconds.',
      icon: '⛓️',
    },
    {
      number: 5,
      title: 'Queryable by Authorities',
      description:
        'Law enforcement, lawyers, or judges query the incident via GoldSky. On-chain timestamps and hashes are instantly verifiable.',
      icon: '🔍',
    },
    {
      number: 6,
      title: 'Tamper-Proof Verification',
      description:
        'Run the same SHA-256 function on the file. If the hash matches what is on-chain, file is provably unaltered. If not, tampering is proven.',
      icon: '✅',
    },
  ];

  return (
    <Section id="how-it-works">
      <div className={styles.header}>
        <Heading level={2}>How It Works</Heading>
        <Body size="lg" className={styles.subtitle}>
          From incident to immutable record in minutes—not days or months.
        </Body>
      </div>

      <div className={styles.stepsContainer}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.stepWrapper}>
            <Card className={styles.stepCard}>
              <CardContent>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepNumber}>Step {step.number}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <Body size="sm" className={styles.stepDescription}>
                  {step.description}
                </Body>
              </CardContent>
            </Card>
            {idx < steps.length - 1 && <div className={styles.connector}>↓</div>}
          </div>
        ))}
      </div>

      <div className={styles.workflowDiagram}>
        <Heading level={3} className={styles.diagramTitle}>Evidence Flow</Heading>
        <div className={styles.diagram}>
          <div className={styles.box}>
            <div className={styles.boxLabel}>User Phone</div>
            <div className={styles.boxContent}>Video File</div>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.box}>
            <div className={styles.boxLabel}>Hash Computed</div>
            <div className={styles.boxContent}>SHA-256</div>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.box}>
            <div className={styles.boxLabel}>Stellar Blockchain</div>
            <div className={styles.boxContent}>Immutable Record</div>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.box}>
            <div className={styles.boxLabel}>Queryable API</div>
            <div className={styles.boxContent}>GoldSky</div>
          </div>
        </div>
      </div>

      <div className={styles.keyPoints}>
        <div className={styles.keyPoint}>
          <div className={styles.keyIcon}>🔒</div>
          <h4>File Privacy</h4>
          <p>Video stays on device. Only hash goes on-chain.</p>
        </div>
        <div className={styles.keyPoint}>
          <div className={styles.keyIcon}>⏱️</div>
          <h4>Speed</h4>
          <p>From incident to blockchain in under 30 seconds.</p>
        </div>
        <div className={styles.keyPoint}>
          <div className={styles.keyIcon}>💰</div>
          <h4>Low Cost</h4>
          <p>Blockchain transaction costs fractions of a cent.</p>
        </div>
        <div className={styles.keyPoint}>
          <div className={styles.keyIcon}>👥</div>
          <h4>No Crypto Knowledge</h4>
          <p>Users sign in with email—complexity abstracted.</p>
        </div>
      </div>
    </Section>
  );
}
