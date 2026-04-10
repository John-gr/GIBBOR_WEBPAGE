import styles from './TeamSection.module.css';
import { Section } from '../ui/Section';
import { Heading, Body, Caption } from '../ui/Typography';
import { Card, CardContent } from '../ui/Card';
import { Grid, GridItem } from '../ui/Grid';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Jonathan Gutierrez Reynoso',
      title: 'Co-founder & Developer',
      bio: 'Software Developer dedicated to tech for good with a passion for blockchain technology',
      image: '/team/Jonathan.jpg',
    },
    {
      name: 'Andrea Basurto Ocampo',
      title: 'Co-founder & Concept Creator',
      bio: 'Software developer driven by social impact and a deep commitment to improving access to justice.',
      image: '/team/Andrea.jpg',
    },
    {
      name: 'David Eliaquim Díaz Hernández',
      title: 'Co-founder & Full-Stack Engineer',
      bio: 'Technical Architect with a background in blockchain and smart contract development.',
      image: '/team/Eliaquim.jpg',
    },
  ];

  return (
    <Section id="team">
      <div className={styles.header}>
        <Heading level={2}>Gibborim</Heading>
        <Body size="lg" className={styles.subtitle}>
          The Gibborim team is focused on blockchain, legal systems, and security.
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
