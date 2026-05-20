import styles from './HowItWorks.module.css';
import { Section } from '../ui/Section';
import { Heading, Body } from '../ui/Typography';
import { Card, CardContent } from '../ui/Card';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Press the Button',
      description:
        'That\'s all the user does. One press activates GIBBOR. No unlocking, no menus, no typing.',
      icon: '🔴',
    },
    {
      number: 2,
      title: 'System Activates Automatically',
      description:
        'Exact GPS location is captured. Audio recording begins. Emergency contacts receive an alert. All in seconds.',
      icon: '📡',
    },
    {
      number: 3,
      title: 'Sealed Digital Proof Generated',
      description:
        'GIBBOR creates a tamper-evident digital record anchored to the blockchain. It cannot be altered, deleted, or disputed.',
      icon: '🔐',
    },
  ];

  const tiers = [
    {
      name: 'Base',
      features: ['Emergency button', 'Automatic recording', 'Sealed evidence'],
    },
    {
      name: 'Standard',
      features: ['Everything in Base', 'Emergency contact alerts', 'Incident history'],
    },
    {
      name: 'Premium',
      features: ['Everything in Standard', 'Real-time safe routes', 'Priority response'],
    },
  ];

  const marketStats = [
    { value: '$23B', label: 'Travel insurance market size' },
    { value: '18%', label: 'Annual market growth rate' },
    { value: '$8B', label: 'Travel security apps by 2033' },
    { value: '$240K', label: 'ARR from a 5,000-user pilot at $4/user/month' },
  ];

  return (
    <Section id="how-it-works">
      <div className={styles.header}>
        <Heading level={2}>How It Works</Heading>
        <Body size="lg" className={styles.subtitle}>
          The user doesn't need to know anything about technology. Just press — GIBBOR does the rest.
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
        <Heading level={3} className={styles.diagramTitle}>Service Tiers</Heading>
        <Body size="sm" className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Margin is in the monthly license — not the hardware. $4 per active user per month, 65–70% gross margin.
        </Body>
        <div className={styles.diagram}>
          {tiers.map((tier, idx) => (
            <div key={idx} className={styles.box}>
              <div className={styles.boxLabel}>{tier.name}</div>
              {tier.features.map((f, i) => (
                <div key={i} className={styles.boxContent}>{f}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.keyPoints}>
        {marketStats.map((stat, idx) => (
          <div key={idx} className={styles.keyPoint}>
            <div className={styles.keyIcon} style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.header} style={{ marginTop: '3rem' }}>
        <Heading level={3}>Our Target Partners</Heading>
        <Body size="lg" className={styles.subtitle}>
          We go to market through companies that already have traveling customers — starting with
          premium bank cards. They already offer VIP lounges, medical assistance, and baggage
          insurance. GIBBOR is the next natural benefit.
        </Body>
      </div>
    </Section>
  );
}
