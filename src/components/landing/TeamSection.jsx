import styles from './TeamSection.module.css';
import { Section } from '../ui/Section';
import { Heading, Body, Caption } from '../ui/Typography';
import { Card, CardContent } from '../ui/Card';
import { Grid, GridItem } from '../ui/Grid';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Jane Doe',
      title: 'CEO & Co-founder',
      bio: 'Legal tech innovator with 10+ years in evidence management.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    },
    {
      name: 'John Smith',
      title: 'CTO & Co-founder',
      bio: 'Blockchain engineer, previously at major crypto infrastructure company.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    {
      name: 'Sarah Johnson',
      title: 'Head of Legal',
      bio: 'Former prosecutor with expertise in digital evidence admissibility.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
  ];

  return (
    <Section id="team">
      <div className={styles.header}>
        <Heading level={2}>Our Team</Heading>
        <Body size="lg" className={styles.subtitle}>
          World-class experts in blockchain, legal systems, and security.
        </Body>
      </div>

      <Grid cols={3} gap={6}>
        {teamMembers.map((member, idx) => (
          <GridItem key={idx}>
            <Card className={styles.teamCard}>
              <CardContent className={styles.cardContent}>
                <img src={member.image} alt={member.name} className={styles.avatar} />
                <h3 className={styles.name}>{member.name}</h3>
                <div className={styles.title}>{member.title}</div>
                <Body size="sm" className={styles.bio}>
                  {member.bio}
                </Body>
              </CardContent>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
}
