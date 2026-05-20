import styles from './ProjectOverview.module.css';
import { Section } from '../ui/Section';
import { Heading, Body } from '../ui/Typography';
import { Card, CardContent } from '../ui/Card';
import { Grid, GridItem } from '../ui/Grid';

export function ProjectOverview() {
  const stats = [
    {
      value: '18%',
      label: 'of travelers experience an incident during their trip',
    },
    {
      value: '3×',
      label: 'higher robbery rate for tourists compared to locals',
    },
    {
      value: '$23B',
      label: 'travel insurance market — and standard policies don\'t cover active security incidents',
    },
    {
      value: '0',
      label: 'seconds to react when it happens — no time to unlock a phone and document the scene',
    },
  ];

  const gaps = [
    'Video on a phone — easily deleted or contested',
    'Witness testimony — unreliable and hard to verify',
    'Cloud backup — alterable after the fact',
    'Insurance claims — rejected without solid evidence',
    'Police reports — filed with no corroborating proof',
  ];

  const solution = [
    'Exact GPS location recorded automatically',
    'Audio captured from the moment of activation',
    'Sealed digital proof — tamper-evident, legally admissible',
    'No technical knowledge required — one button does everything',
    'Families and emergency contacts notified in real time',
  ];

  return (
    <Section id="overview">
      <div className={styles.header}>
        <Heading level={2}>The Problem We Solve</Heading>
        <Body size="lg" className={styles.subtitle}>
          Millions of travelers face security risks every year. When an incident
          happens, they have seconds to react — and no way to prove what occurred.
        </Body>
      </div>

      <Grid cols={2} gap={6}>
        {stats.map((stat, idx) => (
          <GridItem key={idx}>
            <Card className={styles.techCard}>
              <CardContent>
                <h3 className={styles.techName}>{stat.value}</h3>
                <Body size="sm">{stat.label}</Body>
              </CardContent>
            </Card>
          </GridItem>
        ))}
      </Grid>

      <div className={styles.problemSolution} style={{ marginTop: '3rem' }}>
        <Card className={styles.card}>
          <CardContent>
            <h3 className={styles.cardTitle}>The Gap Today</h3>
            <ul className={styles.list}>
              {gaps.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className={styles.arrow}>→</div>

        <Card className={styles.card}>
          <CardContent>
            <h3 className={styles.cardTitle}>GIBBOR Adds</h3>
            <ul className={styles.list}>
              {solution.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className={styles.benefitsSection}>
        <Heading level={3} className={styles.benefitsTitle}>The traveler is not alone anymore.</Heading>
        <Body size="lg" className={styles.subtitle}>
          GIBBOR generates sealed, tamper-proof evidence in seconds. Evidence that
          cannot be altered, dismissed, or ignored — by insurance companies, police,
          or courts.
        </Body>
      </div>
    </Section>
  );
}
