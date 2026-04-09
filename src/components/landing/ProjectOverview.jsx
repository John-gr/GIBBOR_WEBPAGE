import styles from './ProjectOverview.module.css';
import { Section } from '../ui/Section';
import { Heading, Body } from '../ui/Typography';
import { Card, CardContent } from '../ui/Card';
import { Grid, GridItem } from '../ui/Grid';

export function ProjectOverview() {
  const technologies = [
    {
      name: 'Stellar + Soroban',
      description:
        'A public, permission-less blockchain that finalizes transactions in 3-5 seconds, storing incident data and evidence hashes with cryptographic permanence.',
    },
    {
      name: 'GoldSky Indexing',
      description:
        'Indexes Stellar smart contract events in real time, exposing blockchain data as queryable SQL APIs for law enforcement and legal professionals.',
    },
    {
      name: 'SHA-256 Hashing',
      description:
        'Video files stay on the phone. Only the 64-character cryptographic fingerprint goes on-chain—creating mathematical proof of file integrity.',
    },
    {
      name: 'Crossmint Wallet',
      description:
        'Abstracts blockchain complexity. Users sign in with institutional email. Crossmint manages the wallet invisibly—no seed phrases needed.',
    },
  ];

  const benefits = [
    { title: 'Immutable Proof', description: 'Incident data locked on public blockchain' },
    { title: 'Legal Weight', description: 'Timestamps cannot be disputed or altered' },
    { title: 'Tamper-Evident', description: 'Hash comparison proves file authenticity' },
    { title: 'Privacy First', description: 'Evidence stays on device by default' },
  ];

  return (
    <Section id="overview">
      <div className={styles.header}>
        <Heading level={2}>The Problem We Solve</Heading>
        <Body size="lg" className={styles.subtitle}>
          Digital evidence can be lost, altered, or dismissed. Courts lack a chain of custody
          that most digital evidence simply cannot provide.
        </Body>
      </div>

      <div className={styles.problemSolution}>
        <Card className={styles.card}>
          <CardContent>
            <h3 className={styles.cardTitle}>What Exists Today</h3>
            <ul className={styles.list}>
              <li>Video on a phone</li>
              <li>Witness testimony</li>
              <li>Cloud backup (alterable)</li>
              <li>Crypto wallets (complex)</li>
              <li>Raw blockchain data (unreadable)</li>
            </ul>
          </CardContent>
        </Card>

        <div className={styles.arrow}>→</div>

        <Card className={styles.card}>
          <CardContent>
            <h3 className={styles.cardTitle}>GIBBOR Adds</h3>
            <ul className={styles.list}>
              <li>Video + immutable proof of origin</li>
              <li>Blockchain timestamp with legal weight</li>
              <li>On-chain hash—tamper-evident</li>
              <li>One-click access via email</li>
              <li>Queryable incident registry</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className={styles.techSection}>
        <Heading level={3} className={styles.techTitle}>Why Each Technology Exists</Heading>

        <Grid cols={2} gap={6}>
          {technologies.map((tech, idx) => (
            <GridItem key={idx}>
              <Card className={styles.techCard}>
                <CardContent>
                  <h4 className={styles.techName}>{tech.name}</h4>
                  <Body size="sm">{tech.description}</Body>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>

      <div className={styles.benefitsSection}>
        <Heading level={3} className={styles.benefitsTitle}>Key Benefits</Heading>

        <Grid cols={2} gap={6}>
          {benefits.map((benefit, idx) => (
            <GridItem key={idx}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>✓</div>
                <div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <Body size="sm" className={styles.benefitDescription}>
                    {benefit.description}
                  </Body>
                </div>
              </div>
            </GridItem>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
